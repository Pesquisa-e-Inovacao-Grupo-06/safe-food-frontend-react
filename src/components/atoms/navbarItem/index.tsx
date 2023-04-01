import React from "react";
import { Link } from "react-router-dom";
import { ContainerItem } from "./styles";

type Props = {
	to: string;
	text: string;
};

function NavbarItem({ to, text }: Props) {
	return (
		<ContainerItem height={75}>
			<Link to={to}>{text}</Link>
		</ContainerItem>
	);
}

export default NavbarItem;
