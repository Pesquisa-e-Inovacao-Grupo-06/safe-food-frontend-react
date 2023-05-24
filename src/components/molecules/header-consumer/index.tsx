import { Box } from "@/components/atoms/box";
import ContainerHeader from "@/components/atoms/container-header";
import { LogoAtom } from "@/components/atoms/logo";
import imgTeste from "../../../assets/food-favorite.png";
import { Text } from "@/components/atoms/text";
import DropDownSubMenu from "../drop-down-sub-menu";
import Switch from "@/components/atoms/toggle-switch";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { useState } from "react";
import DropDownLocalInfo from "../drop-down-local-info";
import SearchBar from "../search-bar";
import { ContainerHeaderConsumer } from "./styles";
import { FaBars, FaHome, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import Sidebar from "../sidebar";
import { Cache } from "@/app/domain/protocols/Cache";

export type HeaderConsumerProps = {
	cache: Cache;
};

const HeaderConsumer: React.FC<HeaderConsumerProps> = ({ cache }) => {
	const { toggleTheme, getTheme } = useSafeFoodTheme();
	const [sidebar, setSidebar] = useState(false);

	function toggleSidebar() {
		setSidebar(!sidebar);
	}

	return (
		<>
			<ContainerHeader>
				<ContainerHeaderConsumer>
					<FaBars onClick={toggleSidebar} />
					<Sidebar
						itemLinkArray={itemLinkArraySideConsumer}
						active={sidebar}
						toggle={toggleSidebar}
					/>
					<LogoAtom />
					<DropDownLocalInfo />
					<SearchBar />
					<Box className="container-user-info-header-consumer">
						<Text>
							<span>Lincoln Ferreira</span>
						</Text>
						<DropDownSubMenu cache={cache}>
							<img src={imgTeste} />
						</DropDownSubMenu>
					</Box>
					<Switch onClick={toggleTheme} />
				</ContainerHeaderConsumer>
			</ContainerHeader>
		</>
	);
};

export default HeaderConsumer;

const itemLinkArraySideConsumer = [
	{
		icon: FaHome,
		text: "Início",
		to: "/home-consumer",
	},
	{
		icon: FaUserAlt,
		text: "Meu Perfil",
		to: "/profile",
	},
	{
		icon: FaSignOutAlt,
		text: "Sair",
		to: "#",
	},
];
