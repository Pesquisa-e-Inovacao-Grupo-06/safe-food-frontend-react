import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { makeHttpClient } from "./app/factories/makeAxiosHttpClient";
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
				</Routes>
			</Router>
		</>
	);
}

export type UserType = {
	email: string;
	password: string;
};
