import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSafeFoodTheme } from "./app/contexts/SafeFoodThemeProvider";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { useState } from "react";
export default function App() {
	const { toggleTheme, getTheme } = useSafeFoodTheme();
	const [showPassword, setShowPassword] = useState(false);
	const [value, setValue] = useState<string>("");
	const togglePassword = () => setShowPassword(!showPassword);
	const [error, setError] = useState<string>("");

	const regexNotNumber = /\.?-?\D/g;
	const regexFormatCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
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
