import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { SafeFoodThemeProvider } from "./app/contexts/SafeFoodThemeProvider";
import { LocalStorageCache } from "./app/infra/protocols/LocalStorageCache";
import { AxiosHttpClient } from "./app/infra/protocols/AxiosHttpClient";
import { SafeFoodUserGateway } from "./app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodConsumerGateway } from "./app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodRestrictionGateway } from "./app/infra/gateway/safefood/SafeFoodRestrictionGateway";

const cache = new LocalStorageCache();
const safeFoodClient = new AxiosHttpClient("http://localhost:8081");
const userGateway = new SafeFoodUserGateway(safeFoodClient);
const consumerGateway = new SafeFoodConsumerGateway(safeFoodClient);
const restrictionsGateway = new SafeFoodRestrictionGateway(safeFoodClient);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SafeFoodThemeProvider cache={cache}>
			<App
				cache={cache}
				userGateway={userGateway}
				consumerGateway={consumerGateway}
				restrictionsGateway={restrictionsGateway}
			/>
		</SafeFoodThemeProvider>
	</React.StrictMode>
);
