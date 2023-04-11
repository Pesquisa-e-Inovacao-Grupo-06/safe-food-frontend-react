import {
	ContainerSidebar,
	Content,
	ContainerBack,
	HeaderSidebar,
} from "./styles";
import {
	FaTimes,
	FaHome,
	FaSignOutAlt,
	FaQuestionCircle,
	FaSignInAlt,
} from "react-icons/fa";
import { BsInfoCircleFill, BsPersonFillAdd } from "react-icons/bs";
import SidebarItem from "../../atoms/sidebarItem";
import { ContainerFluid } from "@/components/atoms/container";
import { LogoAtom } from "@/components/atoms/logo";

type Props = {
	active: boolean;
	toggle: () => void;
};

function Sidebar({ active, toggle }: Props) {
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
					<SidebarItem
						Icon={FaHome}
						text="Início"
						to="/"
						onClick={toggle}
					/>
					<SidebarItem
						Icon={BsInfoCircleFill}
						text="Safe Food"
						to="/about"
						onClick={toggle}
					/>
					<SidebarItem
						Icon={FaQuestionCircle}
						text="FAQ"
						to="/faq"
						onClick={toggle}
					/>
					<SidebarItem
						Icon={FaSignInAlt}
						text="Entrar"
						to="/signin"
						onClick={toggle}
					/>
					<SidebarItem
						Icon={BsPersonFillAdd}
						text="Cadastrar"
						to="/signup"
						onClick={toggle}
					/>
					<SidebarItem
						Icon={FaSignOutAlt}
						text="Sair"
						to="/"
						onClick={toggle}
					/>
				</Content>
			</ContainerSidebar>
		</ContainerBack>
	);
}

export default Sidebar;
