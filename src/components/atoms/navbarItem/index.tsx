import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import { ContainerItem } from "./styles";

type Props = {
	to?: string;
	text: string;
	onclick?: () => void;
	isActive?: boolean;
};

function NavbarItem({ to, text, isActive, onclick }: Props) {
	return (
		<ContainerItem isActive={isActive}>
			{to ? <Link to={to}>{text}</Link> : <a onClick={onclick}>{text}</a>}
		</ContainerItem>
	);
}

export default NavbarItem;
