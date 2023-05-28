import { MdOutlineFileDownload, MdOutlineCloudDownload } from "react-icons/md";
import AddresCard from "../../molecules/address-card";
import Layout from "../../molecules/sidebar-establishment/layout";
import { StyledButton } from "../../atoms/button/styles";
import { Box } from "../../atoms/box";
import { Form } from "../../molecules/form";
import { InputPropsComponent } from "../../atoms/input";
import { Button } from "../../atoms/button";
import { Alert, AlertType } from "../../atoms/alert";
import { SafeFoodAddressModel } from "@/app/infra/gateway/safefood/models/SafeFoodAddress";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodEstablishmentModel, SafeFoodUpdateEstablishmentRequest } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { PBanner, PBtnEditar, PContainer, PContainerProfilePhoto, PProfilePhoto, PContainerSub, PContainerInfo, PDivider, PTitle, PContainerInfo3, PContainerAddressCard, PBtnBaixar, PBtnImportar, PContainerBtn } from "./style";
import { AddressModal } from "../address-modal";
import { FormEvent } from "react";

export type ProfileEstablishmentTemplateProps = {
	urlDefault: string | null | undefined;
	listOfComponentAdministration: InputPropsComponent[];
	listOfComponentEstablishment: InputPropsComponent[];
	isSaveButtonActive: boolean;
	isLoading: boolean;
	typeAlert?: AlertType;
	textAlert?: string;
	isAlertVisible: boolean;
	address: SafeFoodAddressModel;
	isEditable: boolean;
	isModalVisible: boolean;
	cache: Cache;
	establishment: SafeFoodEstablishmentModel
	onClickSave(model: SafeFoodUpdateEstablishmentRequest): void;
	onClickChangePassword(): void;
	onClickUpdateAddress: (idEstablishment: number,address: SafeFoodAddressModel) => void;
	onClickEditable(): void;
	onClickSaveButton(): void;
	toggleModal(): void;
	onChangeInputApelido(ev: FormEvent<HTMLInputElement>): void;
	onChangeInputCep(ev: FormEvent<HTMLInputElement>): void;
	onChangeInputNumero(ev: FormEvent<HTMLInputElement>): void;
	onChangeInputComplemento(ev: FormEvent<HTMLInputElement>): void;
	onClickEditAddress: () => void;
};
export const ProfileEstablishmentTemplate: React.FC<
	ProfileEstablishmentTemplateProps
> = ({
	urlDefault,
	listOfComponentAdministration,
	listOfComponentEstablishment,
	onClickSave,
	isSaveButtonActive,
	isLoading,
	isAlertVisible,
	textAlert,
	typeAlert,
	address,
	onClickChangePassword: onClickChangePassword,
	cache,
	onClickUpdateAddress,
	establishment,
	isEditable,
	onClickEditable,
	isModalVisible,
	onClickSaveButton,
	toggleModal,
	onChangeInputApelido,
	onChangeInputCep,
	onChangeInputComplemento,
	onChangeInputNumero,
	onClickEditAddress,
}) => {
		return (
			<>
				<Layout
					cache={cache}
					activeRegisterProduct={false}
				>
					<AddressModal
						onClickUpdateAddress={() => {onClickUpdateAddress(establishment.id, address)}}
						toggleModal={toggleModal}
						isModalVisible={isModalVisible}
						address={address} 
						onChangeInputApelido={onChangeInputApelido }
						 onChangeInputCep={onChangeInputCep }
						 onChangeInputNumero={onChangeInputNumero }
						 onChangeInputComplemento={onChangeInputComplemento }
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
								// onChangeFile={onChangeFile}
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
								<PTitle>Administrador</PTitle>
								<div className="form-inputs-adm">
									<Form listOfComponent={listOfComponentAdministration} />
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
												onClick={onClickChangePassword}
												disabled={!isEditable}
											>
												Alterar Senha
											</StyledButton>
										</li>
									</ul>
								</div>
								<PDivider />
								<PTitle>Empresa</PTitle>
								<div className="form-inputs-empresa">
									<Form listOfComponent={listOfComponentEstablishment} />
								</div>
								<PDivider />
								<PContainerInfo3>
									<PTitle>Endereço do estabelecimento</PTitle>
									<PContainerAddressCard>
										<AddresCard
										
											bodyText={`
										${address.bairro},
										${address.numero},
										${address.cidade} -
										${address.estado},
										${address.cep}
										`}
											headerText={address.apelido}
											key={address.apelido}
											apelido={address.apelido ? address.apelido : ""}
											onClickEditAddress={onClickEditAddress
												// () => {
												// 	const { id, endereco } = establishment;
												// 	onClickUpdateAddress({
												// 		apelido: endereco?.apelido ?? "",
												// 		bairro: endereco?.bairro ?? "",
												// 		cep: endereco?.cep ?? "",
												// 		cidade: endereco?.cidade ?? "",
												// 		complemento: endereco?.complemento ?? "",
												// 		estado: endereco?.estado ?? "",
												// 		formatado: endereco?.formatado ?? "",
												// 		id: endereco?.id ?? 0,
												// 		logradouro: endereco?.logradouro ?? "",
												// 		numero: endereco?.numero ?? "",
												// 	});
												// }
											}
											idAddress={address.id}
											onClickDeleteAddress={() => {
											} } 
											haveIconDelete={false}										/>
									</PContainerAddressCard>
								</PContainerInfo3>
								<PDivider />
								<PTitle>Importações</PTitle>
								<Box
									display="flex"
									justify="left"
									gap="20px"
								>
									<PBtnBaixar
										icon={<MdOutlineFileDownload />}
										alignIcon="right"
										buttonStyle="filled"
										style={{
											height: 45,
										}}
										onClick={() => {
											window.location.href = "http://localhost:8081/restricoes/download";
										}}
									>
										<span>Baixar restrições em Excel</span>
									</PBtnBaixar>
									<PBtnBaixar
										icon={<MdOutlineFileDownload />}
										alignIcon="right"
										buttonStyle="filled"
										style={{
											height: 45,
										}}
									>
										<span>Baixar template de produtos</span>
									</PBtnBaixar>
								</Box>
								<PBtnImportar
									icon={<MdOutlineCloudDownload />}
									alignIcon="right"
									buttonStyle="filled"
									style={{
										height: 45,
									}}
								>
									<span>Importar Excel preenchido</span>
								</PBtnImportar>
								<Box style={{ marginTop: "16px" }}>
									Baixe o nosso template para excel e o preencha com infomações de seus
									produtos, assim o cadastro fica mais fácil quando em grandes
									quantidades. Logo após preencher é apenas nos importar o excel
									preenchido novamente.
									<b> OBS: apenas aceitamos no nosso formato de Excel.</b>
								</Box>
							</PContainerInfo>
							{/* TODO: CHANGE BUTTON TO COMPONENT ATOM AND EXPORT FUNCTION ONCLICK */}
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
												const { cnpj, contatoCliente, descricao, email,
													nome, nomeEmpresa, celular } = establishment;

												onClickSave({
													nomeEmpresa: nomeEmpresa,
													celular: celular,
													contatoCliente: contatoCliente,
													cnpj: cnpj,
													descricao: descricao,
													nome: nome,
													email: email,
												})
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
				</Layout>
			</>
		);
	};
