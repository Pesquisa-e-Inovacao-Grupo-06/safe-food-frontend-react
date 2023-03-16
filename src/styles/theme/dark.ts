import { DefaultTheme } from "styled-components";

import { theme } from "./theme";

export const darkTheme: DefaultTheme = {
	...theme,
	name: "light",
	colors: {
		...theme.colors,
		background: theme.colors.dark_gray[2],
		text: theme.colors.light_gray[0],
	},
};
