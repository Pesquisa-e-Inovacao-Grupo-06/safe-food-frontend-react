export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../src/styles/theme";
import { GlobalStyles } from "../src/styles/theme/global-style";

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: lightTheme,
			dark: darkTheme,
		},
		defaultTheme: "light",
		Provider: ThemeProvider,
		GlobalStyles,
	}),
];
