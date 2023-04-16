import React, { useState } from "react";
import { ContainerRegisterProduct, BtnRegisterProduct } from "./styles";
import { AiOutlineRight } from "react-icons/ai";
import { SDivider } from "../sidebar-establishment/styles";
import { StyledButton } from "@/components/atoms/button/styles";
import { Box } from "@/components/atoms/box";

function RegisterProduct() {
	const [sidebarRegisterOpen, setSidebarRegisterOpen] = useState(false);

	return (
		<>
			<ContainerRegisterProduct isOpen={sidebarRegisterOpen}>
				<>
					<BtnRegisterProduct
						isOpen={sidebarRegisterOpen}
						onClick={() => setSidebarRegisterOpen(p => !p)}
					>
						<AiOutlineRight />
					</BtnRegisterProduct>
				</>
				<div className="container-info-register-product">
					<div className="header-register-product"></div>
					<div className="main-register-product">
						<SDivider className="divider-register-product" />
					</div>
					<div className="footer-register-product">
						<Box className="container-footer-register-product">
							<StyledButton
								className="btn-cancelar-footer-register-product"
								height="fit-content"
								width="fit-content"
								buttonStyle="filled"
							>
								Remover
							</StyledButton>
							<StyledButton
								className="btn-salvar-footer-register-product"
								height="fit-content"
								width="fit-content"
								buttonStyle="filled"
							>
								Salvar
							</StyledButton>
						</Box>
					</div>
				</div>
			</ContainerRegisterProduct>
		</>
	);
}

export default RegisterProduct;
