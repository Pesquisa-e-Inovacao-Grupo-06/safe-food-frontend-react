import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { SafeFoodThemeProvider } from "./app/contexts/SafeFoodThemeProvider";
import { makeCache } from "./app/factories/makeLocalStorageCache";

const cache = makeCache();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SafeFoodThemeProvider cache={cache}>
			<App />
		</SafeFoodThemeProvider>
	</React.StrictMode>
);
