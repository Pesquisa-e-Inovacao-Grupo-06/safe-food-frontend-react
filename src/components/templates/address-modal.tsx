import React from "react";
import { Modal } from "../molecules/modal";
import { Box } from "../atoms/box";
import { Button } from "@/components/atoms/button";
import { SafeFoodCreateAddressRequest } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import { TextField } from "@/components/molecules/textfield";
export type AddressModalProps = {
	toggleModal(): void;
	isModalVisible: boolean;
	address: SafeFoodCreateAddressRequest;
	cep: string;
	numero: string;
	apelido: string;
	onChangeNumero: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	onChangeApelido: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	onClickSaveNewAddress(): void;
	onChange: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
};

export const AddressModal: React.FC<AddressModalProps> = ({
	isModalVisible,
	toggleModal,
	onClickSaveNewAddress,
	address,
	onChange,
	cep,
	numero,
	onChangeNumero,
	apelido,
	onChangeApelido,
}) => {
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
						id={"apelido"}
						label={"Apelido:"}
						value={apelido}
						onChange={onChangeApelido}
						required={false}
					/>
					<TextField
						id={"cep"}
						label={"Cep:"}
						value={cep}
						onChange={onChange}
						required={false}
					/>
					<TextField
						id={"logradouro"}
						label={"Logradouro:"}
						value={address.logradouro}
						onChange={() => {}}
						required={false}
					/>
					<TextField
						id={"estado"}
						label={"Estado:"}
						value={address.estado}
						onChange={() => {}}
						required={false}
					/>
					<TextField
						id={"bairro"}
						label={"Bairro:"}
						value={address.bairro}
						onChange={() => {}}
						required={false}
					/>
					<TextField
						id={"cidade"}
						label={"Cidade:"}
						value={address.cidade}
						onChange={() => {}}
						required={false}
					/>
					<TextField
						id={"numero"}
						label={"Número:"}
						value={numero}
						onChange={onChangeNumero}
						required={false}
					/>
					<TextField
						id={"complemento"}
						label={"Complemento:"}
						value={address.complemento}
						onChange={() => {}}
						required={false}
					/>
					<Button onClick={onClickSaveNewAddress}>Adicionar novo endereço</Button>
				</Box>
			</Modal>
		</>
	);
};
