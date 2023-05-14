import {
	ContainerSidebar,
	Content,
	ContainerBack,
	HeaderSidebar,
} from "./styles";
import {
	FaHome,
	FaInfoCircle,
	FaQuestionCircle,
	FaSignInAlt,
	FaSignOutAlt,
} from "react-icons/fa";
import SidebarItem from "../../atoms/sidebarItem";
import { LogoAtom } from "@/components/atoms/logo";
import { MdPersonAddAlt1 } from "react-icons/md";

import { useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IconType } from "react-icons/lib";

export type itemLinkArray = {
	icon: IconType;
	text: string;
	to: string;
}[];

type Props = {
	active: boolean;
	toggle: () => void;
	itemLinkArray: itemLinkArray;
};

function Sidebar({ active, toggle, itemLinkArray }: Props) {
	const { pathname } = useLocation();

	return (
		<ContainerBack
			sidebar={active}
			className={active ? "active" : ""}
			onClick={toggle}
		>
			<ContainerSidebar sidebar={active}>
				<IoCloseSharp onClick={toggle} />
				<HeaderSidebar height={75}>
					<LogoAtom sizeLogo="logo-sm" />
				</HeaderSidebar>
				<Content>
					{itemLinkArray.map(({ icon, text, to }) => (
						<SidebarItem
							Icon={icon}
							text={text}
							to={to}
							isActive={pathname === to}
							onClick={toggle}
							// TODO: VERIFICAR key
							key={text + icon}
						/>
					))}
				</Content>
			</ContainerSidebar>
		</ContainerBack>
	);
}

export default Sidebar;

// const itemLinkArray = [
// 	{
// 		icon: FaHome,
// 		text: "Início",
// 		to: "/",
// 	},
// 	{
// 		icon: FaInfoCircle,
// 		text: "Safe Food",
// 		to: "/about",
// 	},
// 	{
// 		icon: FaQuestionCircle,
// 		text: "FAQ",
// 		to: "/faq",
// 	},
// 	{
// 		icon: FaSignInAlt,
// 		text: "Entrar",
// 		to: "/signin",
// 	},
// 	{
// 		icon: MdPersonAddAlt1,
// 		text: "Cadastrar",
// 		to: "/signup",
// 	},
// 	{
// 		icon: FaSignOutAlt,
// 		text: "Sair",
// 		to: "#",
// 	},
// ];
