import { FooterColumnMolecule } from "../../molecules/footer/footer-column-molecule";
import {
	StyledCopyRightContainer,
	StyledFooterContainer,
	StyledLIFooterColumn,
} from "./footer-organism-styles";

import Logo from "../../../assets/svg-logo.svg";
import GoogleLogo from "../../../assets/google/selo-google.png";
import { TextAtom } from "../../atoms/text";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { TextIcon } from "@/components/molecules/text-icon/text-icon-molecule";

export type FooterOrganismProps = {};

export const FooterOrganism = ({ }) => {
	var iconSize = 20;
	return (
		<div
			style={{
				marginBottom: "100px",
				borderTop: "100%",
				borderTopColor: "5px solid orange",
			}}
		>
			<StyledFooterContainer>
				<FooterColumnMolecule title="Informações">
					<StyledLIFooterColumn>
						<TextAtom> Sobre a Safe Food</TextAtom>
					</StyledLIFooterColumn>
					<StyledLIFooterColumn>
						<TextAtom> Termos de uso</TextAtom>
					</StyledLIFooterColumn>
					<StyledLIFooterColumn>
						<TextAtom>Blog de Receitas </TextAtom>
					</StyledLIFooterColumn>
					<StyledLIFooterColumn>
						<TextAtom>FAQ </TextAtom>
					</StyledLIFooterColumn>
				</FooterColumnMolecule>
				<FooterColumnMolecule title="Redes Sociais">
					<StyledLIFooterColumn>
						<TextIcon
							icon={<FaFacebook size={iconSize} />}
							iconAlign="left"
							iconColor="orange"
						>
							Facebook
						</TextIcon>
					</StyledLIFooterColumn>
					<StyledLIFooterColumn>
						<TextIcon
							icon={<FaGoogle size={iconSize} />}
							iconAlign="left"
							iconColor="orange"
						>
							Gmail
						</TextIcon>
					</StyledLIFooterColumn>

					<StyledLIFooterColumn>
						<TextIcon
							icon={<FaInstagram size={iconSize} />}
							iconAlign="left"
							iconColor="orange"
						>
							Instagram
						</TextIcon>
					</StyledLIFooterColumn>

					<StyledLIFooterColumn>
						<TextIcon
							icon={<FaTwitter size={iconSize} />}
							iconAlign="left"
							iconColor="orange"
						>
							Twitter
						</TextIcon>
					</StyledLIFooterColumn>
				</FooterColumnMolecule>
				<FooterColumnMolecule title="Baixe o Aplicativo">
					<img
						id="play-store"
						src={GoogleLogo}
						style={{ maxWidth: "186px", height: "auto" }}
					/>
				</FooterColumnMolecule>
			</StyledFooterContainer>

			<StyledCopyRightContainer>
				<TextAtom typeText="text-sm">
					© Safe Food 2023 - Todos os Direitos Reservados.
				</TextAtom>
				{/* TODO: icone da safefood em svg para aumentar resolução */}
				<img src={Logo} />
			</StyledCopyRightContainer>
		</div>
	);
};
