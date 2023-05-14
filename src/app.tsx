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
import HomeConsumer from "./pages/home-consumer";
import { SafeFoodUserGateway } from "./app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodRestrictionGateway } from "./app/infra/gateway/safefood/SafeFoodRestrictionGateway";
import { Cache } from "./app/domain/protocols/Cache";
import { InputsValidatorProvider } from "./app/contexts/InputValidatorsProvider";
import { ViaCepGateway } from "./app/infra/gateway/viacep/ViaCepGateway";
import { AuthRoute } from "./pages/auth/AuthRoute";
import { AuthProvider } from "./app/contexts/AuthProvider";
import { SafeFoodConsumerGateway } from "./app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodEstablishmentGateway } from "./app/infra/gateway/safefood/SafeFoodEstablishmentGateway";
import NotFound from "./pages/not-found";
import PreferencesEstablishment from "./pages/preferences-establishment";
import { SafeFoodProductGateway } from "./app/infra/gateway/safefood/SafeFoodProductGateway";
import ProductConsumer from "./pages/product-consumer";

type AppProps = {
	cache: Cache;
	userGateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
	restrictionsGateway: SafeFoodRestrictionGateway;
	viaCepGateway: ViaCepGateway;
	establishmentGateway: SafeFoodEstablishmentGateway;
	productGateway: SafeFoodProductGateway;
};
export default function App({
	cache,
	consumerGateway,
	restrictionsGateway,
	userGateway,
	viaCepGateway,
	establishmentGateway,
	productGateway,
}: AppProps) {
	return (
		<>
			<InputsValidatorProvider>
				<AuthProvider cache={cache}>
					<Router>
						<Routes>
							<Route
								path="/"
								element={
									<Home
										cache={cache}
										productGateway={productGateway}
									/>
								}
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
										cache={cache}
										gateway={userGateway}
										consumerGateway={consumerGateway}
										establishmentGateway={establishmentGateway}
									/>
								}
							/>
							<Route
								path="/signup"
								element={
									<SignUp
										cache={cache}
										viaCepGateway={viaCepGateway}
										gateway={establishmentGateway}
									/>
								}
							/>
							<Route
								path="/profile"
								element={
									<AuthRoute userAuth="CONSUMIDOR">
										<Profile
											cache={cache}
											consumerGateway={consumerGateway}
										/>
									</AuthRoute>
								}
							/>
							<Route
								path="/profile-establishment"
								element={
									<AuthRoute userAuth="ESTABELECIMENTO">
										<ProfileEstablishment
											cache={cache}
											establishmentGateway={establishmentGateway}
										/>
									</AuthRoute>
								}
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
								element={
									<ProductConsumer
										cache={cache}
										productGateway={productGateway}
									/>
								}
							/>
							<Route
								path="/preferences-establishment"
								element={<PreferencesEstablishment />}
							/>
							<Route
								path="/home-consumer"
								element={
									<HomeConsumer
										cache={cache}
										productGateway={productGateway}
									/>
								}
							/>
							<Route
								path="/*"
								element={<NotFound />}
							/>
						</Routes>
					</Router>
				</AuthProvider>
			</InputsValidatorProvider>
		</>
	);
}
