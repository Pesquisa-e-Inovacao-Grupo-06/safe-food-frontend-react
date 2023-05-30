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
import { } from "@/app/util/validations/cep-validator";
import { } from "@/app/util/validations/cep-validator";
import {
	SafeFoodAddressModel, SafeFoodCreateAddressRequest,
} from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
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
import { SafeFoodAddressMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodAddressMapper";
import { AddressModal } from "../address-modal/address-modal";
import { Text } from "@/components/atoms/text";
import { BiTrash } from "react-icons/bi";

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
	address: SafeFoodAddressModel;
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
	onClickSaveNewAddress(address: SafeFoodCreateAddressRequest): void;
	onClickUpdateAddress(address: SafeFoodAddressModel): void;
	onClickOpenModalAddress(): void;
	fileChange?(file: File): void;
	cache: Cache;
	onClickCard: (address: SafeFoodAddressModel) => void;
	onClickDeleteAddress: (id: number) => void;
	deleteUser: (id: number) => void;
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
	fileChange,
	onClickCard,
	cache,
	onClickDeleteAddress,
	onClickUpdateAddress,
	deleteUser,
}) => {
	return (
		<>
			<HeaderConsumer cache={cache} />
			{/* MODAL */}
			<AddressModal
				onClickUpdateAddress={onClickUpdateAddress}
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
						fileChange={fileChange}
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
							{listOfAddress && listOfAddress.length > 0 ? (
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
													onClickCard={() =>
														onClickCard(SafeFoodAddressMapper.ofEntity(address))
													}
													idAddress={address.params.id}
													onClickDeleteAddress={onClickDeleteAddress}
												/>
											)
									)}
								</PContainerAddressCard>
							) : (
								<></>
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
						<PDivider />
						<PContainerInfo3 >
							<PTitle>Ações para conta</PTitle>
							<Box display="flex" width="300px">
								<ButtonIcon
									alignIcon="left"
									icon={<BiTrash />}
									color="red"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									style={{
										fontSize: "16px",
										maxHeight: "32px",
										width: "fit-content",
										background: "red",
										borderColor: "red"
									}}
									onClick={() => deleteUser(consumer.id)}
								>
									<Text typeText="text-md" color="white">
										Deletar conta
									</Text>
								</ButtonIcon>

							</Box>
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
