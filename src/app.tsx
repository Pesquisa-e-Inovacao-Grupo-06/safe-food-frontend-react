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
import { RemoteSignInService } from "./app/infra/services/RemoteSignInService";
import { makeHttpClient } from "./app/factories/makeAxiosHttpClient";
import { EmailValidator } from "./app/util/validations/email-validator";
import { PasswordValidator } from "./app/util/validations/password-validator";

export default function App() {
	const client = makeHttpClient("http://localhost:8081");
	return (
		<>
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
								emailValidator={new EmailValidator(5, 100)}
								passwordValidator={new PasswordValidator(7, 20)}
								useCase={new RemoteSignInService(client)}
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
		</>
	);
}
