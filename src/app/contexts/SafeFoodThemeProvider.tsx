import { darkTheme, lightTheme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/theme/global-style";
import {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Cache } from "../domain/protocols/Cache";
type Sizes = "xsm" | "sm" | "md" | "lg" | "xlg" | "xxlg";
type BreakpointObject = {
	size: Sizes;
	width: number;
};
export type SafeFoodTheme = {
	toggleTheme(): void;
	getTheme(): DefaultTheme;
	getBreakpoint(): BreakpointObject;
	getBreakpointSizes(): Map<Sizes, number>;
	zoom: number;
	font: number;
	setZoom(zoom: number | number[]): void;
	setFont(font: number | number[]): void;
};

export const safeFoodContext = createContext<SafeFoodTheme>(
	{} as SafeFoodTheme
);

type SafeFoodThemeProviderProps = {
	cache: Cache;
} & PropsWithChildren;
export const SafeFoodThemeProvider = ({
	cache,
	children,
}: SafeFoodThemeProviderProps) => {
	const themeCachedString = cache.getItem("theme");
	const zoomCachedString = cache.getItem("zoom");
	const fontCachedString = cache.getItem("font");
	const themeCached = themeCachedString
		? (JSON.parse(themeCachedString) as DefaultTheme)
		: null;
	const isDarkMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useState<DefaultTheme>(
		themeCached ? themeCached : isDarkMedia ? darkTheme : lightTheme
	);
	const [zoom, setZoom] = useState<number>(Number(zoomCachedString));
	const [font, setFont] = useState<number>(Number(fontCachedString));
	const getTheme = useCallback(() => theme, []);
	const getZoom = useCallback(() => zoom, []);
	const getFont = useCallback(() => font, []);

	useEffect(() => {
		if (!themeCachedString) {
			cache.setItem("theme", JSON.stringify(theme));
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme.isLight ? darkTheme : lightTheme;
		setTheme(newTheme);
		cache.setItem("theme", JSON.stringify(newTheme));
	};
	const { lg, md, sm, xlg, xsm, xxlg } = {
		xsm: 380,
		sm: 576,
		md: 768,
		lg: 996,
		xlg: 1200,
		xxlg: 1400,
	};
	const getBreakpoint = () => {
		let map: BreakpointObject;
		if (innerWidth < xsm) map = { size: "xsm", width: xsm };
		else if (innerWidth < sm) map = { size: "sm", width: sm };
		else if (innerWidth < md) map = { size: "md", width: md };
		else if (innerWidth < lg) map = { size: "lg", width: lg };
		else if (innerWidth < xlg) map = { size: "xlg", width: xlg };
		else map = { size: "xxlg", width: xxlg };
		return map;
	};
	const getBreakpointSizes = () => {
		let map: Map<Sizes, number> = new Map();
		map.set("xsm", xsm);
		map.set("sm", sm);
		map.set("md", md);
		map.set("lg", lg);
		map.set("xlg", xlg);
		map.set("xxlg", xxlg);
		return map;
	};
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<safeFoodContext.Provider
				value={{
					getTheme,
					toggleTheme,
					getBreakpoint,
					getBreakpointSizes,
					setFont(font: number) {
						if (font == 14) {
							setFont(font);
							cache.setItem("font", 90 + "");
						}
						if (font == 16) {
							setFont(font);
							cache.setItem("font", 100 + "");
						}
						if (font == 18) {
							setFont(font);
							cache.setItem("font", 110 + "");
						}
					},
					// cache.setItem("font", font + "");
					setZoom(zoom: number) {
						if (zoom == 80) {
							setZoom(zoom);
							cache.setItem("zoom", 98 + "");
						}
						if (zoom == 100) {
							setZoom(zoom);
							cache.setItem("zoom", 100 + "");
						}
						if (zoom == 120) {
							setZoom(zoom);
							cache.setItem("zoom", 102 + "");
						}
					},
					font,
					zoom,
				}}
			>
				{children}
			</safeFoodContext.Provider>
		</ThemeProvider>
	);
};

export const useSafeFoodTheme = () => useContext(safeFoodContext);
