import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import React from "react";
import { Label } from "../../atoms/label";
import { InputIcon, InputIconProps } from "../input-icon";

export type TextFieldProps = InputIconProps & {
	label: string;
	id: string;
	autoFocus?: boolean;
	required: boolean;
	error: string;
};
export const TextField: React.FC<TextFieldProps> = ({
	id,
	label,
	required = false,
	autoFocus,
	error,
	...props
}) => {
	const { colors } = useSafeFoodTheme().getTheme();
	return (
		<>
			<Label
				htmlFor={id}
				required={required}
			>
				{label}
			</Label>
			<InputIcon
				id={id}
				required={required}
				error={error}
				{...props}
			/>
			{error && (
				<Label
					htmlFor={id}
					style={{
						color: colors.error[400],
						fontSize: 12,
						marginLeft: 8,
					}}
				>
					{error}
				</Label>
			)}
		</>
	);
};
