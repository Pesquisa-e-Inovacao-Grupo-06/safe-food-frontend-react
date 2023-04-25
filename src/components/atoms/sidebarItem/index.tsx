import { IconType } from "react-icons/lib";
import { ItemSidebarContainer } from "./styles";
import { Link } from "react-router-dom";

type Props = {
	Icon: IconType;
	text: string;
	to: string;
	onClick: () => void;
	isActive?: boolean
};

const SidebarItem = ({ Icon, text, to, onClick, isActive }: Props) => {
	return (
		<ItemSidebarContainer isActive={isActive}>
			<Link to={to} onClick={onClick}>
				<Icon />
				{text}
			</Link>
		</ItemSidebarContainer>
	);
};

export default SidebarItem;
