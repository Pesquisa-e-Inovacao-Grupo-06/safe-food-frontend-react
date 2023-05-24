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
import { ImageAtom } from "@/components/atoms/img";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";

export type HeaderConsumerProps = {
	cache: Cache;
};

const HeaderConsumer: React.FC<HeaderConsumerProps> = ({ cache }) => {
	const { toggleTheme, getTheme } = useSafeFoodTheme();
	const [sidebar, setSidebar] = useState(false);

	function toggleSidebar() {
		setSidebar(!sidebar);
	}
	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};

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
						<DropDownSubMenu
							cache={cache}
							userName={user.usuario.nome ?? ""}
						>
							<Text cursor>{user.usuario.nome ?? ""}</Text>
							<ImageAtom src={user.usuario.imagem} />
							<AiFillCaretDown
								fill="orange"
								color="orange"
								cursor="pointer"
							/>
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
		icon: FaUserAlt,
		text: "Preferências",
		to: "/preferences",
	},
	{
		icon: FaSignOutAlt,
		text: "Sair",
		to: "#",
	},
];
