import React from "react";

import * as S from "./styles";
import {AiOutlineLoading, VscLoading} from 'react-icons/all'
export type ButtonStyle = 'outline' | 'filled';
export type ButtonProps = {
	buttonStyle?: ButtonStyle;
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>
  & React.PropsWithChildren;
export const Button: React.FC<ButtonProps> = ({buttonStyle='filled', disabled = false, children, loading = false, ...props}) => {
	if(loading){
		return (
			<>
				<S.StyledButton disabled={disabled || false} buttonStyle={buttonStyle}>
					<AiOutlineLoading className="spin" size={30}/>
				</S.StyledButton>
			</>	
		)
	}
	return (
		<>
			<S.StyledButton disabled={disabled || false} buttonStyle={buttonStyle}>{children}</S.StyledButton>
		</>
	);
};
