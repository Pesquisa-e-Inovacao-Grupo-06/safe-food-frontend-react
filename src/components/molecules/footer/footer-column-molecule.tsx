import { Container } from "react-dom";
import { TextProps, TextAtom } from "../../atoms/text";
import {
	StyledDivFooterColumn,
	StyledFooterColumnContainer,
	StyledTitleFooterColumn,
} from "./footer-column-style";

export type FooterColumnMoleculeProps = {
	title?: TextProps;
} & React.PropsWithChildren &
	React.AllHTMLAttributes<Container>;

type Props = FooterColumnMoleculeProps & TextProps;

export const FooterColumnMolecule: React.FC<Props> = ({ title, children }) => {
	return (
		<StyledDivFooterColumn>
			<StyledFooterColumnContainer>
				<StyledTitleFooterColumn>
					<TextAtom typeText="text-mdb">{title}</TextAtom>
				</StyledTitleFooterColumn>
			</StyledFooterColumnContainer>
			{children}
		</StyledDivFooterColumn>
	);
};
