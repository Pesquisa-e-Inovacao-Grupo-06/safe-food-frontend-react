import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { makeHttpClient } from "./app/factories/makeAxiosHttpClient";
import Profile from "./pages/profile";
import TermOfService from "./pages/term-of-service";

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
						path="/profile"
						element={<Profile />}
          />
          <Route
						path="/term-of-service"
						element={<TermOfService />}
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
