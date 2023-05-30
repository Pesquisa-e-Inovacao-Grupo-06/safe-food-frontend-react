import { MdOutlineFileDownload, MdOutlineCloudDownload } from 'react-icons/md';
import AddresCard from '../molecules/address-card';
import Layout from '../molecules/sidebar-establishment/layout';
import styled from 'styled-components';
import { StyledButton } from '../atoms/button/styles';
import { ButtonIcon } from '../molecules/button/button-icon';
import { ProfilePhotoUploadWithPreview } from '../molecules/upload-profile-photo';
import { Box } from '../atoms/box';
import banner from '../../assets/food-favorite.png';
import { Form } from '../molecules/form';
import { InputPropsComponent } from '../atoms/input';
import { Button } from '../atoms/button';
import { Alert, AlertType } from '../atoms/alert';
import { SafeFoodAddressModel } from '@/app/infra/gateway/safefood/models/SafeFoodAddress';
import { FormEvent, useEffect, useState } from 'react';
import { Cache } from '@/app/domain/protocols/Cache';
import { SafeFoodLoginResponse } from '@/app/infra/gateway/safefood/models/SafeFoodUser';
import { SafeFoodResponse } from '@/app/infra/gateway/safefood/models/SafeFoodResponse';
import { BiTrash } from 'react-icons/bi';
import { Text } from '../atoms/text';
import { Subtitle } from '@/styles/components/text/Subtitle';

