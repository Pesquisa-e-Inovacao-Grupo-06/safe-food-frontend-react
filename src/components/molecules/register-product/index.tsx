import React, { useState } from "react";
import {
	ContainerRegisterProduct,
	BtnRegisterProduct,
	InputNameSignUpHomeEstablishment,
} from "./styles";
import { AiOutlineRight } from "react-icons/ai";
import { SDivider } from "../sidebar-establishment/styles";
import { StyledButton } from "@/components/atoms/button/styles";
import { Box } from "@/components/atoms/box";
import { CardExpansiveEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { JustStringAndSpaceValidator } from "@/app/util/validations/just-string-and-space";

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
					<div className="header-register-product">
						<CardExpansiveEstablishmentFoodOrganism />
					</div>
					<div className="main-register-product">
						<SDivider className="divider-register-product" />
						<div className="container-main-register-product">
							{FormInputsRegisterProduct.map(({ span, input, classname }) => (
								<ul>
									<li className={classname}>
										<span>
											{span}
											<label>*</label>
										</span>
										{input}
									</li>
								</ul>
							))}
						</div>
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

const FormInputsRegisterProduct = [
	{
		span: "Nome do Produto:",
		input: (
			<InputNameSignUpHomeEstablishment
				validator={new JustStringAndSpaceValidator(5, 100)}
			/>
		),
	},
	{
		span: "Preço:",
		input: (
			<InputNameSignUpHomeEstablishment
				validator={new JustStringAndSpaceValidator(5, 100)}
			/>
		),
	},
	{
		classname: "input-descricao-home-establishment",
		span: "Descrição:",
		input: (
			<InputNameSignUpHomeEstablishment
				validator={new JustStringAndSpaceValidator(5, 100)}
			/>
		),
	},
];
