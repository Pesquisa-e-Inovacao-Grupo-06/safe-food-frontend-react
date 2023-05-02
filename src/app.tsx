import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile-consumer";
import TermOfService from "./pages/term-of-service";
import ProfileEstablishment from "./pages/profile-establishment";
import HomeEstablishment from "./pages/home-establishment";
import ProductConsumer from "./pages/product-consumer";
import PreferencesEstablishment from "./pages/preferences-establishment";
import { SafeFoodUserGateway } from "./app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodConsumerGateway } from "./app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodRestrictionGateway } from "./app/infra/gateway/safefood/SafeFoodRestrictionGateway";
import { AxiosHttpClient } from "./app/infra/protocols/AxiosHttpClient";
import { Cache } from "./app/domain/protocols/Cache";
import { InputsValidatorProvider } from "./app/contexts/InputValidatorsProvider";

type AppProps = {
	cache: Cache;
	userGateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
	restrictionsGateway: SafeFoodRestrictionGateway;
};
export default function App({
	cache,
	consumerGateway,
	restrictionsGateway,
	userGateway,
}: AppProps) {
	return (
		<>
			<InputsValidatorProvider>
				<Router>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/faq"
							element={<FAQ />}
						/>
						<Route
							path="/signin"
							element={
								<SignIn
									gateway={userGateway}
									cache={cache}
								/>
							}
						/>
						<Route
							path="/signup"
							element={<SignUp />}
						/>
						<Route
							path="/profile-consumer"
							element={<Profile />}
						/>
						<Route
							path="/profile-establishment"
							element={<ProfileEstablishment />}
						/>
						<Route
							path="/term-of-service"
							element={<TermOfService />}
						/>
						<Route
							path="/home-establishment"
							element={<HomeEstablishment />}
						/>
						<Route
							path="/product-consumer"
							element={<ProductConsumer />}
						/>
						<Route
							path="/preferences-establishment"
							element={<PreferencesEstablishment />}
						/>
					</Routes>
				</Router>
			</InputsValidatorProvider>
		</>
	);
}
