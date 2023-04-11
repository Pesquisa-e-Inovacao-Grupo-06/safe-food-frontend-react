import { BoxJustify } from "@/components/atoms/box";
import styled from "styled-components";

export const Row = styled.div<{
	gap?: string;
	justify?: BoxJustify;
}>`
	display: flex;
	justify-content: ${p => p.justify ?? "space-between"};
	flex-wrap: wrap;
	flex-direction: row;
	width: 100%;
	height: 100%;
	gap: ${p => p.gap || 0};
`;
