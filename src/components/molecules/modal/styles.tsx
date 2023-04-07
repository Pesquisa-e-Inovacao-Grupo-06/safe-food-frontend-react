import styled from "styled-components";
import { motion } from "framer-motion";
type Size = "sm" | "md" | "lg";
export type StyledModalProps = {
	padding?: string;
	size: Size;
	height?: Size;
};
export const StyledModal = styled(motion.section)<StyledModalProps>`
	border-radius: ${p => p.theme.border.radius.lg};
	background-color: ${p => p.theme.colors.background};

	max-width: ${p => {
		let size = 80;
		if (p.size === "md") size = 60;
		if (p.size === "sm") size = 40;
		return size + "%";
	}};

	max-height: ${p => {
		let height = 80;
		if (p.height === "md") height = 60;
		if (p.height === "sm") height = 40;
		return height + "vh";
	}};
	width: 100%;
	height: 100%;

	box-shadow: ${p => p.theme.colors.shadow[800]};
	position: fixed;
	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);
	padding: ${p => p.padding || "8px"};

	@media (max-width: ${p => p.theme.breakpoint.sm}) {
		max-width: 90%;
	}
`;

export const ForegroundModal = styled(motion.div)`
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(2.5px);
	position: fixed;
	top: 0;
	left: 0;
	width: 105vw;
	height: 105vh;
`;
