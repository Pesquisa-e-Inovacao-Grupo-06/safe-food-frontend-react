import { BoxProps } from "@/components/atoms/box";
import { Box } from "@/components/atoms/box";
import React, { HTMLAttributes, PropsWithChildren, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Row } from "../row/styles";
import { Column } from "@/components/atoms/column";
import { TextAtom } from "@/components/atoms/text/text-atom";

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
				<Box>
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
