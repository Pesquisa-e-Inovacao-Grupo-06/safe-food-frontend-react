import React, { HTMLAttributes, PropsWithChildren } from "react";
import { AlertDivider, StyledAlert, TitleAlert } from "./styles";
export type AlertType = "success" | "danger" | "warning" | "info";
export type AlertPropsComponent = {
	type: AlertType;
	title?: string;
} & PropsWithChildren &
	HTMLAttributes<HTMLDivElement>;

export const Alert: React.FC<AlertPropsComponent> = ({
	type,
	title,
	children,
	...rest
}) => {
	return (
		<>
			<StyledAlert
				type={type}
				{...rest}
			>
				{title && (
					<>
						<TitleAlert>{title}</TitleAlert>
						<AlertDivider />
					</>
				)}
				{children}
			</StyledAlert>
		</>
	);
};
