import React from "react";
import { Link } from "react-router-dom";
import { ContainerItem } from "./styles";

type Props = {
	to: string;
	text: string;
	isActive?: boolean;
};

function NavbarItem({ to, text, isActive }: Props) {
	return (
		<ContainerItem isActive={isActive}>
			<Link to={to}>{text}</Link>
		</ContainerItem>
	);
}

export default NavbarItem;
