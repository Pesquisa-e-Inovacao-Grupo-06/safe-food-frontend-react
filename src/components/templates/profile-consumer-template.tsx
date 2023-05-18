import { Box } from "@/components/atoms/box";
import Header from "@/components/molecules/header";
import banner from "../../assets/food-favorite.png";
import styled from "styled-components";
import { ProfilePhotoUploadWithPreview } from "@/components/molecules/upload-profile-photo";
import { StyledButton } from "@/components/atoms/button/styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Chips } from "@/components/atoms/chips/chips-atom";
import AddresCard from "@/components/molecules/address-card";
import { Form } from "@/components/molecules/form";
import { Button } from "@/components/atoms/button";
import { Restriction } from "@/app/domain/entities/Restriction";
import { InputPropsComponent } from "../atoms/input";
import { Address } from "@/app/domain/entities/Address";
import { Alert, AlertType } from "../atoms/alert";
import { AddressModal } from "./address-modal";
import { useState } from "react";
import {} from "@/app/util/validations/cep-validator";
import { SafeFoodCreateAddressRequest } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";

export type ProfileProps = {
	restrictionsUser: Restriction[];
	listOfAddress: Address[];
	form: InputPropsComponent[];
	urlDefault: string | null | undefined;
	typeAlert?: AlertType;
	textAlert?: string;
	isAlertVisible: boolean;
	isSaveButtonActive: boolean;
	isLoading: boolean;
	isEditable?: boolean;

	address: SafeFoodCreateAddressRequest;
	onClickChangePassword(): void;
	onClickSave(): void;
	onClickSaveButton(): void;
	onClickEditable(): void;
	onClickSaveNewAddress(): void;
	onChange: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	cep: string;
	numero: string;
	onChangeNumero: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	apelido: string;
	onChangeApelido: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	toggleModal(): void;
	isModalVisible: boolean;
	onClickOpenModalAddress(): void;
};

