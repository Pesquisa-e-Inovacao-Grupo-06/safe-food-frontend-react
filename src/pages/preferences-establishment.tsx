import { Box } from "@/components/atoms/box";
import Layout from "@/components/molecules/sidebar-establishment/layout";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Text } from "@/components/atoms/text";
import { Divider } from "@/components/atoms/divider";
import { Slider } from "@mui/material";
import { Button } from "@/components/atoms/button";
import { ImageAtom } from "../components/atoms/img/index";
import preferencesLight from "../assets/preferences-light.svg";
import preferencesDark from "../assets/preferences-dark.svg";
const PreferencesEstablishment: React.FC = () => {
	const marksFont = [
		{
			value: 14,
			label: "14px",
		},
		{
			value: 16,
			label: "16px",
		},
		{
			value: 18,
			label: "18px",
		},
	];
	const marksZoom = [
		{
			value: 80,
			label: "80%",
		},
		{
			value: 100,
			label: "100%",
		},
		{
			value: 120,
			label: "120%",
		},
	];
	return (
		<>
			<Layout paddingMain={true}>
				<Box
					display="flex"
					flexDiretion="column"
					alignItems="start"
					justify="space-between"
					height="110%"
					margin="40px"
				>
					<Subtitle
						large
						style={{
							marginBottom: "30px",
							width: "fit-content",
							borderBottom: "0.18em solid orange",
						}}
					>
						Preferências
					</Subtitle>

					<Box
						display="flex"
						flexDiretion="column"
						alignItems="start"
						justify="space-between"
						width="100%"
					>
						<Text typeText="text-mdb">Aparência</Text>
						<Text typeText="text-md">Selecione o tema que melhor te agrada.</Text>
						<Divider marginAll="10px" />
						<Box
							display="flex"
							flexDiretion="row"
							alignItems="start"
							justify="unset"
							width="100%"
							gap="20px"
						>
							<Box
								display="flex"
								flexDiretion="column"
								alignItems="start"
								width="fit-content"
								style={{ cursor: "pointer" }}
							>
								<ImageAtom
									src={preferencesLight}
									cursor={false}
								/>
								<Text>Claro</Text>
							</Box>
							<Box
								display="flex"
								flexDiretion="column"
								alignItems="start"
								width="fit-content"
								style={{ cursor: "pointer" }}
							>
								<ImageAtom
									src={preferencesDark}
									cursor={false}
								/>
								<Text>Escuro</Text>
							</Box>
						</Box>
					</Box>
					<Divider
						color="grey"
						marginAll="20px"
					/>
					<Box
						display="flex"
						flexDiretion="column"
						alignItems="start"
						justify="space-between"
					>
						<Text typeText="text-mdb">Tamanho de fonte</Text>
						<Text typeText="text-md">
							Escolha a fonte que melhor se adequa pra sua visão, deixando a plataforma
							mais agradável para sua experiência.
						</Text>
						<Slider
							style={{ width: "40%", color: "orange", height: "8px" }}
							aria-label="Px"
							defaultValue={16}
							// getAriaValueText={valuetext}
							valueLabelDisplay="auto"
							step={2}
							marks={marksFont}
							min={14}
							max={18}
						/>
					</Box>
					<Divider
						color="grey"
						marginAll="30px"
					/>
					<Box
						display="flex"
						flexDiretion="column"
						alignItems="start"
						justify="space-between"
					>
						<Text typeText="text-mdb">Zoom</Text>
						<Text typeText="text-md">
							Pode armazenar o zoom padrão para a nossa plataforma caso seja
							necessário.
						</Text>
						<Slider
							style={{ width: "40%", color: "orange", height: "8px" }}
							aria-label="Px"
							defaultValue={100}
							// getAriaValueText={valuetext}
							valueLabelDisplay="auto"
							step={3}
							marks={marksZoom}
							min={80}
							max={120}
						/>
					</Box>
					<Box
						display="flex"
						flexDiretion="row"
						alignItems="end"
						width="100%"
					>
						<div style={{ width: "100px", display: "flex" }}>
							<Button buttonStyle="outline">Cancelar</Button>
							<Button>Salvar</Button>
						</div>
					</Box>
				</Box>
			</Layout>
		</>
	);
};

export default PreferencesEstablishment;
