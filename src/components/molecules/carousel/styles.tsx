import { Container } from "@/components/atoms/container";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const CarouselSection = styled(motion.div)<{
	width?: number;
	heigth: number;
}>`
	height: ${p => p.heigth + "px"};
	display: flex;
	align-items: center;
	width: 100%;
	cursor: grab;
	padding: 8px 0;
`;
export const CarouselInner = styled(motion.div)<{
	width?: number;
	heigth?: number;
}>`
	height: 100%;
	display: flex;
	align-items: center;
`;

export const CarouselItem = styled(motion.div)<{
	width?: number;
	height?: number;
	marginHorizontal?: number;
}>`
	border-radius: ${p => p.theme.border.radius.md};
	box-shadow: ${p => p.theme.colors.shadow[400]};
	height: 100%;
	min-width: ${p => p.width + "px"};
	margin: 0px ${p => (p.marginHorizontal ? p.marginHorizontal + "px" : "12px")};

	overflow-x: hidden;
	overflow-y: auto;
`;
