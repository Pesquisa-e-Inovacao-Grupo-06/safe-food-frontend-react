import React from 'react';
import { Modal } from '../../molecules/modal';
import { Button } from '@/components/atoms/button';
import {
	SafeFoodAddressModel,
	SafeFoodCreateAddressRequest,
} from '@/app/infra/gateway/safefood/models/SafeFoodAddress';
import { TextField } from '@/components/molecules/textfield';
import { Box } from '@/components/atoms/box';
import { Divider } from '@/components/atoms/divider';
import { FaSearch } from 'react-icons/fa';
export type AddressModalProps = {
	toggleModal(): void;
	isModalVisible: boolean;
	address: SafeFoodAddressModel;
	cep: string;
	numero: string;
	apelido: string;
	onChangeNumero: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	onChangeApelido: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	onClickSaveNewAddress(address: SafeFoodCreateAddressRequest): void;
	onClickUpdateAddress(address: SafeFoodAddressModel): void;
	onChange: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
};

export const AddressModal: React.FC<AddressModalProps> = ({
	isModalVisible,
	toggleModal,
	onClickSaveNewAddress,
	onClickUpdateAddress,
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
					gap={'12px'}
					maxWidth={'100%'}
					alignSelf="center"
				>
					<Box
						display="flex"
						flexDirection="row"
						gap="30px"
						width="100%"
					>
						<TextField
							id={'apelido'}
							label={'Apelido:'}
							value={apelido}
							onChange={onChangeApelido}
							required={false}
						/>
						<TextField
							value={cep}
							onChange={onChange}
							label="CEP: "
							required={true}
							min={8}
							max={9}
							renderEndIcon={() => <FaSearch />}
							id="address-cep"
							placeholder="00000-000"
							title="Digite seu CEP"
							type="string"
							inputMode="numeric"
						/>
					</Box>
					<Box
						display="flex"
						flexDirection="row"
						gap="30px"
						width="100%"
					>
						<TextField
							value={address.logradouro}
							onChange={() => {}}
							label="Logradouro: "
							id="address-logradouro"
							disabled
							required={!!address.cep}
							title="Logradouro do endereço"
						/>
						<TextField
							value={address.estado}
							onChange={() => {}}
							label="Estado: "
							id="address-cidade"
							disabled
							required={!!address.cep}
							placeholder=""
							title="Cidade de seu endereço"
							type="string"
							inputMode="text"
						/>
					</Box>
					<Box
						display="flex"
						flexDirection="row"
						gap="30px"
						width="100%"
					>
						<TextField
							value={address.bairro}
							onChange={() => {}}
							label="Bairro: "
							disabled
							required={!!address.cep}
							id="address-bairro"
							title="Digite seu bairro"
							type="string"
						/>
						<TextField
							value={address.cidade}
							onChange={() => {}}
							label="Estado: "
							id="address-cidade"
							disabled
							required={!!address.cep}
							placeholder=""
							title="Cidade de seu endereço"
							type="string"
							inputMode="text"
						/>
					</Box>
					<Box
						display="flex"
						flexDirection="row"
						gap="30px"
						width="100%"
					>
						<TextField
							value={numero}
							onChange={onChangeNumero}
							label="Número: "
							required={!!address.cep} // TODO Depende
							disabled={!address.cep} // depende
							id="address-number"
							placeholder="123"
							title="Digite o número de seu endereço"
							type="string"
						/>
						<TextField
							value={address.complemento}
							onChange={() => {}}
							label="Complemento: "
							required={false}
							disabled={!address.cep} // depende
							id="address-complement"
							title="Complemento de seu endereço"
							type="string"
						/>
					</Box>
					<Divider marginTop="20px" />
					<Box
						width="100%"
						display="flex"
						justify="center"
					>
						<Button
							width={'fit-content'}
							onClick={() => {
								if (address.id) {
									onClickUpdateAddress({
										...address,
										numero,
										apelido,
										cep,
									});
								} else
									onClickSaveNewAddress({
										...address,
										numero,
										apelido,
										cep,
									});
							}}
						>
							{address.id ? 'Atualizar' : 'Adicionar'}
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
