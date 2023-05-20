import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import React, { ChangeEvent, Dispatch, FormEvent } from "react";
import { Input, InputPropsComponent } from "../input";
import { Label } from "../label";

export type TextFieldProps = {
	label: string;
	id: string;
	autoFocus?: boolean;
	required: boolean;
	error?: string;
	setUseState?: Dispatch<any>;
	onChange: React.FormEventHandler<HTMLInputElement> &
		((e: FormEvent<HTMLInputElement>) => void);
} & React.HTMLAttributes<HTMLInputElement> &
	InputPropsComponent;
export const TextField: React.FC<TextFieldProps> = ({
	id,
	label,
	required,
	autoFocus,
	error = "",
	setUseState,
	onChange,
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
				setUseState={setUseState}
				id={id}
				error={error.length > 0 ? "erro" : ""}
				placeholder="place"
				onChange={() => {
					onChange;
				}}
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
