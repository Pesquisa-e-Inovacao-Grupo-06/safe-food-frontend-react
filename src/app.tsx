import React from "react";
import { useSafeFoodTheme } from "./app/contexts/SafeFoodThemeProvider";
import { Button } from "./components/atoms/button";
export default function App() {
	const { toggleTheme, getTheme } = useSafeFoodTheme();

	return (
		<>
			<h1>OI</h1>
			<Button onClick={toggleTheme}>Mudar tema</Button>
		</>
	);
}
