import { Box } from "@/components/atoms/box";
import Layout from "@/components/molecules/sidebar-establishment/layout";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Text } from "@/components/atoms/text";
import { Divider } from "@/components/atoms/divider";
import { Slider } from "@mui/material";
import { Button } from "@/components/atoms/button";
import { ImageAtom } from "../../atoms/img/index";
import { RadioButton } from "@/components/atoms/radio-button";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";

type PreferencesProps = {
	cache: Cache;
	isSaveButtonActive: boolean;
	isLoading: boolean;
	isEditable?: boolean;
	onClickSaveButton(): void;
	onClickEditable(): void;
	onClickSave(): void;
};
export const Preferences: React.FC<PreferencesProps> = ({
	cache,
	isLoading,
	isSaveButtonActive,
	onClickEditable,
	onClickSaveButton,
	isEditable,
	onClickSave,
}) => {
	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};
	const { setZoom, setFont, font, zoom, toggleTheme } = useSafeFoodTheme();
	function fontChange(fontChange: number) {
		if (fontChange == 90) {
			return 14;
		}
		if (fontChange == 100) {
			return 16;
		}
		if (fontChange == 110) {
			return 18;
		}
	}

	function zoomChange(zoomChange: number) {
		if (zoomChange == 98) {
			return 80;
		}
		if (zoomChange == 100) {
			return 100;
		}
		if (zoomChange == 102) {
			return 120;
		}
	}

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
		<>{ }
			<Layout
				paddingMain={true}
				cache={cache} typeUser={user.usuario.tipoUsuario}		>
				<Box
					display="flex"
					flexDirection="column"
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
						flexDirection="column"
						alignItems="start"
						justify="space-between"
						width="100%"
					>
						<Text typeText="text-mdb">Aparência</Text>
						<Text typeText="text-md">Selecione o tema que melhor te agrada.</Text>
						<Divider marginAll="10px" />
						<Box
							display="flex"
							flexDirection="row"
							alignItems="start"
							justify="unset"
							width="100%"
							gap="20px"
						>
							<Box
								display="flex"
								flexDirection="column"
								alignItems="start"
								width="fit-content"
								style={{ cursor: "pointer" }}
								onClick={() => toggleTheme()}
							>
								<ImageAtom
									src={"https://safefood-nfs.hopto.org/assets/preferences-light.svg"}
									cursor={"false"}
								/>
								<Text>Claro</Text>
								<RadioButton
									name="theme"
									disabled={isEditable}
								/>
							</Box>
							<Box
								display="flex"
								flexDirection="column"
								alignItems="start"
								width="fit-content"
								style={{ cursor: "pointer" }}
							>
								<ImageAtom
									src={"https://safefood-nfs.hopto.org/assets/preferences-dark.svg"}
									cursor={"false"}
									onClick={() => toggleTheme()}
								/>
								<Text>Escuro</Text>
								<RadioButton
									name="theme"
									disabled={isEditable}
								/>
							</Box>
						</Box>
					</Box>
					<Divider
						color="grey"
						marginAll="20px"
						width={"40%"}
					/>
					<Box
						display="flex"
						flexDirection="column"
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
							defaultValue={fontChange(font)}
							valueLabelDisplay="auto"
							step={2}
							marks={marksFont}
							min={14}
							max={18}
							onChange={(_, e) => {
								setFont(e);
							}}
							disabled={isEditable}
						/>
					</Box>
					<Divider
						color="grey"
						marginAll="30px"
						width={"40%"}
					/>
					<Box
						display="flex"
						flexDirection="column"
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
							defaultValue={zoomChange(zoom)}
							// getAriaValueText={valuetext}
							valueLabelDisplay="auto"
							step={20}
							marks={marksZoom}
							min={80}
							max={120}
							onChange={(_, e) => {
								setZoom(e);
							}}
							disabled={isEditable}
						/>
					</Box>
					<Box
						display="flex"
						flexDirection="row"
						alignItems="end"
						width="100%"
					>
						<div style={{ width: "100px", display: "flex" }}>
							{!isEditable ? (
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
									disabled={!isEditable}
									loading={isLoading}
									onClick={onClickEditable}
								>
									Editar
								</Button>
							)}{" "}
						</div>
					</Box>
				</Box>
			</Layout>
		</>
	);
};
