import { Container } from "react-dom";
import { TextProps, Text } from "../../atoms/text";
import {
	StyledDivFooterColumn,
	StyledFooterColumnContainer,
	StyledTitleFooterColumn,
} from "./footer-column-style";
import { Box } from "@/components/atoms/box";

export type FooterColumnMoleculeProps = {
	title?: string;
} & React.PropsWithChildren &
	React.AllHTMLAttributes<Container>;

type Props = FooterColumnMoleculeProps;

export const FooterColumnMolecule: React.FC<Props> = ({ title, children }) => {
	return (
		<StyledDivFooterColumn>
			<StyledFooterColumnContainer>
				<StyledTitleFooterColumn>
					<Text typeText="text-mdb">{title}</Text>
				</StyledTitleFooterColumn>
			</StyledFooterColumnContainer>
			<Box
				display="flex"
				flexDiretion="column"
				alignItems="start"
				gap="12px"
			>
				{children}
			</Box>
		</StyledDivFooterColumn>
	);
};
