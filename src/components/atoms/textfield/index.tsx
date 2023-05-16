import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import React, { ChangeEvent } from "react";
import { Input, InputPropsComponent } from "../input";
import { Label } from "../label";

export type TextFieldProps = {
	label: string;
	id: string;
	autoFocus?: boolean;
	required: boolean;
	error?: string;
	onChange: (e: React.FormEvent) => void;
} & React.HTMLAttributes<HTMLInputElement> &
	InputPropsComponent;
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
	return (
		<>
			<Label
				htmlFor={id}
				required={required}
			>
				{label}
			</Label>
			<Input
				id={id}
				error={error.length > 0 ? "erro" : ""}
				placeholder="place"
				onChange={onChange}
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
