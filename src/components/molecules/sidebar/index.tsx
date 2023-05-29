import {
	ContainerSidebar,
	Content,
	ContainerBack,
	HeaderSidebar,
} from './styles';
import {
	FaHome,
	FaQuestionCircle,
	FaSignInAlt,
	FaSignOutAlt,
} from 'react-icons/fa';
import SidebarItem from '../../atoms/sidebarItem';
import { LogoAtom } from '@/components/atoms/logo';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { Cache } from '@/app/domain/protocols/Cache';
import { useLocation } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

export type itemLinkArray = {
	icon: IconType;
	text: string;
	to: string;
}[];

type Props = {
	active: boolean;
	toggle: () => void;
	itemLinkArray: itemLinkArray;
	cache?: Cache;
};

function Sidebar({ active, toggle, itemLinkArray, cache }: Props) {
	const { pathname } = useLocation();

	return (
		<ContainerBack
			sidebar={active}
			className={active ? 'active' : ''}
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
							onClick={() => {
								if (text == 'Sair') {
									cache != undefined ? cache.removeItem('token') : '';
									cache != undefined ? cache.removeItem('consumer') : '';
									cache != undefined ? cache.removeItem('establishment') : '';
									cache != undefined ? cache.removeItem('user') : '';
								}
								toggle();
							}}
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
		icon: FaHome,
		text: 'Início',
		to: '/',
	},

	{
		icon: FaQuestionCircle,
		text: 'FAQ',
		to: '/faq',
	},
	{
		icon: FaSignInAlt,
		text: 'Entrar',
		to: '/signin',
	},
	{
		icon: MdPersonAddAlt1,
		text: 'Cadastrar',
		to: '/signup',
	},
	{
		icon: FaSignOutAlt,
		text: 'Sair',
		to: '/',
	},
];
