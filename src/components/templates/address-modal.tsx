import React, { useCallback, useEffect, useState } from "react";
import { Modal } from "../molecules/modal";
import { Box } from "../atoms/box";
import { AlertType } from "../atoms/alert";
import { Button } from "@/components/atoms/button";
import { CepValidator } from "@/app/util/validations/cep-validator";
import { FindAddress } from "@/app/domain/usecases/FindAddress";
import { SafeFoodCreateAddressRequest } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import { TextField } from "@/components/molecules/textfield";
export type AddressModalProps = {
	toggleModal(): void;
	isModalVisible: boolean;
	isAlertVisible?: boolean;
	typeAlert?: AlertType;
	textAlert?: string;
	validator: CepValidator;
	usecase: FindAddress;
};

export const AddressModal: React.FC<AddressModalProps> = ({
	isModalVisible,
	validator,
	usecase,
	toggleModal,
}) => {
	const [cep, setCep] = useState<string>("");
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
				// clearAddress(cep);
				// setError("CEP invalido");
			});
	};

	return (
		<>
			<Modal
				size="sm"
				height="md"
				padding="20px 20px 40px 20px"
				responsive
				isOpen={isModalVisible}
				onClickForeground={() => {
					setTimeout(() => {
						toggleModal();
					}, 300);
				}}
			>
				<Box
					display="flex"
					justify="left"
					alignItems="baseline"
					flexDirection="column"
					padding="20px"
					height="90%"
					margin="auto"
					gap={"12px"}
					maxWidth={"400px"}
					alignSelf="center"
				>
					<TextField
						id={""}
						label={""}
						value={cep}
						onChange={async ev => {
							const str = ev.currentTarget.value;
							const value = validator.format(str);
							setCep(value);
							if (value.length > 8) {
								findAddress(value); // Use the updated value here
							}
							console.log(address);
						}}
						required={false}
						max={9}
						min={8}
					/>

					<Button onClick={() => console.log(address)}>
						Adicionar novo endereço
					</Button>
				</Box>
			</Modal>
		</>
	);
};
