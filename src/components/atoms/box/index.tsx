import { motion } from "framer-motion";
import styled from "styled-components";
export type BoxProps = {
	height?: string;
	width?: string;
	display?: "flex" | "block" | "none" | "inline";
	justify?: "center" | "space-between" | "space-around" | "left" | "right";
	alignItems?: "center" | "baseline";
	margin?: string;
	padding?: string;
	overflow?: "auto" | "hidden" | "visible";
	flexDiretion?: "column" | "row";
	shadow?: "xsm" | "sm" | "md" | "lg" | "xlg" | "none";
	borderRadius?: "sm" | "md" | "lg" | "none";
	background?: string;
};
export const Box = styled(motion.div)<BoxProps>`
	height: ${p => p.height || "auto"};
	width: ${p => p.width || "100%"};
	display: ${p => p.display || "block"};
	justify-content: ${p => p.justify || "center"};
	align-items: ${p => p.alignItems || "center"};
	margin: ${p => p.margin || "0px"};
	padding: ${p => p.padding || "0px"};
	overflow: ${p => p.overflow || "hidden"};
	flex-direction: ${p => p.flexDiretion || "row"};
	background: ${p => p.background || "none"};
	box-shadow: ${p => {
		if (p.shadow === "xsm") return p.theme.colors.shadow[200];
		if (p.shadow === "sm") return p.theme.colors.shadow[400];
		if (p.shadow === "md") return p.theme.colors.shadow[600];
		if (p.shadow === "lg") return p.theme.colors.shadow[800];
		if (p.shadow === "xlg") return p.theme.colors.shadow[1000];
		return "none";
	}};
	border-radius: ${p => {
		if (p.borderRadius === "sm") return p.theme.border.radius.sm;
		if (p.borderRadius === "md") return p.theme.border.radius.md;
		if (p.borderRadius === "lg") return p.theme.border.radius.lg;
		return "none";
	}};
`;
