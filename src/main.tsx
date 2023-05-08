import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { SafeFoodThemeProvider } from "./app/contexts/SafeFoodThemeProvider";
import { LocalStorageCache } from "./app/infra/protocols/LocalStorageCache";
import { AxiosHttpClient } from "./app/infra/protocols/AxiosHttpClient";
import { SafeFoodUserGateway } from "./app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodRestrictionGateway } from "./app/infra/gateway/safefood/SafeFoodRestrictionGateway";
import { ViaCepGateway } from "./app/infra/gateway/viacep/ViaCepGateway";
import { SafeFoodConsumerGateway } from "./app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodEstablishmentGateway } from "./app/infra/gateway/safefood/SafeFoodEstablishmentGateway";
import { SafeFoodRestrictionModel } from "./app/infra/gateway/safefood/models/SafeFoodRestriction";

const cache = new LocalStorageCache();
const safeFoodClient = new AxiosHttpClient("http://localhost:8081");
const defaultClient = new AxiosHttpClient();
const userGateway = new SafeFoodUserGateway(safeFoodClient);
const consumerGateway = new SafeFoodConsumerGateway(safeFoodClient, cache);
const restrictionsGateway = new SafeFoodRestrictionGateway(safeFoodClient);
const viaCepGateway = new ViaCepGateway(defaultClient);
const establishmentGateway = new SafeFoodEstablishmentGateway(
	safeFoodClient,
	cache
);

if (!cache.getItem("restricoes")) {
	restrictionsGateway.getAll().then(data => {
		cache.setItem("restricoes", JSON.stringify(data.map(of)));
	});
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SafeFoodThemeProvider cache={cache}>
			<App
				cache={cache}
				userGateway={userGateway}
				restrictionsGateway={restrictionsGateway}
				viaCepGateway={viaCepGateway}
				consumerGateway={consumerGateway}
				establishmentGateway={establishmentGateway}
			/>
		</SafeFoodThemeProvider>
	</React.StrictMode>
);
function of(
	value: SafeFoodRestrictionModel,
	index: number,
	array: SafeFoodRestrictionModel[]
): unknown {
	throw new Error("Function not implemented.");
}
