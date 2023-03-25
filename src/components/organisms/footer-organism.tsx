import { FooterColumnMolecule } from "../molecules/footer-column-molecule";
import {
	StyledCopyRightContainer,
	StyledFooterContainer,
	StyledLIFooterColumn,
} from "./footer-organism-styles";

import logo from "../../assets/Logo-Principal.png";

export type FooterOrganismProps = {};

export const FooterOrganism = ({}) => {
	return (
		<div>
			<StyledFooterContainer>
				<FooterColumnMolecule>
					<ul>
						<StyledLIFooterColumn>Sobre a Safe Food</StyledLIFooterColumn>
						<StyledLIFooterColumn>Termos de uso</StyledLIFooterColumn>
						<StyledLIFooterColumn>Blog de Receitas</StyledLIFooterColumn>
						<StyledLIFooterColumn>FAQ</StyledLIFooterColumn>
					</ul>
				</FooterColumnMolecule>
				<FooterColumnMolecule title="Redes Sociais">
					{/* TODO: atom de texto com icone do lado esquerdo */}
				</FooterColumnMolecule>
				<FooterColumnMolecule title="Baixe o Aplicativo">
					{/* TODO: container com icone da play store */}
				</FooterColumnMolecule>
			</StyledFooterContainer>

			<StyledCopyRightContainer>
				<p>© Safe Food 2023 - Todos os Direitos Reservados</p>

				{/* TODO: icone da safefood */}
				<img
					src={logo}
					alt=""
					width={119}
				/>
			</StyledCopyRightContainer>
		</div>
	);
};
