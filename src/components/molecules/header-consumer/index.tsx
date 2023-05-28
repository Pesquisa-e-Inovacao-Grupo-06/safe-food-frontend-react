import { Box } from "@/components/atoms/box";
import ContainerHeader from "@/components/atoms/container-header";
import { LogoAtom } from "@/components/atoms/logo";
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
import { AiFillCaretDown } from "react-icons/ai";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodAddressMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodAddressMapper";
import { Product } from "@/app/domain/entities/Product";

export type HeaderConsumerProps = {
	cache: Cache;
	products?: Product[];
};

const HeaderConsumer: React.FC<HeaderConsumerProps> = ({ cache, products }) => {
	const { toggleTheme, getTheme } = useSafeFoodTheme();
	const [sidebar, setSidebar] = useState(false);

	const consumer: SafeFoodConsumerModel =
		cache.getItem("consumer") !== null
			? JSON.parse(cache.getItem("consumer")!)
			: {};

	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};

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

						<DropDownLocalInfo
							address={consumer.enderecos ? consumer.enderecos.length > 0 ? consumer.enderecos.map(SafeFoodAddressMapper.of) : [] : []}
						/>
					<SearchBar products={products ?? []} />
					<Box className="container-user-info-header-consumer">
						<DropDownSubMenu
							cache={cache}
							userName={user.usuario.nome ?? ""}
						>
							<Text cursor={true}>{user.usuario.nome ?? ""}</Text>
							<ImageAtom src={consumer.imagem} />
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
