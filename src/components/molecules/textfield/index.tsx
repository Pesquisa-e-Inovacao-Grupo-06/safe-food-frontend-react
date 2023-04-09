import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import React from "react";
import { InputIcon } from "@/components/molecules/input-icon";
import { InputIconProps } from "@/components/molecules/input-icon";
import { Box } from "@/components/atoms/box";
import { Label } from "@/components/atoms/label";
import { ListItem } from "@/components/atoms/list-item";

export type TextFieldProps = {
	label: string;
	id: string;
	autoFocus?: boolean;
	required: boolean;
	error?: string;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
} & React.HTMLAttributes<HTMLInputElement> &
	InputIconProps;
export const TextField: React.FC<TextFieldProps> = ({
	id,
	label,
	required,
	autoFocus,
	error = "",
	onChange = (e: React.FormEvent<HTMLInputElement>) => {},
	...props
}) => {
	const { colors } = useSafeFoodTheme().getTheme();
	const errors = error.includes(";")
		? error.split(";").map(err => (
				<ListItem
					margin="0 12px"
					key={err}
				>
					{err}
				</ListItem>
		  ))
		: error;
	return (
		<Box width="100%">
			<Label
				htmlFor={id}
				required={required}
			>
				{label}
			</Label>
			<InputIcon
				id={id}
				error={error}
				onChange={onChange}
				{...props}
			/>
			{error && (
				<Label
					htmlFor={id}
					style={{
						color: colors.error[400],
						fontSize: 12,
						marginLeft: typeof errors === "string" ? 12 : 0,
					}}
				>
					{errors}
				</Label>
			)}
		</Box>
	);
};
