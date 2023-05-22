import React from "react";
import { SLayout, SMain } from "./styles";
import SidebarEstab from "..";
import RegisterProduct from "../../register-product";
import { Cache } from "@/app/domain/protocols/Cache";
import { Restriction } from "@/app/domain/entities/Restriction";
import { TypeProduct } from "@/app/domain/entities/TypeProduct";
import { SafeFoodProductRequest } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { Product } from "@/app/domain/entities/Product";

type Props = {
	children?: any;
	active?: boolean;
	toggle?: () => void;
	activeRegisterProduct?: boolean;
	paddingMain?: boolean;
	cache: Cache;
	productRestrictions?: Restriction[];
	typeProduct?: TypeProduct[];
	onClickCreate(data: SafeFoodProductRequest): void;
	productEdit?: Product;
};

const Layout: React.FC<Props> = ({
	activeRegisterProduct = false,
	paddingMain = false,
	cache,
	productRestrictions,
	typeProduct,
	onClickCreate,
	productEdit,
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
			<RegisterProduct
				activeRegisterProduct={activeRegisterProduct}
				active={props.active}
				toggle={props.toggle}
				restrictionProduct={productRestrictions}
				typeProduct={typeProduct}
				onClickCreate={onClickCreate}
				productEdit={productEdit}
			/>
		</SLayout>
	);
};

export default Layout;
