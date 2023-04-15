import { BoxProps } from "@/components/atoms/box";
import { Box } from "@/components/atoms/box";
import React, {
	PropsWithChildren,
	useState,
} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TextAtom } from "@/components/atoms/text";
import { Container } from "@/components/atoms/container";

export type AccordionProps = {
	title: string;
} & PropsWithChildren &
	BoxProps;

export const Accordion: React.FC<AccordionProps> = ({
	title,
	children,
	...props
}) => {
	const [open, setOpen] = useState(false);
	return (
		<Box
			padding="4px 12px"
			overflow="hidden"
			borderRadius="md"
			style={{
				border: "2px solid #3334",
			}}
			{...props}
		>
			<Box
				display="flex"
				justify="space-between"
				style={{
					cursor: "pointer",
				}}
				alignItems="center"
				gap="8px"
				onClick={() => setOpen(!open)}
			>
				<Box style={{
					whiteSpace: !open ? "nowrap" : "unset",
					overflow: !open ? "hidden" : "unset",
					textOverflow: !open ? "ellipsis" : "unset",
				}}>
					<TextAtom typeText="text-mdb">{title}</TextAtom>
				</Box>
				<Box
					alignSelf="center"
					display="flex"
					height="100%"
					maxWidth="30px"
					animate={{
						rotate: open ? "180deg" : "0",
					}}
				>
					<IoIosArrowDown />
				</Box>
			</Box>
			<Box
				animate={{
					height: open ? "auto" : 0,
				}}
			>
				{children}
			</Box>
		</Box>
	);
};
