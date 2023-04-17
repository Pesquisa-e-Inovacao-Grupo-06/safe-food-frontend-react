import React, { useState } from "react";
import {
	SDivider,
	SHeader,
	SInfo,
	SLink,
	SLinkContainer,
	SLinkIcon,
	SLinkLabel,
	SLogo,
	SSidebar,
	SSidebarButton,
	STheme,
	SThemeLabel,
} from "./styles";

import { AiOutlineHome, AiOutlineLeft } from "react-icons/ai";
import { MdLogout, MdOutlineFastfood } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { BsGear } from "react-icons/bs";

import { useLocation } from "react-router-dom";
import PingLogo from "../../../assets/Ping-Logo.png";

import Toggle from "../../atoms/toggle-switch";
import Header from "../header";

import { useSafeFoodTheme } from "../../../app/contexts/SafeFoodThemeProvider";

const SidebarEstab: React.FC = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { pathname } = useLocation();
	const { toggleTheme, getTheme } = useSafeFoodTheme();

	return (
		<>
			<SHeader>
				<Header />
			</SHeader>
			<SSidebar isOpen={sidebarOpen}>
				<>
					<SSidebarButton
						isOpen={sidebarOpen}
						onClick={() => setSidebarOpen(p => !p)}
					>
						<AiOutlineLeft />
					</SSidebarButton>
				</>
				<SLogo sidebarOpen={sidebarOpen}>
					<img
						src={PingLogo}
						alt="Safe Food"
					/>
					<SInfo sidebarOpen={sidebarOpen}>
						<h3>Guilherme</h3>
						<span>guivic10@outlook.com</span>
					</SInfo>
				</SLogo>
				<SDivider />
				{linksArray.map(({ icon, label, to }) => (
					<SLinkContainer
						key={label}
						isActive={pathname === to}
					>
						<SLink
							to={to}
							style={!sidebarOpen ? { width: `fit-content` } : {}}
						>
							<SLinkIcon>{icon}</SLinkIcon>
							{sidebarOpen && (
								<>
									<SLinkLabel>{label}</SLinkLabel>
								</>
							)}
						</SLink>
					</SLinkContainer>
				))}
				<SDivider />
				{secondaryLinksArray.map(({ icon, label, to }) => (
					<SLinkContainer
						key={label}
						isActive={pathname === to}
					>
						<SLink
							to={to}
							style={!sidebarOpen ? { width: `fit-content` } : {}}
						>
							<SLinkIcon>{icon}</SLinkIcon>
							{sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
						</SLink>
					</SLinkContainer>
				))}
				<SDivider />
				{thirdLinksArray.map(({ icon, label, to }) => (
					<SLinkContainer
						key={label}
						isActive={pathname === to}
					>
						<SLink
							to={to}
							style={!sidebarOpen ? { width: `fit-content` } : {}}
						>
							<SLinkIcon>{icon}</SLinkIcon>
							{sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
						</SLink>
					</SLinkContainer>
				))}
				<SDivider />
				<STheme>
					{sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
					<Toggle onClick={toggleTheme} />
				</STheme>
			</SSidebar>
		</>
	);
};

const linksArray = [
	{
		label: "Início",
		icon: <AiOutlineHome />,
		to: "/",
	},
	{
		label: "Produtos",
		icon: <MdOutlineFastfood />,
		to: "/products",
	},
];

const secondaryLinksArray = [
	{
		label: "Perfil",
		icon: <HiOutlineUser />,
		to: "/profile",
	},
	{
		label: "Preferências",
		icon: <BsGear />,
		to: "/preferences",
	},
];

const thirdLinksArray = [
	{
		label: "Logout",
		icon: <MdLogout />,
		to: "/logout",
	},
];

export default SidebarEstab;
