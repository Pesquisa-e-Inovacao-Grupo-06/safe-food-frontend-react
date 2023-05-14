import { FooterColumnMolecule } from "../../molecules/footer/footer-column-molecule";
import {
	StyledCopyRightContainer,
	StyledFooterContainer,
} from "./footer-organism-styles";
import Logo from "../../../assets/svg-logo.svg";
import GoogleLogo from "../../../assets/google/selo-google.png";
import { Text } from "../../atoms/text";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { TextIcon } from "@/components/molecules/text-icon/text-icon-molecule";
import { ImageAtom } from "@/components/atoms/img";
import { Box } from "@/components/atoms/box";

const iconSize = 20;

const FooterOrganism = () => {
	return (
		<Box margin="0">
			<StyledFooterContainer>
				<FooterColumnMolecule title="Informações">
					<Text cursor>Sobre a Safe Food</Text>
					<Text cursor>Termos de uso</Text>
					<Text cursor>Blog de Receitas</Text>
					<Text cursor>FAQ</Text>
				</FooterColumnMolecule>
				<FooterColumnMolecule title="Redes Sociais">
					<TextIcon
						icon={<FaFacebook size={iconSize} />}
						iconAlign="left"
						iconColor="orange"
						cursor
					>
						Facebook
					</TextIcon>
					<TextIcon
						icon={<FaGoogle size={iconSize} />}
						iconAlign="left"
						iconColor="orange"
						cursor
					>
						Gmail
					</TextIcon>
					<TextIcon
						icon={<FaInstagram size={iconSize} />}
						iconAlign="left"
						iconColor="orange"
						cursor
					>
						Instagram
					</TextIcon>
					<TextIcon
						icon={<FaTwitter size={iconSize} />}
						iconAlign="left"
						iconColor="orange"
						cursor
					>
						Twitter
					</TextIcon>
				</FooterColumnMolecule>
				<FooterColumnMolecule title="Baixe o Aplicativo">
					<ImageAtom
						height={"auto"}
						maxWidth={186}
						cursor={true}
						src={GoogleLogo}
					/>
				</FooterColumnMolecule>
			</StyledFooterContainer>
			<StyledCopyRightContainer>
				<Text typeText="text-sm">
					© Safe Food 2023 - Todos os Direitos Reservados.
				</Text>
				<ImageAtom
					src={Logo}
					alt="Safe Food Logo"
				/>
			</StyledCopyRightContainer>
		</Box>
	);
};

export default FooterOrganism;
