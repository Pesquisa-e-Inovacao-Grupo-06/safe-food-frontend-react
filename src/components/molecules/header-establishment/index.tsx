import { useState } from 'react';
import { Container } from '../header/styles';
import { FaBars, FaHome, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useSafeFoodTheme } from '../../../app/contexts/SafeFoodThemeProvider';
import Switch from '@/components/atoms/toggle-switch';
import Sidebar from '../sidebar';
import { MdFastfood, MdOutlineFastfood } from 'react-icons/md';
import { BsGear } from 'react-icons/bs';
import { Cache } from '@/app/domain/protocols/Cache';
import { IoMdSettings } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';

type HeaderEstablishmentProps = {
	cache: Cache;
};

const HeaderEstablishment: React.FC<HeaderEstablishmentProps> = ({ cache }) => {
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
				cache={cache}
			/>
			<Switch onClick={toggleTheme} />
		</Container>
	);
};

export default HeaderEstablishment;

const itemLinkArraySide = [
	{
		icon: FaHome,
		text: 'Início',
		to: '/home-establishment',
	},
	{
		icon: MdFastfood,
		text: 'Produtos',
		to: '/products',
	},
	{
		icon: FaUserAlt,
		text: 'Meu Perfil',
		to: '/profile-establishment',
	},
	{
		icon: IoSettingsSharp,
		text: 'Preferências',
		to: '/preferences-establishment',
	},
	{
		icon: FaSignOutAlt,
		text: 'Sair',
		to: '/',
	},
];
