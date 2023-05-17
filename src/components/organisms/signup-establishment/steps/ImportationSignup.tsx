import React from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { Box } from "@/components/atoms/box";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { BiDownload, BiUpload } from "react-icons/bi";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { MdDownload, MdUpload } from "react-icons/md";
export const ImportationSignUp: React.FC = () => {
	const { colors } = useSafeFoodTheme().getTheme();
	return (
		<>
			<HeadingSignUpConsumer
				title="Importação de produtos"
				text="Para facilitar o processo de cadastro dos seus produtos na plataforma, possibilitamos voce fazer esse processo rapidamente preenchendo o Excel que disponibilizamos"
			/>

			<Box
				width="80%"
				gap="12px"
				display="flex"
				flexDirection="column"
				margin="24px auto"
			>
				<ButtonIcon
					icon={<MdDownload />}
					style={{
						height: "42px",
						width: "100%",
					}}
				>
					Baixar template Excel
				</ButtonIcon>
				<ButtonIcon
					icon={<MdUpload />}
					style={{
						height: "42px",
						width: "100%",
						background: colors.light_gray[600],
						border: "none",
						color: colors.dark_gray[200],
						fill: colors.dark_gray[200],
					}}
				>
					Importar Excel preenchido
				</ButtonIcon>
			</Box>
		</>
	);
};
