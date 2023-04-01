import styled, { css } from "styled-components";
import { SizeLogo } from ".";

export const ContainerLogo = styled.div<{
	sizeLogo: SizeLogo;
}>`
	.linkLogo {
		display: grid;
		grid-template-columns: 0fr 0fr;
		justify-content: center;
		color: ${props => (props.theme.name === "dark" ? "#ffffff" : "#0a4908")};
		font-family: sans-serif;
		align-items: center;
		text-decoration: none;
		font-weight: 700;
	}

	& h1 {
		${l => {
			switch (l.sizeLogo) {
				case "logo-sm":
					return css`
						font-size: 12px;
					`;
				case "logo-md":
					return css`
						font-size: 15px;
					`;
				case "logo-l":
					return css`
						font-size: 28px;
					`;
				default:
					return css`
						font-size: 10px;
					`;
			}
		}}
	}
`;

export const CustomLogo = styled.img<{
	sizeLogo: SizeLogo;
}>`
	${l => {
		switch (l.sizeLogo) {
			case "logo-sm":
				return css`
					width: 40px;
				`;
			case "logo-md":
				return css`
					width: 57px;
				`;
			case "logo-l":
				return css`
					width: 90px;
				`;
			default:
				return css`
					width: 23px;
				`;
		}
	}}
`;
