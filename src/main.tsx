import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/atoms/button/button-atom";
import { GlobalStyles } from "./styles/theme/global-style";
import { lightTheme } from "./styles/theme/light";
import { ButtonIcon } from "./components/molecules/button/button-icon";
import { FaArrowRight } from "react-icons/fa";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
		</ThemeProvider>
	</React.StrictMode>
);
