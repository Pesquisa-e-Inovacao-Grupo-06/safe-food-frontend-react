import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import Checkbox from "@/components/atoms/checkbox";
import { Divider } from "@/components/atoms/divider";
import { Text } from "@/components/atoms/text";
import { StyledModal } from "@/pages/term-of-service";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Title } from "@/styles/components/text/Title";
import { useState } from "react";
import { StyledRow } from "../card-establishment-food/card-establishment-food-organism";

export const TextQuestionsOrganism = ({}) => {
	const [termAccepted, setTermAccepted] = useState(false);

	return (
		<StyledModal
			isOpen={true}
			size="lg"
			height="lg"
			responsive
		>
			<Box
				width="100%"
				height="100%"
				display="flex"
				justify="center"
				alignItems="center"
				padding="100px 0"
				flexDiretion="column"
			>
				<Box
					alignItems="center"
					display="flex"
					flexDiretion="column"
					alignSelf="center"
					justify="center"
					style={{ textAlign: "center", gap: "30px" }}
					width="80%"
				>
					<Title center>Termos de uso e privacidade</Title>
					<div style={{ width: "80%" }}>
						<Text>
							Bem-vindo(a) ao nosso aplicativo de divulgação de alimentos. Este
							documento descreve os termos de uso e privacidade dos dados que regem o
							uso do nosso aplicativo. Ao utilizar o nosso aplicativo, você concorda em
							cumprir estes termos.
						</Text>
					</div>
					<div style={{ textAlign: "start", width: "100%" }}>
						<Text>Atualizado em 04/03/2023</Text>
						<Divider marginAll="10px" />
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "10px",
								flexWrap: "wrap",
							}}
						>
							<Subtitle>Termos de uso:</Subtitle>

							<Text>
								1. Licença de uso: Ao utilizar o nosso aplicativo, você recebe uma
								licença limitada, não exclusiva e revogável para acessar e usar o nosso
								aplicativo.
							</Text>
							<Text>
								2. Uso do aplicativo: Você concorda em utilizar o nosso aplicativo
								apenas para fins legais e de acordo com estes termos de uso. Você não
								pode utilizar o nosso aplicativo de forma que possa danificar,
								desativar, sobrecarregar ou prejudicar a nossa infraestrutura ou o
								desempenho do aplicativo.
							</Text>
							<Text>
								3. Propriedade intelectual: Todo o conteúdo presente no nosso
								aplicativo, incluindo, mas não se limitando a, textos, imagens,
								gráficos, logotipos e nomes comerciais são de propriedade exclusiva do
								nosso aplicativo ou de nossos fornecedores. O uso não autorizado deste
								conteúdo é estritamente proibido.
							</Text>
							<Text>
								4. Links para sites de terceiros: O nosso aplicativo pode conter links
								para sites de terceiros que não são controlados pelo nosso aplicativo.
								Não nos responsabilizamos pelo conteúdo ou práticas de privacidade
								desses sites e encorajamos você a ler os termos de uso e privacidade
								desses sites antes de utilizá-los.
							</Text>
						</div>
					</div>
					<div style={{ textAlign: "start", width: "100%" }}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "10px",
								flexWrap: "wrap",
							}}
						>
							<Subtitle>Privacidade dos dados:</Subtitle>
							<Text>
								1. Coleta de informações: Coletamos informações pessoais, como nome,
								endereço de e-mail e informações sobre a sua localização, apenas com o
								seu consentimento expresso.
							</Text>
							<Text>
								2. Uso das informações: Utilizamos as informações coletadas para
								fornecer a você serviços personalizados, melhorar o nosso aplicativo e
								fornecer suporte ao usuário.
							</Text>
							<Text>
								3. Compartilhamento de informações: Não compartilhamos informações
								pessoais com terceiros, exceto quando necessário para prestar os
								serviços solicitados por vo cê ou conforme exigido por lei.
							</Text>
							<Text>
								4. Segurança das informações: Empregamos medidas de segurança razoáveis
								para proteger as informações pessoais que coletamos contra acesso não
								autorizado, divulgação ou alteração.
							</Text>
							<Text>
								5.Cookies: Utilizamos cookies para melhorar a sua experiência no nosso
								aplicativo. Você pode optar por desativar os cookies em seu navegador,
								mas isso pode afetar a funcionalidade do nosso aplicativo.
							</Text>
						</div>
						<Divider marginAll="20px" />
						<Checkbox
							callback={checked => {
								setTermAccepted(checked);
							}}
							value={
								"Eu li e aceito os Termos e condições dos Serviços de mídia da SafeFood."
							}
						></Checkbox>
						<Divider marginAll="20px" />
						<StyledRow style={{ justifyContent: "end" }}>
							<Button buttonStyle="outline">Recusar</Button>
							<Button disabled={!termAccepted}>Aceitar</Button>
						</StyledRow>
					</div>
				</Box>
			</Box>
		</StyledModal>
	);
};
