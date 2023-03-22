import styled, {css} from "styled-components";
import {ButtonStyle} from ".";
//https://styled-components.com/docs/basics

export const StyledButton = styled.button<{
	buttonStyle: ButtonStyle,
}>`
	${(p)=>{
		// Podemos programar diretamente JS/TS dentro desse bloco quando chamamos template string ``
		if(p.buttonStyle === "filled"){
			// quando retornamos css`` ele vai fazer o estilo, entao comecamos a programar css/styled-components
			return css`
				box-shadow: ${({theme})=>theme.colors.shadow[400]};
				background-color: ${p=> p.theme.isLight() ? p.theme.colors.primary[600] : p.theme.colors.primary[800]};
				border: 2px solid ${p=> {
					if(p.theme.isLight()){
						return p.theme.colors.primary[600]
					}
					return p.theme.colors.primary[1000]
				}};
			`
		}
		else if(p.buttonStyle === `outline`){
			return css`
				background-color: transparent;
				border: 4px solid ${p=>p.theme.colors.primary[400]};
			`
		}
	}}
	
	min-width: 240px;
	height: ${p=>p.theme.pxToRem(60)};
	font-size: ${p => p.theme.font.size.xlg};
	color: ${p=>p.buttonStyle == `filled` ? p.theme.colors.light_gray[200] : p.theme.colors.text};
	font-family: ${p => p.theme.font.family.text};
	border-radius: ${({theme})=>theme.border.radius.md};
	cursor: pointer;
	
	
	font-weight: 600;
	opacity: .85;
	&:hover, &:focus,&:focus-within{
		opacity: 1;
	}
	&:hover{
		box-shadow: ${({theme})=>theme.colors.shadow[600]};
	}
	&:disabled{
		opacity: .8;
		filter: contrast(.8);
		cursor: none;
		user-select: contain;

		&:hover{
			box-shadow: ${({theme})=>theme.colors.shadow[400]};
		}
	}

	@media (max-width: ${p=>p.theme.breakpoint.sm}) {
		width: 90%;
		margin: 20px;
		font-size: ${p => p.theme.font.size.lg};
	}
`;
