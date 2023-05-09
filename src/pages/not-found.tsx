import { Box } from "@/components/atoms/box";
import Header from "@/components/molecules/header";
import { BodyTemplate } from "@/components/templates/body-template";
import { Title } from "@/styles/components/text/Title";
import { Subtitle } from "../styles/components/text/Subtitle";
import { Text } from "@/components/atoms/text";
import styled from "styled-components";
import notFoundImage from "../assets/notfound.png";
import { ImageAtom } from "@/components/atoms/img";

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
						<Subtitle large>Opções que podem te ajudar:</Subtitle>
						<ul style={{ padding: "20px" }}>
							<Li>
								<Subtitle
									cursor
									color="orange"
								>
									Home
								</Subtitle>
							</Li>
							<Li>
								<Subtitle
									cursor
									color="orange"
								>
									FAQ
								</Subtitle>
							</Li>
							<Li>
								<Subtitle
									cursor
									color="orange"
								>
									Cadastro
								</Subtitle>
							</Li>
						</ul>
					</Box>
					<Box>
						<ImageAtom
							src={notFoundImage}
							cursor={false}
						/>
					</Box>
				</Box>
			</BodyTemplate>
		</>
	);
}

export default NotFound;

const Li = styled.li`
	/* display: inline-block; */
	position: relative;
	text-decoration: none;
	list-style-type: none;
	width: fit-content;
	margin-bottom: 8px;
	& ::before {
		content: "•";
		padding-right: 8px;
		/* color: "red"; */
	}
	& ::after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		max-height: 2px;
		min-height: 2px;
		bottom: 0;
		left: 0;
		background-color: orange;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}
	& :hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;
