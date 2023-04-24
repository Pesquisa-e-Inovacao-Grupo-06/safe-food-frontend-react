import React from "react";
import { SLayout, SMain } from "./styles";
import SidebarEstab from "..";
import RegisterProduct from "../../register-product";

type Props = {
	children?: any;
	active?: boolean;
	toggle?: () => void;
	activeRegisterProduct?: boolean;
	paddingMain?: boolean;
};

const Layout: React.FC<Props> = ({
	activeRegisterProduct = false,
	paddingMain = false,
	...props
}) => {
	return (
		<SLayout>
			<SidebarEstab />
			<SMain
				padding={paddingMain}
				active={props.active}
			>
				{props.children}
			</SMain>
			<RegisterProduct
				activeRegisterProduct={activeRegisterProduct}
				active={props.active}
				toggle={props.toggle}
			/>
		</SLayout>
	);
};

export default Layout;
