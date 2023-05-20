import React from "react";
import { SLayout, SMain } from "./styles";
import SidebarEstab from "..";
import RegisterProduct from "../../register-product";
import { Cache } from "@/app/domain/protocols/Cache";

type Props = {
	children?: any;
	active?: boolean;
	toggle?: () => void;
	activeRegisterProduct?: boolean;
	paddingMain?: boolean;
	cache: Cache;
};

const Layout: React.FC<Props> = ({
	activeRegisterProduct = false,
	paddingMain = false,
	cache,
	...props
}) => {
	return (
		<SLayout>
			<SidebarEstab cache={cache} />
			<SMain
				padding={paddingMain}
				active={props.active}
			>
				{props.children}
			</SMain>
			{/* TODO: RESOLVER O REGISTER PRODUCT */}
			{/* <RegisterProduct
				activeRegisterProduct={activeRegisterProduct}
				active={props.active}
				toggle={props.toggle}
			/> */}
		</SLayout>
	);
};

export default Layout;
