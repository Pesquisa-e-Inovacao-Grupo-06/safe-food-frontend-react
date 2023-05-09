import { Box } from "@/components/atoms/box";
import Header from "@/components/molecules/header";
import { BodyTemplate } from "@/components/templates/body-template";
import { Title } from "@/styles/components/text/Title";
import { Subtitle } from "../styles/components/text/Subtitle";

function NotFound() {
	return (
		<>
			<Header />
			<BodyTemplate footer>
				<Box
					minHeight="500px"
					minWidth="100%"
					justify="space-between"
					display="flex"
					alignItems="center"
				>
					<Box>
						<Title>Página não encontrada</Title>
						<Subtitle>Opções que podem te ajudar:</Subtitle>
						<ul style={{ padding: "20px" }}>
							<li style={{}}>Home</li>
							<li style={{}}>Faq</li>
							<li style={{}}>Cadastro</li>
						</ul>
					</Box>
					<Box></Box>
				</Box>
			</BodyTemplate>
		</>
	);
}

export default NotFound;
