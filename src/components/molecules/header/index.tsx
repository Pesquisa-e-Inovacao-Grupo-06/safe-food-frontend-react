import { Dispatch, useState } from "react";
import { Container, ContainerLogo, ContainerBtn } from "./styles";
import {
	FaBars,
	FaHome,
	FaInfoCircle,
	FaQuestionCircle,
	FaSignInAlt,
	FaSignOutAlt,
} from "react-icons/fa";
import { useSafeFoodTheme } from "../../../app/contexts/SafeFoodThemeProvider";
import { LogoAtom } from "@/components/atoms/logo";
import NavbarItem from "@/components/atoms/navbarItem";
import SignUpButton from "@/components/atoms/navbarItem/btnsignup";
import Switch from "@/components/atoms/toggle-switch";
import Sidebar from "../sidebar";
import { useLocation } from "react-router-dom";
import { useModalHome } from "@/app/contexts/ModalProvider";
import { MdPersonAddAlt1 } from "react-icons/md";

interface Props {
	toggleTheme(): void;
}

const Header: React.FC = () => {
	const { setModal } = useModalHome();

	const itemLinkArray = [
		{
			text: "Início",
			to: "/",
			onclick: () => setModal(null),
		},
		{
			text: "Safe Food",
			to: "/about",
		},
		{
			text: "FAQ",
			to: "/faq",
		},
	];
	const { pathname } = useLocation();
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
			<ContainerLogo>
				<LogoAtom />
			</ContainerLogo>
			<ul>
				{itemLinkArray.map(({ text, to }) => (
					<li key={text}>
						<NavbarItem
							to={to}
							text={text}
							isActive={pathname === to}
						/>
					</li>
				))}
			</ul>
			<ContainerBtn>
				<NavbarItem
					onclick={() => setModal("login")}
					text="Entrar"
				/>
				<SignUpButton
					onclick={() => setModal("consumer")}
					text="Cadastre-se"
				/>
			</ContainerBtn>
			<Switch onClick={toggleTheme} />
		</Container>
	);
};

export default Header;

const itemLinkArraySide = [
	{
		icon: FaHome,
		text: "Início",
		to: "/",
	},
	{
		icon: FaInfoCircle,
		text: "Safe Food",
		to: "/about",
	},
	{
		icon: FaQuestionCircle,
		text: "FAQ",
		to: "/faq",
	},
	{
		icon: FaSignInAlt,
		text: "Entrar",
		to: "/signin",
	},
	{
		icon: MdPersonAddAlt1,
		text: "Cadastrar",
		to: "/signup",
	},
	{
		icon: FaSignOutAlt,
		text: "Sair",
		to: "#",
	},
];
