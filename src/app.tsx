import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { makeHttpClient } from "./app/factories/makeAxiosHttpClient";
import Profile from "./pages/profile-consumer";
import TermOfService from "./pages/term-of-service";
import ProfileEstablishment from "./pages/profile-establishment";
import HomeEstablishment from "./pages/home-establishment";
import ProductConsumer from "./pages/product-consumer";

type ResponseLoginExample = {
	name: string;
	token: string;
};
type RequestLoginExample = {
	email: string;
	password: string;
};
export default function App() {
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
						element={<SignIn />}
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
				</Routes>
			</Router>
		</>
	);
}

export type UserType = {
	email: string;
	password: string;
};
