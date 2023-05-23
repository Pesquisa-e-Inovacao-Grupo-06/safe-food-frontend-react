import { ContainerRegisterProduct, BtnRegisterProduct } from "./styles";
import { AiOutlineRight } from "react-icons/ai";
import { SDivider } from "../sidebar-establishment/styles";
import { StyledButton } from "@/components/atoms/button/styles";
import { Box } from "@/components/atoms/box";
import { CardExpansiveEstablishmentFoodOrganism } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { JustStringAndSpaceValidator } from "@/app/util/validations/just-string-and-space";
import { Text } from "@/components/atoms/text";
import { CLabelAttention } from "@/components/atoms/checkbox/styles";
import { Chips } from "@/components/atoms/chips/chips-atom";
import { Input } from "@/components/atoms/input";
import { Restriction } from "@/app/domain/entities/Restriction";
import { TypeProduct } from "@/app/domain/entities/TypeProduct";
import { SafeFoodCreateProductRequest } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { useState, useEffect } from "react";
import { Product } from "@/app/domain/entities/Product";
import { SafeFoodUsuarioModel } from "@/app/infra/gateway/safefood/models/SafeFoodUser";

type Props = {
	active?: boolean;
	toggle?: () => void;
	activeRegisterProduct?: boolean;
	restrictionProduct?: Restriction[];
	typeProduct?: TypeProduct[];
	onClickCreate?(data: SafeFoodCreateProductRequest): void;
	productEdit?: Product;
	user?: SafeFoodUsuarioModel;
};

