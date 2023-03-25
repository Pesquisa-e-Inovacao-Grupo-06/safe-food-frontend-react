import { Container } from "react-dom";
import { TextAtom } from "../atoms/text/text-atom";
import {
	StyledFooterColumnContainer,
	StyledTitleFooterColumn,
} from "./footer-column-style";

export type FooterColumnMoleculeProps = {
	title?: TextAtom;
} & React.PropsWithChildren &
	React.AllHTMLAttributes<Container>;

export const FooterColumnMolecule: React.FC<FooterColumnMoleculeProps> = ({
	title,

	children,
}) => {
	return (
		<div>
			<StyledFooterColumnContainer>
				<StyledTitleFooterColumn>{title}</StyledTitleFooterColumn>
			</StyledFooterColumnContainer>
			{children}
		</div>
	);
};
