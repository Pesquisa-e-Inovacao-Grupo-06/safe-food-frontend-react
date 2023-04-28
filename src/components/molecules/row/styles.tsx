import { BoxJustify } from "@/components/atoms/box";
import styled from "styled-components";

export const Row = styled.div<{
	gap?: string;
	justify?: BoxJustify;
	width?: string | number;
	height?: string | number;
	flexWap?: "nowap" | "wap" | "wap-reverse";
}>`
	width: ${p =>
		(typeof p.width === "number" ? p.width + "px" : p.width) || "100%"};
	height: ${p =>
		(typeof p.height === "number" ? p.height + "px" : p.height) || "100%"};
	display: flex;
	justify-content: ${p => p.justify ?? "space-between"};
	flex-wrap: ${p => (p.flexWap != null ? p.flexWap : "wrap")};
	flex-direction: row;
	width: 100%;
	height: 100%;
	gap: ${p => p.gap || 0};
`;
