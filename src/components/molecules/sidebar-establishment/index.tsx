import React, { useState } from 'react';
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
} from './styles';

import { AiOutlineHome, AiOutlineLeft } from 'react-icons/ai';
import { MdLogout, MdOutlineFastfood } from 'react-icons/md';
import { HiOutlineUser } from 'react-icons/hi';
import { BsGear } from 'react-icons/bs';

import { useLocation, useNavigate } from 'react-router-dom';
import PingLogo from '../../../assets/Ping-Logo.png';

import Toggle from '../../atoms/toggle-switch';
import Header from '../header';

import { useSafeFoodTheme } from '../../../app/contexts/SafeFoodThemeProvider';
import { Cache } from '@/app/domain/protocols/Cache';
import { SafeFoodLoginResponse } from '@/app/infra/gateway/safefood/models/SafeFoodUser';
import HeaderEstablishment from '../header-establishment';

type SidebarEstabProps = {
	cache: Cache;
};

// export function clearCache(cache: Cache) {
// 	const navigator = useNavigate();

// 	cache.removeItem("token");
// 	cache.removeItem("consumer");
// 	cache.removeItem("establishment");
// 	cache.removeItem("user");

// 	// if (window.location.pathname === "/") {
// 	window.location.reload();
// 	// } else {
// 	// navigator("/");
// 	// }
// }

const SidebarEstab: React.FC<SidebarEstabProps> = ({ cache }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { pathname } = useLocation();
	const { toggleTheme, getTheme } = useSafeFoodTheme();

	const user: SafeFoodLoginResponse =
		cache.getItem('user') !== null ? JSON.parse(cache.getItem('user')!) : {};

	return (
		<>
			<SHeader>
				<HeaderEstablishment cache={cache} />
			</SHeader>
			<SSidebar
				className="transition"
				isOpen={sidebarOpen}
			>
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
						<h3>{user.usuario.nome}</h3>
						<span>{user.usuario.email}</span>
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
							onClick={() => {
								if (label == 'Logout') {
									cache.removeItem('token');
									cache.removeItem('consumer');
									cache.removeItem('establishment');
									cache.removeItem('user');
									// window.location.reload();
								}
							}}
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
		label: 'Início',
		icon: <AiOutlineHome />,
		to: '/home-establishment',
	},
	{
		label: 'Produtos',
		icon: <MdOutlineFastfood />,
		to: '/products',
	},
];

const secondaryLinksArray = [
	{
		label: 'Perfil',
		icon: <HiOutlineUser />,
		to: '/profile-establishment',
	},
	{
		label: 'Preferências',
		icon: <BsGear />,
		to: '/preferences-establishment',
	},
];

const thirdLinksArray = [
	{
		label: 'Logout',
		icon: <MdLogout />,
		to: '/',
	},
];

export default SidebarEstab;
