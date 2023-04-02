import React, { useState } from "react";
import { ContainerChips } from "./styles";
import { IconType } from "react-icons/lib";

export type SizeChips = "chips-sm" | "chips-md" | "chips-lg";

type PropsChips = {
	Icon: IconType;
	text: string;
	sizeChips?: SizeChips;
};

export const Chips: React.FC<PropsChips> = ({
	sizeChips = "chips-md",
	...props
}) => {
	const [state, setState] = useState<boolean>(false);

	function toggleState() {
		setState(!state);
	}

	return (
		<ContainerChips
			sizeChips={sizeChips}
			favorite={state}
			onClick={toggleState}
		>
			<p>
				<props.Icon /> {props.text}
			</p>
		</ContainerChips>
	);
};
