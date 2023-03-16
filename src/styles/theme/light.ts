import { DefaultTheme } from "styled-components";

import { theme } from "./theme";

export const lightTheme: DefaultTheme = {
	...theme,
	name: "light",
	colors: {
		...theme.colors,
		background: theme.colors.light_gray[0],
		text: theme.colors.dark_gray[3],
	},
};
