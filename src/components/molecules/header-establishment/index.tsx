import { useState } from "react";
import { Container } from "../header/styles";
import { FaBars, FaHome, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useSafeFoodTheme } from "../../../app/contexts/SafeFoodThemeProvider";
import Switch from "@/components/atoms/toggle-switch";
import Sidebar from "../sidebar";

const HeaderEstablishment: React.FC = () => {
	const [sidebar, setSidebar] = useState(false);

	function toggleSidebar() {
		setSidebar(!sidebar);
	}

	const { toggleTheme, getTheme } = useSafeFoodTheme();

	return (
		<Container>
			<FaBars onClick={toggleSidebar} />
			<Sidebar
				itemLinkArray={itemLinkArraySide}
				active={sidebar}
				toggle={toggleSidebar}
			/>
			<Switch onClick={toggleTheme} />
		</Container>
	);
};

export default HeaderEstablishment;

const itemLinkArraySide = [
	{
		icon: FaHome,
		text: "Início",
		to: "/",
	},
	{
		icon: FaUserAlt,
		text: "Meu Perfil",
		to: "/about",
	},
	{
		icon: FaSignOutAlt,
		text: "Sair",
		to: "#",
	},
];
