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
import { Text } from "@/components/atoms/text";
import { CLabelAttention } from "@/components/atoms/checkbox/styles";
import { Chips } from "@/components/atoms/chips/chips-atom";

type Props = {
	active?: boolean;
	toggle?: () => void;
	activeRegisterProduct?: boolean;
};

function RegisterProduct({ active, toggle, activeRegisterProduct }: Props) {
	return (
		<>
			<ContainerRegisterProduct
				activeRegisterProduct={activeRegisterProduct}
				className="transition"
				isOpen={active}
			>
				<>
					<BtnRegisterProduct
						isOpen={active}
						onClick={toggle}
					>
						<AiOutlineRight />
					</BtnRegisterProduct>
				</>
				<div className="container-info-register-product">
					<div className="header-register-product">
						<CardExpansiveEstablishmentFoodOrganism />
					</div>
					<div className="main-register-product">
						<div className="container-main-register-product">
							<SDivider className="divider-register-product" />
							<Text className="text-categoria-register-product">
								<h1>Categoria</h1>
							</Text>
							<Box className="container-categoria-register-product">
								{categoriaResgisterProduct.map((r, i) => (
									<StyledButton
										height="fit-content"
										width="fit-content"
										buttonStyle="filled"
										style={{
											fontSize: "14px",
											maxHeight: "20px",
											width: "fit-content",
											maxWidth: "50px",
										}}
										key={r + i}
									>
										{r}
									</StyledButton>
								))}
							</Box>

							{FormInputsRegisterProduct.map(({ span, input, classname }) => (
								<ul key={classname}>
									<li className={classname}>
										<span>
											{span}
											<label>*</label>
										</span>
										{input}
									</li>
								</ul>
							))}
							<div className="container-restricao-register-product">
								<CLabelAttention
									required={true}
									alert={false}
									htmlFor=""
								>
									Restrições:
								</CLabelAttention>
								<Box className="restricao-register-product">
									{restrictions.map((r, i) => (
										<Chips
											key={r + i}
											sizeChips="chips-md"
											//TODO: RESOLVER O ONCLICK
											onClick={() => {}}
										>
											{r}
										</Chips>
									))}
								</Box>
							</div>
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

const categoriaResgisterProduct = [
	"Todos",
	"Todos",
	"Todos",
	"Todos",
	"Todos",
	"Todos",
	"Todos",
];

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

const restrictions = [
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
	"Restrição",
];
