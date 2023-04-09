import { FooterColumnMolecule } from "../../molecules/footer/footer-column-molecule";
import {
	StyledCopyRightContainer,
	StyledFooterContainer,
	StyledLIFooterColumn,
} from "./footer-organism-styles";

import Logo from "../../../assets/svg-logo.svg";
import GoogleLogo from "../../../assets/google/selo-google.png";
import { TextAtom } from "../../atoms/text/text-atom";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { TextIcon } from "../../atoms/text/text-icon-molecule";

export type FooterOrganismProps = {};

export const FooterOrganism = ({}) => {
	var iconSize = 20;
	//	TODO: responsividade para celular
	return (
		<>
			<StyledFooterContainer>
				<FooterColumnMolecule title="Informações">
					<ul>
						<StyledLIFooterColumn>
							<TextAtom
								text="Sobre a Safe Food"
								typeText="text-md"
							/>
						</StyledLIFooterColumn>
						<StyledLIFooterColumn>
							<TextAtom
								text="Termos de uso"
								typeText="text-md"
							/>
						</StyledLIFooterColumn>
						<StyledLIFooterColumn>
							<TextAtom
								text="Blog de Receitas"
								typeText="text-md"
							/>
						</StyledLIFooterColumn>
						<StyledLIFooterColumn>
							<TextAtom
								text="FAQ"
								typeText="text-md"
							/>
						</StyledLIFooterColumn>
					</ul>
				</FooterColumnMolecule>
				<FooterColumnMolecule title="Redes Sociais">
					<StyledLIFooterColumn>
						<TextIcon
							icon={<FaFacebook size={iconSize} />}
							iconAlign="left"
							text="Facebook"
							iconColor="orange"
						/>
					</StyledLIFooterColumn>
					<StyledLIFooterColumn>
						<TextIcon
							icon={<FaGoogle size={iconSize} />}
							iconAlign="left"
							text="Gmail"
							iconColor="orange"
						/>
					</StyledLIFooterColumn>

					<StyledLIFooterColumn>
						<TextIcon
							icon={<FaInstagram size={iconSize} />}
							iconAlign="left"
							text="Instagram"
							iconColor="orange"
						/>
					</StyledLIFooterColumn>

					<StyledLIFooterColumn>
						<TextIcon
							icon={<FaTwitter size={iconSize} />}
							iconAlign="left"
							text="Twitter"
							iconColor="orange"
						/>
					</StyledLIFooterColumn>
				</FooterColumnMolecule>
				<FooterColumnMolecule title="Baixe o Aplicativo">
					<img
						id="play-store"
						src={GoogleLogo}
						alt=""
					/>
				</FooterColumnMolecule>
			</StyledFooterContainer>

			<StyledCopyRightContainer>
				<TextAtom
					typeText="text-sm"
					text="© Safe Food 2023 - Todos os Direitos Reservados."
				></TextAtom>
				{/* TODO: icone da safefood em svg para aumentar resolução */}
				<img src={Logo} />
			</StyledCopyRightContainer>
		</>
	);
};
