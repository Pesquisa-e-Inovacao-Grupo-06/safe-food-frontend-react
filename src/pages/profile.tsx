import { Box } from "@/components/atoms/box";
import Header from "@/components/molecules/header";
import banner from "../assets/food-favorite.png";
import styled from "styled-components";
import { ProfilePhotoUploadWithPreview } from "@/components/molecules/upload-profile-photo";
import { StyledButton } from "@/components/atoms/button/styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Input } from "@/components/atoms/input";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Chips } from "@/components/atoms/chips/chips-atom";

function Profile() {
	return (
		<>
			<Header />
			<PBanner>
				<PBtnEditar buttonStyle="outline">Editar imagem</PBtnEditar>
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
						<PTitle>Informações de cadastro</PTitle>
						{FormInputs.map(({ span, input }) => (
							<ul>
								<li>
									<span>{span}</span>
									{input}
								</li>
							</ul>
						))}
						<PDivider />
						<PContainerInfo2>
							<PTitle>Endereços</PTitle>
							<PBtnAdicionarEndereco
								icon={<IoMdAddCircleOutline color="#087704" />}
								alignIcon="right"
								buttonStyle="outline"
								style={{
									height: 45,
								}}
							>
								<span>adicionar endereço</span>
							</PBtnAdicionarEndereco>
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
								{restrictions.map((r, i) => (
									<Chips
										key={r + i}
										sizeChips="chips-lg"
									>
										{r}
									</Chips>
								))}
							</PContainerRestricao>
						</PContainerInfo3>
					</PContainerInfo>
					<PContainerBtn>
						<PBtnCancelar buttonStyle="outline">Cancelar</PBtnCancelar>
						<PBtnSalvar buttonStyle="filled">Salvar</PBtnSalvar>
					</PContainerBtn>
				</PContainerSub>
			</PContainer>
		</>
	);
}

export default Profile;

const FormInputs = [
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

const restrictions = [
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
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
		grid-template-columns: 0.4fr 1fr 0.4fr;

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

const PContainerInfo2 = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const PBtnAdicionarEndereco = styled(ButtonIcon)`
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