function RegisterProduct({
	active,
	toggle,
	activeRegisterProduct,
	restrictionProduct,
	typeProduct,
	onClickCreate,
	productEdit,
	user,
}: Props) {
	const [objProduct, setObjProduct] = useState<SafeFoodCreateProductRequest>();
	const [pId, setId] = useState<string>("");
	const [pNome, setNome] = useState<string>("");
	const [pPreco, setPreco] = useState<number>(0);
	const [img, setImg] = useState<string>("");
	const [pDescricao, setDescricao] = useState<string>("");
	const [pType, setType] = useState<string>("");
	const [pIngredientes, setIngredientes] = useState<string[]>([]);
	const [pAuxIngredientes, setAuxIngredientes] = useState<string>("");
	const [pRestrictions, setRestrictions] = useState<Restriction[]>([]);
	const [pAuxRestriction, setAuxRestriction] = useState<Restriction>();
	const [auxFunction, setAuxFunction] = useState<string>();

	//limpar todos os dados ao entrar ou reiniciar a página
	useEffect(() => {
		clear();
		clearRestriction();
		clearObjEdit();
	}, []);

	//ativar as restrições do produto que será editado
	const objEditRestrictions = () => {
		productEdit?.params.restricoes != undefined
			? productEdit?.params.restricoes.map(item => {
					var aux = item.name;
					restrictionProduct?.filter(item => {
						item.params.restricao == aux ? (item.params.isActive = true) : "";
					});
			  })
			: [];
	};

	//concatenar ingredientes para auto preencher a input de ingredietes do produto a ser editado
	useEffect(() => {
		const joinIngredientes = pIngredientes.join(", ");
		setAuxIngredientes(joinIngredientes);
	}, [pId]);

	//limpar os values dos useState
	const clear = () => {
		setObjProduct(undefined);
		setId("");
		setNome("");
		setPreco(0);
		setImg("");
		setDescricao("");
		setType("");
		setIngredientes([]);
		setAuxIngredientes("");
		setRestrictions([]);
		setAuxRestriction(undefined);
		setAuxFunction("");
	};

	//colocar todas restrições como inativadas
	const clearRestriction = () => {
		restrictionProduct?.map(item => {
			item.params.isActive = false;
		});
	};

	//limpar objEdit, porém não está funcionando da forma que queria
	const clearObjEdit = () => {
		productEdit = undefined;
	};

	//assim que clicar em no botão de editar ele auto preenche as inputs de criar produtos, para assim conseguir editar o mesmo
	useEffect(() => {
		clear();
		clearRestriction();
		setObjEdit();
		objEditRestrictions();
	}, [productEdit]);

	//passar os dados de edit para os useState
	const setObjEdit = () => {
		setId(productEdit?.params.id != undefined ? productEdit?.params.id : "");
		setNome(
			productEdit?.params.titulo != undefined ? productEdit?.params.titulo : ""
		);
		setPreco(
			productEdit?.params.preco != undefined ? productEdit?.params.preco : 0
		);
		setImg(
			productEdit?.params.imagem != undefined ? productEdit?.params.imagem : ""
		);
		setDescricao(
			productEdit?.params.descricao != undefined
				? productEdit?.params.descricao
				: ""
		);
		setType(
			productEdit?.params.categoria?.nome != undefined
				? productEdit?.params.categoria.nome
				: ""
		);
		setIngredientes(
			productEdit?.params.ingredientes != undefined
				? productEdit?.params.ingredientes
				: []
		);
	};

	//create product e limpa as inputs
	useEffect(() => {
		debugger;
		objProduct && onClickCreate != undefined ? onClickCreate(objProduct) : "";
		clear();
		clearRestriction();
		clearObjEdit();
	}, [objProduct]);

	//manipulação dos ingredientes, para inserir cada um
	useEffect(() => {
		var ingredientesSplit = pAuxIngredientes.split(",");
		var ingredientesAdapter = ingredientesSplit.map(item => {
			return item.trim();
		});
		setIngredientes(ingredientesAdapter);
	}, [pAuxIngredientes]);

	//verificar os valores e mandar para o objeto que será criado
	const setProduct = () => {
		debugger;
		if (pNome.length <= 0) {
			return;
		}
		// if (pPreco <= 0) {
		// 	return;
		// }
		// if (pDescricao.length <= 0) {
		// 	return;
		// }
		// if (pIngredientes.length <= 0) {
		// 	return;
		// }
		// if (pRestrictions.length <= 0) {
		// 	return;
		// }
		// if (pType.length <= 0) {
		// 	return;
		// }

		setObjProduct({
			id: 2, //teste, pois no create não faz sentido ter o id, pois creio que seja um auto increment, mais na rquest pede então passei mocado.
			titulo: pNome,
			preco: 12, //pPreco,
			descricao: "teste", //pDescricao,
			imagem: "", //img,
			ingredientes: ["açucar", "sal"], //pIngredientes,
			unidadeDeVenda: "unidade", //teste, pois não entendi qual valor deve ser passado.
			categoria: 1, //pType,
			restricoes: [1, 2], //pRestrictions,
		});
	};

	//concatenar as restrictions conforme ir selecionando
	useEffect(() => {
		const newRestrictions: Restriction[] =
			restrictionProduct != undefined
				? restrictionProduct.filter(item => {
						return item.params.isActive ? { ...pRestrictions, pAuxRestriction } : "";
				  })
				: pRestrictions;
		setRestrictions(newRestrictions);
		setAuxFunction("auxFucntion");
	}, [auxFunction]);

	//limpar os campos quando abrir a aba ou fechar
	useEffect(() => {
		clear();
		clearObjEdit();
		clearRestriction();
	}, [active]);

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
						<CardExpansiveEstablishmentFoodOrganism titulo={pNome} />
					</div>
					<div className="main-register-product">
						<div className="container-main-register-product">
							<SDivider className="divider-register-product" />
							<Text className="text-categoria-register-product">
								<h1>Categoria</h1>
							</Text>
							<Box className="container-categoria-register-product">
								{typeProduct?.map(item => (
									<StyledButton
										onClick={() =>
											item.params.nome == undefined
												? setType("")
												: setType(item.params.nome)
										}
										height="fit-content"
										width="fit-content"
										buttonStyle="filled"
										style={{
											fontSize: "16px",
											maxHeight: "32px",
											width: "fit-content",
											maxWidth: "50px",
										}}
										key={item.params.id}
									>
										{item.params.nome}
									</StyledButton>
								))}
							</Box>
							<InputRegisterProduct
								label="Nome do Produto"
								value={pNome}
								updateValue={setNome}
								placeholder="Nome"
							/>
							<InputRegisterProduct
								label="Preço"
								value={pPreco}
								updateValue={setPreco}
								placeholder="valor"
							/>
							<InputRegisterProduct
								label="Ingredientes"
								value={pAuxIngredientes}
								updateValue={setAuxIngredientes}
								placeholder="sal, açucar"
							/>
							<InputRegisterProduct
								label="Descrição"
								value={pDescricao}
								updateValue={setDescricao}
								placeholder="Descrição"
							/>
							<div className="container-restricao-register-product">
								<CLabelAttention
									required={true}
									alert={false}
									htmlFor=""
								>
									Restrições:
								</CLabelAttention>
								<Box className="restricao-register-product">
									{restrictionProduct?.map((restriction, i) => (
										<Chips
											key={restriction.params.id + "item"}
											sizeChips="chips-md"
											onClick={() => {
												restriction.params.isActive = !restriction.params.isActive;
												setAuxRestriction(restriction);
												setAuxFunction("auxChips");
											}}
											isActive={restriction.params.isActive}
										>
											{restriction.params.restricao}
										</Chips>
									))}
								</Box>
							</div>
						</div>
					</div>
					<div className="footer-register-product">
						<Box className="container-footer-register-product">
							{pId != "" ? (
								<StyledButton
									className="btn-cancelar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
								>
									Remover
								</StyledButton>
							) : (
								<StyledButton
									className="btn-cancelar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={clear}
								>
									Limpar
								</StyledButton>
							)}
							{pId != "" ? (
								<StyledButton
									className="btn-salvar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
								>
									Editar
								</StyledButton>
							) : (
								<StyledButton
									className="btn-salvar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={setProduct}
								>
									Salvar
								</StyledButton>
							)}
						</Box>
					</div>
				</div>
			</ContainerRegisterProduct>
		</>
	);
}

export default RegisterProduct;
interface InputRegisterProductProps {
	label: string;
	value: any;
	updateValue(value: any): void;
	placeholder: string;
}

const InputRegisterProduct = ({
	label,
	value,
	updateValue,
	placeholder,
}: InputRegisterProductProps) => {
	return (
		<>
			<ul>
				<li>
					<span>
						{label}:<label>*</label>
					</span>
					<Input
						value={value}
						onChange={e => updateValue(e.currentTarget.value)}
						placeholder={placeholder}
					/>
				</li>
			</ul>
		</>
	);
};
