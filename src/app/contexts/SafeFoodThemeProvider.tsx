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
import { Cache } from "../domain/services/Cache";

export type SafeFoodTheme = {
	toggleTheme(): void;
	getTheme(): DefaultTheme;
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
	const themeCached = themeCachedString
		? (JSON.parse(themeCachedString) as DefaultTheme)
		: null;
	const isDarkMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useState<DefaultTheme>(
		themeCached ? themeCached : isDarkMedia ? darkTheme : lightTheme
	);
	const getTheme = useCallback(() => theme, []);

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
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<safeFoodContext.Provider
				value={{
					getTheme,
					toggleTheme,
				}}
			>
				{children}
			</safeFoodContext.Provider>
		</ThemeProvider>
	);
};

export const useSafeFoodTheme = () => useContext(safeFoodContext);
