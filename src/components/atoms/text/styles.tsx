import styled, { css } from "styled-components";
import { TypeText } from "./text-atom";
import { ColorType } from "@/styles/theme/styled";

export const StyledText = styled.span<{
	typeText: TypeText;
	color: ColorType;
}>`
	${p => {
		switch (p.typeText) {
			case "title":
				return css`
					font-size: 48px;
					font-height: 56;
					font-weight: 700;
					color: p.color;
				`;
				break;
			case "subtitle":
				return css`
					font-size: 24px;
					font-weight: 36;
					font-weight: 500;
					color: p.color;
				`;
				break;

			case "text-xlg":
				return css`
					font-size: 20px;
					font-weight: 28;
					font-weight: 400;
					color: p.color;
				`;
				break;

			case "text-md":
				return css`
					font-size: 16px;
					font-weight: 24;
					font-weight: 400;
					color: p.color;
				`;
				break;

			case "text-mdb":
				return css`
					font-size: 18px;
					font-weight: 24;
					font-weight: 700;
					color: p.color;
				`;
				break;

			case "text-sm":
				return css`
					font-size: 14px;
					font-weight: 24;
					font-weight: 400;
					color: p.color;
				`;
				break;

			case "text-xsm-i":
				return css`
					font-size: 12px;
					font-weight: 20;
					font-weight: 400;
					color: p.color;
				`;
				break;

			default:
				return css`
					font-size: 16px;
					font-weight: 24;
					font-weight: 400;
					color: p.color;
				`;
		}
	}}
`;
