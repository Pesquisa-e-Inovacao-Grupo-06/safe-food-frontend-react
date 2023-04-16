import React from "react";
import { SLayout, SMain } from "./styles";
import SidebarEstab from "..";

type Props = {
	children?: any;
};

const Layout: React.FC<Props> = ({ ...props }) => {
	return (
		<SLayout>
			<SidebarEstab />
			<SMain>{props.children}</SMain>
		</SLayout>
	);
};

export default Layout;
