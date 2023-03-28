import React, { useState } from "react";
import { useSafeFoodTheme } from "./app/contexts/SafeFoodThemeProvider";
import { Button } from "./components/atoms/button";
import { Container, ContainerFluid } from "./components/atoms/container";
import { Eye } from "./components/atoms/eye-icon";
import { TextField } from "./components/molecules/textfield";
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
			<ContainerFluid height={300}>
				<h1>OI</h1>
				<Button onClick={toggleTheme}>Mudar tema</Button>
				<br />
				<br />
				<TextField
					id="nome"
					label="Nome: "
					error={error}
					required
					value={value}
					min={11}
					max={14}
					inputMode="text"
					type={!showPassword ? "password" : "string"}
					renderEndIcon={() => (
						<Eye
							closed={showPassword}
							onClick={togglePassword}
						/>
					)}
					onChange={e => {
						let val: string = e.currentTarget.value;
						let valJustNumbers = val.replaceAll(regexNotNumber, "").substring(0, 11);
						let valFormatted = valJustNumbers.replace(regexFormatCpf, "$1.$2.$3-$4");
						if (!/(\d){3}\.?(\d){3}\.?(\d){3}-?(\d){2}/g.test(valFormatted)) {
							setError("O CPF informado eh invalido");
						} else {
							setError("");
						}
						if (valFormatted.length === 0) setError("");
						setValue(valFormatted);
					}}
				/>
			</ContainerFluid>
		</>
	);
}
