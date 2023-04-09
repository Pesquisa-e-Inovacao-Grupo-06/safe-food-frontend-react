import React from "react";
import { ContainerSwitch } from "./styles";

type Props = {
	rounded?: boolean;
	onClick?: () => void;
};

function Switch({ rounded = true, onClick }: Props) {
	return (
		<ContainerSwitch rounded={rounded}>
			<input
				type="checkbox"
				onClick={onClick}
			/>
			<span />
		</ContainerSwitch>
	);
}

export default Switch;