export const ProfileTemplate: React.FC<ProfileProps> = ({
	listOfAddress,
	form,
	urlDefault,
	restrictionsUser,
	onClickSave,
	isSaveButtonActive,
	isLoading,
	isAlertVisible,
	textAlert,
	typeAlert,
	onClickChangePassword: onClickChangePassowrd,
	isEditable,
	onClickSaveButton,
	onClickEditable,
	onClickSaveNewAddress,
	address,
	onChange,
	cep,
	numero,
	onChangeNumero,
	apelido,
	onChangeApelido,
	toggleModal,
	isModalVisible,
	onClickOpenModalAddress,
}) => {
	//TODO: IMPLEMENTAR UPDATE no restrictions

	return (
		<>
			<Header />
			{/* MODAL */}
			<AddressModal
				toggleModal={toggleModal}
				isModalVisible={isModalVisible}
				onClickSaveNewAddress={onClickSaveNewAddress}
				address={address}
				onChange={onChange}
				cep={cep}
				numero={numero}
				onChangeNumero={onChangeNumero}
				apelido={apelido}
				onChangeApelido={onChangeApelido}
			/>
			<PBanner>
				<PBtnEditar
					height="fit-content"
					width="fit-content"
					buttonStyle="outline"
				>
					Editar imagem
				</PBtnEditar>
			</PBanner>
			<PContainer>
				<PContainerProfilePhoto>
					<PProfilePhoto
						name="profile"
						id="p1"
						width="125px"
						justify="start"
						// urlDefault={urlDefault}
					/>
				</PContainerProfilePhoto>
				<PContainerSub>
					<PContainerInfo>
						<Box width="fit-content">
							{isAlertVisible ? (
								<Alert type={typeAlert ?? "info"}>{textAlert}</Alert>
							) : null}
						</Box>
						<PDivider />
						<Form listOfComponent={form}></Form>

						<ul>
							<li>
								<span>Senha:</span>
								<StyledButton
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									style={{
										fontSize: "16px",
										maxHeight: "32px",
										width: "fit-content",
									}}
									onClick={onClickChangePassowrd}
									disabled={!isEditable}
								>
									Alterar Senha
								</StyledButton>
							</li>
						</ul>
						<PDivider />
						<PContainerInfo2>
							<div className="pcontainerinfo2-sub">
								<PTitle>Endereços</PTitle>
								<PBtnAdicionarEndereco
									icon={<IoMdAddCircleOutline color="#087704" />}
									alignIcon="right"
									buttonStyle="outline"
									style={{
										height: 45,
									}}
									disabled={!isEditable}
									onClick={onClickOpenModalAddress}
								>
									<span>adicionar endereço</span>
								</PBtnAdicionarEndereco>
							</div>
							<PContainerAddressCard>
								{listOfAddress.map((address, i) => (
									<AddresCard
										bodyText={`
										${address.params.bairro},
										${address.params.numero},
										${address.params.cidade} -
										${address.params.estado},
										${address.params.cep}
										`}
										headerText={address.params.apelido}
										//VERIFICAR SOBRE ESSE ICONE
										// Icon={adress.Icon}
										key={i}
									/>
								))}
							</PContainerAddressCard>
						</PContainerInfo2>
						<PDivider />
						<PContainerInfo3>
							<PTitle>Restrições</PTitle>
							<PContainerRestricao
								display="flex"
								justify="center"
								gap="10px"
								margin="0 auto"
								style={{
									flexWrap: "wrap",
								}}
							>
								{restrictionsUser.map((restriction, i) => (
									<Chips
										key={restriction.params.id + "item"}
										sizeChips="chips-lg"
										//TODO: verificar com o guilherme
										onClick={() => {
											restriction.params.isActive = !restriction.params.isActive;
											console.log(restrictionsUser);
										}}
										isActive={restriction.params.isActive}
									>
										{restriction.params.restricao}
									</Chips>
								))}
							</PContainerRestricao>
						</PContainerInfo3>
					</PContainerInfo>
					<PContainerBtn>
						{isEditable ? (
							<>
								<Button
									height="45px"
									width="fit-content"
									buttonStyle="outline"
									disabled={isSaveButtonActive}
									onClick={onClickSaveButton}
								>
									Cancelar
								</Button>
								<Button
									height="45px"
									width="fit-content"
									buttonStyle="filled"
									disabled={isSaveButtonActive}
									onClick={onClickSave}
									loading={isLoading}
								>
									Salvar
								</Button>
							</>
						) : (
							<Button
								height="45px"
								width="fit-content"
								buttonStyle="filled"
								color="green"
								disabled={isEditable}
								loading={isLoading}
								onClick={onClickEditable}
							>
								Editar
							</Button>
						)}
					</PContainerBtn>
				</PContainerSub>
			</PContainer>
		</>
	);
};

const PBanner = styled(Box)`
	display: flex;
	height: 225px;
	padding-top: 75px;
	background: url(${banner});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	filter: brightness(46%);

	@media (max-width: 800px) {
		justify-content: flex-end;
	}
`;

const PBtnEditar = styled(StyledButton)`
	margin: auto;
	font-size: 16px;
	font-weight: 400;
	max-height: 36px;
	min-width: 90px;
	color: white;
	border: 2px solid white;

	@media (max-width: 800px) {
		width: auto;
	}
`;

const PContainer = styled.div`
	width: 70%;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 100px;
`;

const PContainerProfilePhoto = styled.div`
	position: relative;
	margin-top: -45px;
	margin-left: -80px;

	@media (max-width: 800px) {
		margin-left: auto;
		margin-right: auto;

		span {
			text-align: center;
			margin-left: auto;
			margin-right: auto;
		}
	}
`;

const PProfilePhoto = styled(ProfilePhotoUploadWithPreview)`
	background: #c2c2c2;
	opacity: 100%;
	border: 5px solid
		${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[600]};

	@media (max-width: 800px) {
		margin-left: auto;
		margin-right: auto;
		justify-content: center;
	}
`;

