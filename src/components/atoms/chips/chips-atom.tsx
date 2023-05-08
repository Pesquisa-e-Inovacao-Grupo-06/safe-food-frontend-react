import React, { HtmlHTMLAttributes, PropsWithChildren, useState } from "react";
import { ContainerChips } from "./styles";
import { IconType } from "react-icons/lib";

export type SizeChips = "chips-sm" | "chips-md" | "chips-lg";

type PropsChips = {
	Icon?: IconType | any;
	sizeChips?: SizeChips;
	onClick(state: boolean): void;
	isActive?: boolean;
} & PropsWithChildren &
	HtmlHTMLAttributes<HTMLDivElement>;

export const Chips: React.FC<PropsChips> = ({
	sizeChips = "chips-md",
	children,
	isActive,
	onClick,
	...props
}) => {
	const [state, setState] = useState<boolean>(isActive ?? false);
	return (
		<ContainerChips
			{...props}
			sizeChips={sizeChips}
			favorite={state}
			onClick={() => {
				const newState = !state;
				setState(newState);
				onClick(newState);
			}}
			className="transition"
		>
			<p>{children}</p>
		</ContainerChips>
	);
};
