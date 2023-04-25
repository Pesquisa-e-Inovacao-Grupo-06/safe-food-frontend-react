import React, { PropsWithChildren } from "react";
import * as S from "./styles";
export type LabelProps = {
	htmlFor: string;
	block?: boolean;
	required?: boolean;
} & PropsWithChildren &
	React.HTMLAttributes<HTMLLabelElement>;

export const Label: React.FC<LabelProps> = ({
	htmlFor,
	children,
	block,
	required,
	...rest
}) => {
	return (
		<>
			<S.StyledLabel
				htmlFor={htmlFor}
				block={block}
				required={required}
				{...rest}
			>
				{children}
			</S.StyledLabel>
		</>
	);
};
