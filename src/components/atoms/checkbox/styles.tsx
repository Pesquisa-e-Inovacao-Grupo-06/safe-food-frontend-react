import styled from "styled-components";
import { Label } from "../label";

export const CContainer = styled.div`
	display: flex;
    /* align-items: center; */
`;

export const CInput = styled.input`
	cursor: pointer;
    /* opacity: 0.5;
    position: absolute; */
`;

export const CLabel = styled.label`
	display: flex;
	flex-direction: column;
`;

export const CLabelText = styled.span`
	cursor: pointer;
	color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.dark_gray[600]
			: p.theme.colors.light_gray[400]};
	font-size: 16px;
`;

export const CLabelAttention = styled(Label)<{ alert: boolean }>`
	font-size: 10px;
	line-height: 15px;
	color: red;
	display: ${p => (!p.alert ? "block" : "none")};
`;
