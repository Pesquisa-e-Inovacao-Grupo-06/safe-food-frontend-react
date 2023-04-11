import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSafeFoodTheme } from "./app/contexts/SafeFoodThemeProvider";
import Home from "./pages/home";
import About from "./pages/about";
import FAQ from "./pages/faq";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { makeHttpClient } from "./app/factories/makeAxiosHttpClient";
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
	const { toggleTheme, getTheme } = useSafeFoodTheme();

	useEffect(() => {
		(async () => {
			// const httpNoBase = makeHttpClient();
			// let resHttpNoBase = await httpNoBase.execute({
			// 	url: "https://6423779577e7062b3e327648.mockapi.io/music-box",
			// });

			// console.log(resHttpNoBase);
			// const baseURL = "https://6423779577e7062b3e327648.mockapi.io/";
			// const http = makeHttpClient(baseURL);
			// let res1 = await http.execute<ResponseLoginExample, RequestLoginExample>({
			// 	url: "music-box",
			// 	method: "POST",
			// 	contentType: "application/json",
			// 	body: {
			// 		email: "login@example.com",
			// 		password: "1233",
			// 	},
			// 	paramsURL: {
			// 		content: 1,
			// 	},
			// });
			// console.log(res1);
			// // Veja o console e tbm o network do devtools do navegador (filtre por requisições)

			const baseURL = "http://localhost:8081/usuarios";
			const http = makeHttpClient(baseURL);
			let response = await http.execute<UserType, UserType>({
				url: "",
				method: "POST",
				contentType: "application/json",
				body: {
					email: "lincoln@gmail.com",
					password: "123123",
				},
			});
			console.log(response);
		})();
	}, []);
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
