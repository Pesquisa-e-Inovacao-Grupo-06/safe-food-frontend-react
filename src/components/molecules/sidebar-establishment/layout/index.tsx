import React from "react";
import { SLayout, SMain } from "./styles";
import SidebarEstab from "..";
import RegisterProduct from "../../register-product";

type Props = {
	children?: any;
};

const Layout: React.FC<Props> = ({ ...props }) => {
	return (
		<SLayout>
			<SidebarEstab />
			<SMain>{props.children}</SMain>
			<RegisterProduct />
		</SLayout>
	);
};

export default Layout;
