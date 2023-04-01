import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSafeFoodTheme } from "./app/contexts/SafeFoodThemeProvider";
import { Button } from "./components/atoms/button";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Header from "./components/molecules/header";
export default function App() {
	const { toggleTheme, getTheme } = useSafeFoodTheme();

	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</Router>
		</>
	);
}
