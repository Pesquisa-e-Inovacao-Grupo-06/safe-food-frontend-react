import { IconType } from "react-icons/lib";
import { Container } from "./styles";
import { Link } from "react-router-dom";

type Props = {
	Icon: IconType;
	text: string;
	to: string;
	onClick: () => void;
};

const SidebarItem = ({ Icon, text, to, onClick }: Props) => {
	return (
		<Container>
			<Link to={to} onClick={onClick}>
				<Icon />
				{text}
			</Link>
		</Container>
	);
};

export default SidebarItem;
