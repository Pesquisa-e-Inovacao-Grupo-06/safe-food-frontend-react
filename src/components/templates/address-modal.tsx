import React, { FormEvent } from "react";
import { Modal } from "../molecules/modal";
import { Box } from "../atoms/box";
import { Button } from "@/components/atoms/button";
import {
	SafeFoodAddressModel,
	SafeFoodCreateAddressRequest,
} from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import { TextField } from "@/components/molecules/textfield";
export type AddressModalProps = {
	toggleModal(): void;
	isModalVisible: boolean;
	address: SafeFoodAddressModel;
	onClickSaveNewAddress?(address: SafeFoodCreateAddressRequest): void;
	onClickUpdateAddress(address: SafeFoodAddressModel): void;
	onChangeInputApelido(ev: FormEvent<HTMLInputElement>): void;
	onChangeInputCep(ev: FormEvent<HTMLInputElement>): void;
	onChangeInputNumero(ev: FormEvent<HTMLInputElement>): void;
	onChangeInputComplemento(ev: FormEvent<HTMLInputElement>): void;

};

export const AddressModal: React.FC<AddressModalProps> = ({
	isModalVisible,
	toggleModal,
	address,
   	onClickUpdateAddress,    
	onClickSaveNewAddress,
	onChangeInputApelido,
	onChangeInputCep,
	onChangeInputComplemento,
	onChangeInputNumero
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
						value={ address.apelido}
						onChange={onChangeInputApelido}
						required={false}
					/>
					<TextField
						id={"cep"}
						label={"Cep:"}
						value={address.cep}
						onChange={onChangeInputCep}
						required={false}
					/>
					<TextField
						id={"logradouro"}
						label={"Logradouro:"}
						value={address.logradouro}
						onChange={() => { }}
						required={false}
					/>
					<TextField
						id={"estado"}
						label={"Estado:"}
						value={address.estado}
						onChange={() => { }}
						required={false}
					/>
					<TextField
						id={"bairro"}
						label={"Bairro:"}
						value={address.bairro}
						onChange={() => { }}
						required={false}
					/>
					<TextField
						id={"cidade"}
						label={"Cidade:"}
						value={address.cidade}
						onChange={() => { }}
						required={false}
					/>
					<TextField
						id={"numero"}
						label={"Número:"}
						value={ address.numero}
						onChange={onChangeInputNumero}
						required={false}
					/>
					<TextField
						id={"complemento"}
						label={"Complemento:"}
						value={address.complemento}
						onChange={onChangeInputComplemento}
						required={false}
					/>
					<Button
						onClick={() => {
							if (address.id) {
								onClickUpdateAddress({
									...address,
								});
							} else{
								if(!onClickSaveNewAddress){
									return;
								}
								onClickSaveNewAddress({
									...address,
								});
							}
						}}
					>
						{address.id ? "Atualizar" : "Adicionar"}
					</Button>
				</Box>
			</Modal>
		</>
	);
};
