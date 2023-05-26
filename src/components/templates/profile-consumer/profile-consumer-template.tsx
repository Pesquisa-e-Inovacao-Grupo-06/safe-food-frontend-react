import { Box } from "@/components/atoms/box";
import { StyledButton } from "@/components/atoms/button/styles";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Chips } from "@/components/atoms/chips/chips-atom";
import AddresCard from "@/components/molecules/address-card";
import { Form } from "@/components/molecules/form";
import { Button } from "@/components/atoms/button";
import { Restriction } from "@/app/domain/entities/Restriction";
import { InputPropsComponent } from "../../atoms/input";
import { Address } from "@/app/domain/entities/Address";
import { Alert, AlertType } from "../../atoms/alert";
import { AddressModal } from "../address-modal";
import {} from "@/app/util/validations/cep-validator";
import { SafeFoodCreateAddressRequest } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import HeaderConsumer from "../../molecules/header-consumer";
import { Cache } from "@/app/domain/protocols/Cache";
import {
	SafeFoodConsumerModel,
	SafeFoodUpdateConsumerRequest,
} from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import {
	PBanner,
	PBtnEditar,
	PContainer,
	PContainerProfilePhoto,
	PProfilePhoto,
	PContainerSub,
	PContainerInfo,
	PDivider,
	PContainerInfo2,
	PTitle,
	PContainerAddressCard,
	PContainerInfo3,
	PContainerRestricao,
	PContainerBtn,
} from "./style";

export type ProfileProps = {
	restrictionsUser: Restriction[];
	listOfAddress?: Address[];
	form: InputPropsComponent[];
	urlDefault: string | null | undefined;
	typeAlert?: AlertType;
	textAlert?: string;
	isAlertVisible: boolean;
	isSaveButtonActive: boolean;
	isLoading: boolean;
	consumer: SafeFoodConsumerModel;
	onClickRestriction(restriction: Restriction): void;
	isEditable?: boolean;
	address: SafeFoodCreateAddressRequest;
	onChange: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	cep: string;
	numero: string;
	onChangeNumero: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	apelido: string;
	onChangeApelido: React.FormEventHandler<HTMLInputElement> &
		((e: React.FormEvent<HTMLInputElement>) => void);
	isModalVisible: boolean;
	toggleModal(): void;
	onClickChangePassword(): void;
	onClickSave(model: SafeFoodUpdateConsumerRequest): void;
	onClickSaveButton(): void;
	onClickEditable(): void;
	onClickSaveNewAddress(): void;
	onClickOpenModalAddress(): void;
	onChangeFile(file: File): void;
	onClickCard: (id: string) => void;
	cache: Cache;
	onClickDeleteAddress: (id: number) => void;
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
	onClickRestriction,
	onChange,
	cep,
	numero,
	onChangeNumero,
	apelido,
	onChangeApelido,
	toggleModal,
	isModalVisible,
	onClickOpenModalAddress,
	consumer,
	onChangeFile,
	onClickCard,
	cache,
	onClickDeleteAddress,
}) => {
	return (
		<>
			<HeaderConsumer cache={cache} />
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.400082814233!2d-46.45185368502239!3d-23.554070284686482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce668f6fd23971%3A0x6d1d58bdc95eb741!2sR.%20Santo%20Ant%C3%B4nio%20de%20Itaberava%20-%20Vila%20Carmosina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008290-210!5e0!3m2!1spt-BR!2sbr!4v1685073323998!5m2!1spt-BR!2sbr"
				width="600"
				height="450"
				style={{ border: "0" }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
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
					style={{
						// cursor: isEditable ? "cursor" : "not-allowed",
						display: isEditable ? "flex" : "none",
					}}
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
						urlDefault={urlDefault}
						onChangeFile={onChangeFile}
						isEditable={isEditable}
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
								<ButtonIcon
									icon={<IoMdAddCircleOutline color="#087704" />}
									alignIcon="right"
									buttonStyle="outline"
									style={{
										height: 45,
									}}
									width={"fit-content"}
									disabled={!isEditable}
									onClick={onClickOpenModalAddress}
								>
									<span>adicionar endereço</span>
								</ButtonIcon>
							</div>
							{listOfAddress && (
								<PContainerAddressCard>
									{listOfAddress.map(
										(address, i) =>
											address.params.id && (
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
													apelido={address.params.apelido ? address.params.apelido : ""}
													onClickCard={onClickCard}
													idAddress={address.params.id}
													onClickDeleteAddress={onClickDeleteAddress}
												/>
											)
									)}
								</PContainerAddressCard>
							)}
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
								{restrictionsUser &&
									restrictionsUser.map((restriction, i) => (
										<Chips
											disabled={!isEditable}
											key={restriction.params.id + "item"}
											sizeChips="chips-lg"
											//TODO: verificar com o guilherme
											onClick={() => {
												onClickRestriction(restriction);
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
									onClick={() => {
										const { email, nome, telefone, restricoes } = consumer;
										onClickSave({
											email,
											nome,
											restricoes: restricoes.map(i => i.id),
											telefone,
										});
									}}
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
