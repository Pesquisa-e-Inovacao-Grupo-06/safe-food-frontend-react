import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { HttpClient } from "@/app/domain/protocols/HttpClient";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { SafeFoodCreateAddressRequest } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import { CepValidator } from "@/app/util/validations/cep-validator";
import { InputValidator } from "@/app/util/validations/input-validator";
import { Column } from "@/components/atoms/column";
import { Row } from "@/components/molecules/row/styles";
import { TextField } from "@/components/molecules/textfield";
import React, { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export const InputsAddressSignupEstablishment: React.FC<{
	validator: CepValidator;
	usecase: FindAddress;
}> = ({ validator, usecase }) => {
	const { setEstablishment, establishment } = useSignupEstablishment();
	const [errorCep, setError] = useState("");
	const [cep, setcep] = useState<string>("");
	const [address, setAddress] = useState<SafeFoodCreateAddressRequest>({
		apelido: "",
		bairro: "",
		cep: "",
		cidade: "",
		complemento: "",
		estado: "",
		logradouro: "",
		numero: "",
	} as SafeFoodCreateAddressRequest);
	useEffect(() => {
		setEstablishment({
			...establishment,
			endereco: {
				...address,
			},
		});
	}, [address]);
	const findAddress = (cep: string) => {
		usecase
			.execute(cep)
			.then(({ params }) => {
				const { cep, complemento, logradouro, estado, bairro, cidade } = params;
				setAddress({
					...address,
					cep: cep || "",
					complemento: complemento || "",
					logradouro: logradouro || "",
					estado: estado || "",
					bairro: bairro || "",
					cidade: cidade || "",
				});
			})
			.catch(err => {
				clearAddress(cep);
				setError("CEP invalido");
			});
	};
	const clearAddress = useCallback(
		(cep: string) => {
			setAddress({
				...address,
				cep: cep,
				cidade: "",
				estado: "",
				logradouro: "",
				bairro: "",
			});
		},
		[address.cep]
	);

	return (
		<>
			<Row>
				<Column maxWidth="48%">
					<TextField
						label="CEP: "
						required={true}
						id="address-cep"
						value={address.cep}
						min={8}
						max={9}
						renderEndIcon={() => <FaSearch />}
						onChange={ev => {
							const str = ev.currentTarget.value;
							const value = validator.format(str);
							setAddress({
								...address,
								cep: value,
							});
							if (str.length > 0) {
								const errors = validator.validate(value);
								if (errors.length == 0) {
									setError("");
									findAddress(value);
								} else {
									setError(errors.join(";"));
								}
							} else {
								clearAddress(value);
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
						required={!!address.cep}
						value={address.estado}
						placeholder="SP"
						onChange={ev => {
							setAddress({
								...address,
								estado: ev.currentTarget.value,
							});
						}}
						title="Estado/UF de seu endereço"
						type="string"
						inputMode="text"
					/>
				</Column>
			</Row>
			<Row>
				<Column maxWidth="48%">
					<TextField
						label="Bairro: "
						disabled
						required={!!address.cep}
						id="address-bairro"
						value={address.bairro}
						onChange={ev => {
							setAddress({
								...address,
								bairro: ev.currentTarget.value,
							});
						}}
						title="Digite seu bairro"
						type="string"
					/>
				</Column>
				<Column maxWidth="48%">
					<TextField
						label="Estado: "
						id="address-cidade"
						disabled
						required={!!address.cep}
						value={address.estado}
						placeholder=""
						onChange={ev => {
							setAddress({
								...address,
								cidade: ev.currentTarget.value,
							});
						}}
						title="Cidade de seu endereço"
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
						required={!!address.cep}
						value={address.logradouro}
						onChange={ev => {
							setAddress({
								...address,
								logradouro: ev.currentTarget.value,
							});
						}}
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
						required={!!address.cep} // TODO Depende
						disabled={!address.cep} // depende
						id="address-number"
						value={address.numero}
						onChange={ev => {
							setAddress({
								...address,
								numero: ev.currentTarget.value,
							});
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
						disabled={!address.cep} // depende
						id="address-complement"
						value={address.complemento}
						onChange={ev => {
							setAddress({
								...address,
								complemento: ev.currentTarget.value,
							});
						}}
						title="Complemento de seu endereço"
						type="string"
					/>
				</Column>
			</Row>
		</>
	);
};
