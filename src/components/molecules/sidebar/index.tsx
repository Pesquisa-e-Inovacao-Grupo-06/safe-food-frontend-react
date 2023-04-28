import {
	ContainerSidebar,
	Content,
	ContainerBack,
	HeaderSidebar,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs";
import SidebarItem from "../../atoms/sidebarItem";
import { LogoAtom } from "@/components/atoms/logo";
import { AiOutlineHome } from "react-icons/ai";
import { MdLogout, MdPersonAddAlt } from "react-icons/md";
import { RxEnter } from "react-icons/rx";
import { useLocation } from "react-router-dom";

type Props = {
	active: boolean;
	toggle: () => void;
};

function Sidebar({ active, toggle }: Props) {
	const { pathname } = useLocation();

	return (
		<ContainerBack
			sidebar={active}
			className={active ? "active" : ""}
			onClick={toggle}
		>
			<ContainerSidebar sidebar={active}>
				<FaTimes onClick={toggle} />
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

const itemLinkArray = [
	{
		icon: AiOutlineHome,
		text: "Início",
		to: "/",
	},
	{
		icon: BsInfoCircle,
		text: "Safe Food",
		to: "/about",
	},
	{
		icon: BsQuestionCircle,
		text: "FAQ",
		to: "/faq",
	},
	{
		icon: RxEnter,
		text: "Entrar",
		to: "/signin",
	},
	{
		icon: MdPersonAddAlt,
		text: "Cadastrar",
		to: "/signup",
	},
	{
		icon: MdLogout,
		text: "Sair",
		to: "#",
	},
];
