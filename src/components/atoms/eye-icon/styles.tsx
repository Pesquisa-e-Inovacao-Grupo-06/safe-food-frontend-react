import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components";
export const EyeOpen = styled(AiFillEye)`
	cursor: pointer;
	opacity: 0.8;
	fill: inherit;
	color: inherit;
	&:hover {
		opacity: 1;
	}
`;
export const EyeClosed = styled(AiFillEyeInvisible)`
	cursor: pointer;
	opacity: 0.8;
	fill: inherit;
	color: inherit;
	&:hover {
		opacity: 1;
	}
`;
