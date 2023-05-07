import { FC } from "react";
import styled from "styled-components";

type RadioProps = {
	name: string;
};
export const RadioButton: FC<RadioProps> = ({ name, ...props }) => {
	return (
		<RadioButtonStyle
			{...props}
			type="radio"
			name={name}
			id=""
		/>
	);
};

export const RadioButtonStyle = styled.input`
	accent-color: ${p => p.theme.colors.primary[600]};
`;

// style={{ accentColor: "orange" }}
