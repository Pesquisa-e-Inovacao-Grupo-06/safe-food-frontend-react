import { Container } from "react-dom";
import { TextProps, TextAtom } from "../../atoms/text/text-atom";
import {
	StyledFooterColumnContainer,
	StyledTitleFooterColumn,
} from "./footer-column-style";

export type FooterColumnMoleculeProps = {
	title?: TextProps;
} & React.PropsWithChildren &
	React.AllHTMLAttributes<Container>;

type Props = FooterColumnMoleculeProps & TextProps;

export const FooterColumnMolecule: React.FC<Props> = ({
	title,
	typeText,
	children,
}) => {
	return (
		<div>
			<StyledFooterColumnContainer>
				<StyledTitleFooterColumn>
					<TextAtom
						typeText="text-mdb"
						text={title}
					/>
				</StyledTitleFooterColumn>
			</StyledFooterColumnContainer>
			{children}
		</div>
	);
};
