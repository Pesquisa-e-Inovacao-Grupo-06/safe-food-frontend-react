import { useState } from "react";
import { Container, ContainerLogo, ContainerBtn } from "./styles";
import { FaBars, FaAlignLeft, FaAlignJustify } from "react-icons/fa";
import { useSafeFoodTheme } from "../../../app/contexts/SafeFoodThemeProvider";
import { LogoAtom } from "@/components/atoms/logo";
import NavbarItem from "@/components/atoms/navbarItem";
import SignUpButton from "@/components/atoms/navbarItem/btnsignup";
import Switch from "@/components/atoms/toggleSwitch";
import Sidebar from "../sidebar";

interface Props {
	toggleTheme(): void;
}

const Header: React.FC = () => {
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
				<li>
					<NavbarItem
						to="/"
						text="Início"
					/>
				</li>
				<li>
					<NavbarItem
						to="/about"
						text="Safe Food"
					/>
				</li>
				<li>
					<NavbarItem
						to="/faq"
						text="FAQ"
					/>
				</li>
			</ul>
			<ContainerBtn>
				<NavbarItem
					to="/signin"
					text="Entrar"
				/>
				<SignUpButton
					to="signup"
					text="Cadastre-se"
				/>
			</ContainerBtn>
			<Switch onClick={toggleTheme} />
		</Container>
	);
};

export default Header;
