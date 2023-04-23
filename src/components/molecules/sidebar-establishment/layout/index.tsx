import React from "react";
import { SLayout, SMain } from "./styles";
import SidebarEstab from "..";
import RegisterProduct from "../../register-product";

type Props = {
	children?: any;
	active: boolean;
	toggle: () => void;
};

const Layout: React.FC<Props> = ({ ...props }) => {
	return (
		<SLayout>
			<SidebarEstab />
			<SMain active={props.active}>{props.children}</SMain>
			<RegisterProduct active={props.active} toggle={props.toggle}/>
		</SLayout>
	);
};

export default Layout;