export type ProfileEstablishmentTemplateProps = {
	urlDefault: string | null | undefined;
	listOfComponentAdministration: InputPropsComponent[];
	listOfComponentEstablishment: InputPropsComponent[];
	onClickSave(): void;
	isSaveButtonActive: boolean;
	isLoading: boolean;
	typeAlert?: AlertType;
	textAlert?: string;
	importArchiveTxt(file: File): Promise<SafeFoodResponse>;
	isAlertVisible: boolean;
	address: SafeFoodAddressModel;
	onClickChangePassword(): void;
	cache: Cache;
	onClickCard: (id: string) => void;
	onClickDeleteAddress: (id: number) => void;
	deleteUser: (id: number) => void;
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
	importArchiveTxt,
	address,
	onClickChangePassword: onClickChangePassword,
	cache,
	onClickCard,
	onClickDeleteAddress,
	deleteUser
}) => {
		const user: SafeFoodLoginResponse =
			cache.getItem('user') !== null ? JSON.parse(cache.getItem('user')!) : {};

		const [isEditable, setIsEditable] = useState<boolean>(false);
		const [arquivoImportacao, setArquivoImportacao] = useState<File>();
		const [btnImportarArquivo, setBtnImportarArquivo] = useState({
			text: 'Importar TXT preenchido',
			loading: false,
		});

		useEffect(() => {
			if (arquivoImportacao) {
				importArchiveTxt(arquivoImportacao).then(res => {
					if ([200, 201].includes(res.status)) {
						setBtnImportarArquivo({
							text: 'Produtos agendados para importar!',
							loading: false,
						});
					} else {
						setBtnImportarArquivo({
							text: 'Houve algum produto para importar!',
							loading: false,
						});
					}
				});
			}
		}, [arquivoImportacao]);

		return (
			<>
				<Layout
					cache={cache}
					activeRegisterProduct={false}
					typeUser={user.usuario.tipoUsuario}
				>
					<PBanner>
						<PBtnEditar
							height="fit-content"
							width="fit-content"
							buttonStyle="outline"
							style={{
								// cursor: isEditable ? "cursor" : "not-allowed",
								display: isEditable ? 'flex' : 'none',
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
								// fileChange={fileChange}
								isEditable={isEditable}
							/>
						</PContainerProfilePhoto>
						<PContainerSub>
							<PContainerInfo>
								<Box width="fit-content">
									{isAlertVisible ? (
										<Alert type={typeAlert ?? 'info'}>{textAlert}</Alert>
									) : null}
								</Box>
								<PDivider />
								<Subtitle2>Administrador</Subtitle2>
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
													fontSize: '16px',
													maxHeight: '32px',
													width: 'fit-content',
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
								<Subtitle2>Empresa</Subtitle2>
								<div className="form-inputs-empresa">
									<Form listOfComponent={listOfComponentEstablishment} />
								</div>
								<PDivider />
								<PContainerInfo3>
									<Subtitle2>Endereço do estabelecimento</Subtitle2>
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
											apelido={address.apelido ? address.apelido : ''}
											onClickCard={() => onClickCard('')}
											idAddress={address.id}
											onClickDeleteAddress={onClickDeleteAddress} // Icon={adress.Icon}
										/>
									</PContainerAddressCard>
								</PContainerInfo3>
								<PDivider />
								<Subtitle2>Importações</Subtitle2>
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
											window.location.href =
												import.meta.env.BACKEND_URL + '/restricoes/download';
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
										onClick={() => {
											window.location.href =
												import.meta.env.VITE_BACKEND_URL + '/restricoes/download';
										}}
									>
										<span>Baixar restrições em Excel</span>
									</PBtnBaixar>
									<PBtnBaixar
										icon={<MdOutlineFileDownload />}
										alignIcon="right"
										buttonStyle="filled"
										onClick={() => {
											window.location.href =
												import.meta.env.VITE_BACKEND_URL +
												'/estabelecimentos/modeloExportacaoTxt/download';
										}}
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
									loading={btnImportarArquivo.loading}
									style={{
										height: 45,
										maxWidth: 500,
									}}
								>
									<input
										type="file"
										id="importacaoProdutoInput"
										onChange={({ target }) => {
											console.log(target);
											if (target.files) {
												const [file] = target.files;
												setArquivoImportacao(file);
											}
										}}
										accept=".txt"
										style={{ display: 'none' }}
										name="arquivo"
									/>
									<label htmlFor="importacaoProdutoInput">
										{btnImportarArquivo.text}
									</label>
								</PBtnImportar>

								<Box style={{ marginTop: '16px' }}>
									Baixe o nosso template para excel e o preencha com infomações de
									seus produtos, assim o cadastro fica mais fácil quando em
									grandes quantidades. Logo após preencher é apenas nos importar o
									excel preenchido novamente.
									<b> OBS: apenas aceitamos no nosso formato de Excel.</b>
								</Box>
							</PContainerInfo>
							<PContainerInfo3 >
								<Subtitle2>Ações para conta</Subtitle2>
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
										onClick={() => deleteUser(user.usuario.id)}
									>
										<Text typeText="text-mdb" color="white">
											Deletar conta
										</Text>
									</ButtonIcon>

								</Box>
							</PContainerInfo3>
							{/* TODO: CHANGE BUTTON TO COMPONENT ATOM AND EXPORT FUNCTION ONCLICK */}
							<PContainerBtn>
								{isEditable ? (
									<>
										<Button
											height="45px"
											width="fit-content"
											buttonStyle="outline"
											disabled={isSaveButtonActive}
											onClick={() => setIsEditable(false)}
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
										onClick={() => {
											setIsEditable(true);
										}}
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

const PBanner = styled(Box)`
	display: flex;
	height: 225px;
	padding-top: 75px;
	background: url(${banner});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

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
	opacity: 100% !important;
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
	/* position: relative; */
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
		p.theme.name == 'light'
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
		grid-template-columns: 0.4fr 1fr 0.1fr;

		span {
			align-self: center;
			font-weight: 600;
			opacity: 80%;
		}

		@media (max-width: 800px) {
			grid-template-columns: 1fr;

			span {
				margin-bottom: 5px;
				opacity: 100%;
			}
		}
	}

	@media (max-width: 600px) {
		button {
			width: 100%;
			svg {
				font-size: x-large;
			}
		}
	}

	input {
		background: ${p =>
		p.theme.name == 'light' ? '' : p.theme.colors.dark_gray[400]};
		opacity: 100% !important;
	}

	.last-input {
		span {
			place-self: start;
			opacity: 80%;
		}
	}

	.penultima-input {
		input {
			align-self: center;
			align-items: center;
		}
	}

	.form-inputs-adm {
		button {
			opacity: 100% !important;
			width: fit-content;
			filter: none !important;
		}
		@media (max-width: 600px) {
			button {
				width: 100%;
			}
		}
	}
`;

const PDivider = styled.div`
	height: 1px;
	width: 100%;
	background: ${p =>
		p.theme.name == 'light'
			? p.theme.colors.light_gray[600]
			: p.theme.colors.dark_gray[400]};
	margin: 24px 0;
`;

const Subtitle2 = styled(Subtitle)`
	font-size: 24px;
	line-height: 36px;
	font-weight: 600;
	opacity: 100%;
`;

const PBtnBaixar = styled(ButtonIcon)`
	margin-top: 24px;
	width: fit-content;
	max-height: 35px;
	align-items: center;
	color: ${p => p.theme.colors.light_gray[200]};

	& span {
		font-size: 16px;
	}

	@media (max-width: 800px) {
		max-height: none;
	}
`;

const PBtnImportar = styled(ButtonIcon)`
	margin-top: 16px;
	width: fit-content;
	padding: 12px 20px;
	max-height: 35px;
	align-items: center;
	background: ${p => p.theme.colors.light_gray[800]};
	color: ${p => p.theme.colors.dark_gray[400]};
	border-color: ${p => p.theme.colors.light_gray[800]};

	& span,
	& label {
		font-size: 16px;
	}

	@media (max-width: 800px) {
		max-height: none;
	}
`;

const PContainerAddressCard = styled(Box)`
	margin-top: 24px;
`;

const PContainerInfo3 = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 800px) {
		flex-direction: column;
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
		p.theme.name == 'light'
			? p.theme.colors.dark_gray[800]
			: p.theme.colors.light_gray[200]};
`;
function setState(): [any, any] {
	throw new Error('Function not implemented.');
}
