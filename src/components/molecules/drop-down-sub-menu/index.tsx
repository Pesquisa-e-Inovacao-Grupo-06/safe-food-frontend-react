import { Text } from "@/components/atoms/text";
import { Box } from "@mui/material";
import { useState } from "react";
import { FaHome, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContainerDropDownSubMenu } from "./styles";

type Props = {
	children?: any;
};

const DropDownSubMenu: React.FC<Props> = ({ children }) => {
	const [active, setActive] = useState(false);

	return (
		<>
			<ContainerDropDownSubMenu
				active={active}
				onClick={() => setActive(!active)}
			>
				<div className="container-children-dropdown-submenu">{children}</div>
				<div className="big-container-info-dropdown-sunmenu">
					<div className="container-info-dropdown-submenu">
						<Text>Lincoln</Text>
						<Text>Safe Food</Text>

						<ul>
							{itemLinkArray.map(({ icon, text, to }) => (
								<li>
									<Link to={to}>
										{icon}
										<span>{text}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</ContainerDropDownSubMenu>
		</>
	);
};

export default DropDownSubMenu;

const itemLinkArray = [
	{
		icon: <FaHome />,
		text: "Home",
		to: "/home-consumer",
	},
	{
		icon: <FaUserAlt />,
		text: "Meu Perfil",
		to: "/profile",
	},
	{
		icon: <FaSignOutAlt />,
		text: "Sair",
		to: "/",
	},
];