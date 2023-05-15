import { Dispatch, useState } from "react";
import { Container, ContainerLogo, ContainerBtn } from "./styles";
import { FaBars } from "react-icons/fa";
import { useSafeFoodTheme } from "../../../app/contexts/SafeFoodThemeProvider";
import { LogoAtom } from "@/components/atoms/logo";
import NavbarItem from "@/components/atoms/navbarItem";
import SignUpButton from "@/components/atoms/navbarItem/btnsignup";
import Switch from "@/components/atoms/toggle-switch";
import Sidebar from "../sidebar";
import { useLocation } from "react-router-dom";
import { useModalHome } from "@/app/contexts/ModalProvider";

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
