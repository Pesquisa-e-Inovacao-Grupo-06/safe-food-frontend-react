import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { InputValidator } from "@/app/util/validations/input-validator";
import { Column } from "@/components/atoms/column";
import { Row } from "@/components/molecules/row/styles";
import { TextField } from "@/components/molecules/textfield";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const InputsAddressSignupEstablishment: React.FC<{
	validator: InputValidator;
	usecase: FindAddress;
}> = ({ validator, usecase }) => {
	const [cep, setCep] = useState("");
	const [errorCep, setError] = useState("");
	const [state, setState] = useState("");
	const [logradouro, setLogradouro] = useState("");
	const [number, setNumber] = useState("");
	const [complement, setComplement] = useState("");

	const findAddress = (cep: string) => {
		usecase
			.execute(cep)
			.then(({ params }) => {
				const { cep, complemento, logradouro, estado } = params;
				setCep(cep ?? "");
				setComplement(complemento ?? "");
				setLogradouro(logradouro ?? "");
				setState(estado ?? "");
			})
			.catch(err => {
				clearAddress();
				setError("CEP invalido");
			});
	};
	const clearAddress = () => {
		setComplement("");
		setLogradouro("");
		setState("");
	};

	return (
		<>
			<Row>
				<Column maxWidth="48%">
					<TextField
						label="CEP: "
						required={true}
						id="address-cep"
						value={cep}
						renderEndIcon={() => <FaSearch />}
						onChange={ev => {
							const str = ev.currentTarget.value;
							const value = validator.format(str);
							setCep(value);
							if (str.length > 0) {
								const errors = validator.validate(value);
								if (errors.length == 0) {
									setError("");
									findAddress(value);
								} else {
									clearAddress();
									setError(errors.join(";"));
								}
							} else {
								clearAddress();
								setError("");
							}
						}}
						placeholder="00000-000"
						title="Digite seu CEP"
						type="string"
						inputMode="numeric"
						error={errorCep}
					/>
				</Column>
				<Column maxWidth="48%">
					<TextField
						label="Estado: "
						id="address-state"
						disabled
						required={!!cep}
						value={state}
						placeholder="SP"
						onChange={() => {}}
						title="Estado/UF de seu endereço"
						type="string"
						inputMode="text"
					/>
				</Column>
			</Row>
			<Row gap="20px">
				<Column>
					<TextField
						label="Logradouro: "
						id="address-logradouro"
						disabled
						required={!!cep}
						value={logradouro}
						onChange={() => {}}
						title="Logradouro do endereço"
					/>
				</Column>
			</Row>
			<Row gap="20px">
				<Column
					size={1}
					maxWidth="120px"
				>
					<TextField
						label="Número: "
						required={!!cep} // TODO Depende
						disabled={!cep} // depende
						id="address-number"
						value={number}
						onChange={ev => {
							setNumber(ev.currentTarget.value);
						}}
						placeholder="123"
						title="Digite o número de seu endereço"
						type="string"
					/>
				</Column>
				<Column size={3}>
					<TextField
						label="Complemento: "
						required={false}
						disabled={!cep} // depende
						id="address-complement"
						value={complement}
						onChange={ev => {
							setComplement(ev.currentTarget.value);
						}}
						title="Complemento de seu endereço"
						type="string"
					/>
				</Column>
			</Row>
		</>
	);
};
