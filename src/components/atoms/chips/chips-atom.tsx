import React, { HtmlHTMLAttributes, PropsWithChildren, useState } from "react";
import { ContainerChips } from "./styles";
import { IconType } from "react-icons/lib";

export type SizeChips = "chips-sm" | "chips-md" | "chips-lg";

type PropsChips = {
	Icon?: IconType | any;
	sizeChips?: SizeChips;
	onClick(state: boolean): void;
	isActive?: boolean;
	disabled?: boolean;
} & HtmlHTMLAttributes<HTMLDivElement> &
	PropsWithChildren;

export const Chips: React.FC<PropsChips> = ({
	sizeChips = "chips-md",
	isActive,
	disabled = false,
	onClick,
	...props
}) => {
	const [state, setState] = useState<boolean>(isActive ?? false);
	return (
		<ContainerChips
			{...props}
			sizeChips={sizeChips}
			favorite={state}
			disabled={disabled}
			onClick={() => {
				if (disabled == false) {
					const newState = !state;
					setState(newState);
					onClick(newState);
				}
			}}
			className="transition"
		>
			<p>{props.children}</p>
		</ContainerChips>
	);
};
