import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { SafeFoodThemeProvider } from "./app/contexts/SafeFoodThemeProvider";
import { LocalStorageCache } from "./app/infra/protocols/LocalStorageCache";
import { AxiosHttpClient } from "./app/infra/protocols/AxiosHttpClient";
import { SafeFoodUserGateway } from "./app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodConsumerGateway } from "./app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodRestrictionGateway } from "./app/infra/gateway/safefood/SafeFoodRestrictionGateway";
import { ViaCepGateway } from "./app/infra/gateway/viacep/ViaCepGateway";
import { of } from "./app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";

const cache = new LocalStorageCache();
const safeFoodClient = new AxiosHttpClient("http://localhost:8081");
const defaultClient = new AxiosHttpClient();
const userGateway = new SafeFoodUserGateway(safeFoodClient);
const consumerGateway = new SafeFoodConsumerGateway(safeFoodClient, cache);
const restrictionsGateway = new SafeFoodRestrictionGateway(safeFoodClient);
const viaCepGateway = new ViaCepGateway(defaultClient);

if (!cache.getItem("restricoes")) {
	restrictionsGateway.getAll().then(data => {
		cache.setItem("restricoes", JSON.stringify(data.map(of)));
	});
}
consumerGateway.findById(1).then(data => console.log(data));
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SafeFoodThemeProvider cache={cache}>
			<App
				cache={cache}
				userGateway={userGateway}
				consumerGateway={consumerGateway}
				restrictionsGateway={restrictionsGateway}
				viaCepGateway={viaCepGateway}
			/>
		</SafeFoodThemeProvider>
	</React.StrictMode>
);
