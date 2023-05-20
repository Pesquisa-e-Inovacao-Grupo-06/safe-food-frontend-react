import { FC, HTMLAttributes } from "react";
import styled from "styled-components";

type RadioProps = {
	name: string;
	disabled?: boolean;
};
export const RadioButton: FC<RadioProps> = ({ name, ...props }) => {
	return (
		<RadioButtonStyle
			{...props}
			type="radio"
			name={name}
			id=""
			disabled={props.disabled || false}
		/>
	);
};

export const RadioButtonStyle = styled.input`
	accent-color: ${p => p.theme.colors.primary[600]};
`;

// style={{ accentColor: "orange" }}