const PContainerSub = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.4fr;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

//Info
const PContainerInfo = styled.div`
	& ul {
		list-style: none;
	}
	& li {
		margin-top: 24px;
		display: grid;
		grid-template-columns: 0.4fr 1fr 0.4fr;

		span {
			align-self: center;
			font-weight: 600;
		}

		button {
			width: fit-content;
		}

		@media (max-width: 800px) {
			grid-template-columns: 1fr;

			span {
				margin-bottom: 5px;
			}

			button {
				width: 100% !important;
			}
		}
	}

	input {
		background: ${p =>
			p.theme.name == "light" ? "" : p.theme.colors.dark_gray[400]};
		opacity: 100%;
	}
`;

const PDivider = styled.div`
	height: 1px;
	width: 100%;
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[600]
			: p.theme.colors.dark_gray[400]};
	margin: 24px 0;
`;

const PTitle = styled(Subtitle)`
	font-size: 24px;
	line-height: 36px;
	font-weight: 600;
`;

const PContainerInfo2 = styled.div`
	display: flex;
	flex-direction: column;

	.pcontainerinfo2-sub {
		display: flex;
		justify-content: space-between;

		@media (max-width: 800px) {
			flex-direction: column;

			button {
				margin-top: 15px;
				padding: 0;
			}
		}
	}

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const PBtnAdicionarEndereco = styled(ButtonIcon)`
	width: fit-content;
	max-height: 35px;
	align-items: center;
	color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.dark_gray[800]
			: p.theme.colors.light_gray[200]};

	& span {
		font-size: 16px;
	}
`;

const PContainerAddressCard = styled(Box)`
	margin-top: 15px;
	padding-right: 24px;
	display: flex;
	justify-content: space-between;
	gap: 50px;

	@media (max-width: 800px) {
		flex-direction: column;
		padding: 0;
	}
`;

const PContainerInfo3 = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const PContainerRestricao = styled(Box)`
	max-height: 250px;
	max-width: 500px;
	margin: 0 24px;
	padding: 10px 0;
	background: ${p =>
		p.theme.name == "light" ? "#f5f5f5" : p.theme.colors.dark_gray[400]};
	border-radius: 0.25rem;
	overflow-y: scroll;

	/* Scrollbar modification */

	::-webkit-scrollbar {
		width: 8px;
	}

	/ Track / ::-webkit-scrollbar-track {
		background-color: ${p =>
			p.theme.name == "light" ? "#f5f5f5" : p.theme.colors.dark_gray[600]};
	}

	/* Handle */

	::-webkit-scrollbar-thumb {
		background-color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[600]
				: p.theme.colors.dark_gray[1000]};
		border-radius: 50px;
		border: 3px solid ${p => (p.theme.name == "light" ? "#f5f5f5" : "#474747")};
	}

	/* Handle on Hover */

	::-webkit-scrollbar-thumb:hover {
		background-color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[800]
				: p.theme.colors.black};
	}

	@media (max-width: 800px) {
		margin: 10px 0 0 0;
	}
`;

//Buttom
const PContainerBtn = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: flex-end;
	gap: 15px;

	@media (max-width: 800px) {
		justify-content: flex-start;
	}

	@media (max-width: 600px) {
		flex-direction: column-reverse;
	}
`;

const PBtnSalvar = styled(StyledButton)`
	position: sticky;
	top: 100px;
	font-size: 16px;
	background: #087704;
	border-color: #087704;
	max-height: 36px;
	min-width: 90px;
	padding: 0%;
`;

const PBtnCancelar = styled(StyledButton)`
	position: sticky;
	top: 100px;
	font-size: 16px;
	max-height: 36px;
	min-width: 90px;
	padding: 0%;
	color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.dark_gray[800]
			: p.theme.colors.light_gray[200]};
`;
