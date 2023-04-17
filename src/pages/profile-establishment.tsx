import { Box } from "@/components/atoms/box";
import Header from "@/components/molecules/header";
import banner from "../assets/food-favorite.png";
import styled from "styled-components";
import { ProfilePhotoUploadWithPreview } from "@/components/molecules/upload-profile-photo";
import { StyledButton } from "@/components/atoms/button/styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Input } from "@/components/atoms/input";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import AddresCard from "@/components/molecules/address-card";
import { MdOutlineCloudDownload, MdOutlineFileDownload } from "react-icons/md";
import { ContainerFluid } from "@/components/atoms/container";

function ProfileEstablishment() {
	return (
		<>
			<Header />
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
						width="160px"
						justify="start"
					/>
				</PContainerProfilePhoto>
				<PContainerSub>
					<PContainerInfo>
						<PDivider />
						<PTitle>Administrador</PTitle>
						{FormInputsAdministrador.map(({ span, input }) => (
							<ul>
								<li>
									<span>{span}</span>
									{input}
								</li>
							</ul>
						))}
						<PDivider />
						<PTitle>Empresa</PTitle>
						<div className="form-inputs-empresa">
							{FormInputsEmpresa.map(({ span, input, classname }) => (
								<ul>
									<li className={classname}>
										<span>{span}</span>
										{input}
									</li>
								</ul>
							))}
						</div>
						<PDivider />
						<PContainerInfo3>
							<PTitle>Endereço do estabelecimento</PTitle>
							<PContainerAddressCard>
								<AddresCard subtitle="Açogue Vegano" />
							</PContainerAddressCard>
						</PContainerInfo3>
						<PDivider />
						<PTitle>Importações</PTitle>
						<PBtnBaixar
							icon={<MdOutlineFileDownload />}
							alignIcon="right"
							buttonStyle="filled"
							style={{
								height: 45,
							}}
						>
							<span>Baixar template em Excel</span>
						</PBtnBaixar>
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
							produtos, assim o cadastro fica mais fácil quando em grandes quantidades.
							Logo após preencher é apenas nos importar o excel preenchido novamente.
							<b> OBS: apenas aceitamos no nosso formato de Excel.</b>
						</Box>
					</PContainerInfo>
					<PContainerBtn>
						<PBtnCancelar
							height="fit-content"
							width="fit-content"
							buttonStyle="outline"
						>
							Cancelar
						</PBtnCancelar>
						<PBtnSalvar
							height="fit-content"
							width="fit-content"
							buttonStyle="filled"
						>
							Salvar
						</PBtnSalvar>
					</PContainerBtn>
				</PContainerSub>
			</PContainer>
		</>
	);
}

export default ProfileEstablishment;

const FormInputsAdministrador = [
	{
		span: "Nome:",
		input: <Input value="" />,
	},
	{
		span: "Email:",
		input: <Input value="" />,
	},
	{
		span: "Senha:",
		input: (
			<StyledButton
				height="fit-content"
				width="fit-content"
				buttonStyle="filled"
				style={{
					fontSize: "16px",
					maxHeight: "32px",
					width: "fit-content",
				}}
			>
				Alterar Senha
			</StyledButton>
		),
	},
];

const FormInputsEmpresa = [
	{
		span: "Nome da empresa:",
		input: <Input value="" />,
	},
	{
		span: "CNPJ:",
		input: <Input value="" />,
	},
	{
		span: "Celular (responsável):",
		input: <Input value="" />,
	},
	{
		classname: "penultima-input",
		span: "Contato (Whatsaap para clientes):",
		input: <Input value="" />,
	},
	{
		classname: "last-input",
		span: "Descrição:",
		input: (
			<Input
				value=""
				style={{ height: "120px" }}
			/>
		),
	},
];

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
		margin: 10px 10px 0 0;
		width: auto;
		align-self: baseline;
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
	margin-top: -60px;
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
		grid-template-columns: 0.4fr 1fr 0.1fr;

		span {
			align-self: center;
			font-weight: 600;
		}

		@media (max-width: 800px) {
			grid-template-columns: 1fr;

			span {
				margin-bottom: 5px;
			}
		}
	}

	.last-input {
		span {
			place-self: start;
		}
	}

	.penultima-input {
		input {
			align-self: center;
			align-items: center;
		}
	}
`;

const PDivider = styled.div`
	height: 1.5px;
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

	& span {
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
`;

const PBtnSalvar = styled(StyledButton)`
	font-size: 16px;
	background: #087704;
	border-color: #087704;
	max-height: 36px;
	min-width: 90px;
	padding: 0%;
`;

const PBtnCancelar = styled(StyledButton)`
	font-size: 16px;
	max-height: 36px;
	min-width: 90px;
	padding: 0%;
	color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.dark_gray[800]
			: p.theme.colors.light_gray[200]};
`;
