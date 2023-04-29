import React, { HtmlHTMLAttributes, PropsWithChildren, useState } from "react";
import { ContainerChips } from "./styles";
import { IconType } from "react-icons/lib";

export type SizeChips = "chips-sm" | "chips-md" | "chips-lg";

type PropsChips = {
	Icon?: IconType | any;
	sizeChips?: SizeChips;
} & PropsWithChildren &
	HtmlHTMLAttributes<HTMLDivElement>;

export const Chips: React.FC<PropsChips> = ({
	sizeChips = "chips-md",
	children,
	...props
}) => {
	const [state, setState] = useState<boolean>(false);

	function toggleState() {
		setState(!state);
	}

	return (
		<ContainerChips
			{...props}
			sizeChips={sizeChips}
			favorite={state}
			onClick={toggleState}
			className="transition"
		>
			<p>{children}</p>
		</ContainerChips>
	);
};
