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
	onClickUpdate?(id: string, data: SafeFoodCreateProductRequest): void;
	onClickDelete?(id: string): void;
	productEdit?: Product;
	user?: SafeFoodUsuarioModel;
	btnAdd?: boolean;
	renderListProduct?: () => void;
	auxObjEdit?: boolean;
};

function RegisterProduct({
	active,
	toggle,
	activeRegisterProduct,
	restrictionProduct,
	typeProduct,
	onClickCreate,
	onClickUpdate,
	onClickDelete,
	productEdit,
	user,
	btnAdd,
	renderListProduct,
	auxObjEdit,
}: Props) {
	const [objProduct, setObjProduct] = useState<SafeFoodCreateProductRequest>();
	const [editObjProduct, setEditObjProduct] =
		useState<SafeFoodCreateProductRequest>();
	const [editId, setEditId] = useState<string>("");
	const [deleteProductId, setDeleteProductId] = useState<string>("");
	const [nome, setNome] = useState<string>("");
	const [preco, setPreco] = useState<number>(0);
	const [img, setImg] = useState<string>("");
	const [descricao, setDescricao] = useState<string>("");
	const [categoria, setCategoria] = useState<number>(0);
	const [auxCategoria, setAuxCategoria] = useState<string>("");
	const [ingredientes, setIngredientes] = useState<string[]>([]);
	const [auxIngredientes, setAuxIngredientes] = useState<string>("");
	const [restrictions, setRestrictions] = useState<number[]>([]);
	const [auxRestriction, setAuxRestriction] = useState<number>();
	const [auxFunction, setAuxFunction] = useState<string>();
	const [restrictionEdit, setRestrictionEdit] = useState<Restriction[]>(
		restrictionProduct || []
	);

	useEffect(() => {
		clear();
		clearRestriction();
		clearObjEdit();
		clearValuesObjEdit();
	}, [btnAdd]);

	//create product e limpa as inputs
	useEffect(() => {
		objProduct != undefined && onClickCreate != undefined
			? onClickCreate(objProduct)
			: "";
		clear();
		clearRestriction();
		clearObjEdit();
		renderListProduct != undefined ? renderListProduct() : "";
	}, [objProduct]);

	//update product e limpa as inputs
	useEffect(() => {
		editObjProduct != undefined && onClickUpdate != undefined
			? onClickUpdate(editId, editObjProduct)
			: "";
		clear();
		clearRestriction();
		clearObjEdit();
		renderListProduct != undefined ? renderListProduct() : "";
	}, [editObjProduct]);

	//delete product e limpa as inputs
	useEffect(() => {
		deleteProductId != "" && onClickDelete != undefined
			? onClickDelete(deleteProductId)
			: "";
		clear();
		clearRestriction();
		clearObjEdit();
		renderListProduct != undefined ? renderListProduct() : "";
	}, [deleteProductId]);

	//limpar todos os dados ao entrar ou reiniciar a página
	useEffect(() => {
		clear();
		clearRestriction();
		clearObjEdit();
	}, []);

	//ativa as restrições do produto que será editado
	const objEditRestrictions = () => {
		if (productEdit?.params.restricoes != undefined) {
			productEdit.params.restricoes.forEach(restricaoAtiva => {
				restricaoAtiva;
				const index = restrictionEdit.findIndex(
					item => item.params.id == restricaoAtiva.id
				);
				if (index > -1) {
					restrictionEdit[index].params.isActive = true;
					setRestrictionEdit(restrictionEdit);
				}
			});
		}
		// productEdit?.params.restricoes != undefined
		// 	? productEdit?.params.restricoes.map(item => {
		// 			var aux = item.restricao;
		// 			restrictionProduct?.filter(item => {
		// 				item.params.restricao == aux ? (item.params.isActive = true) : "";
		// 			});
		// 	  })
		// 	: [];
	};

	//concatena ingredientes para auto preencher a input de ingredietes do produto a ser editado
	useEffect(() => {
		const joinIngredientes = ingredientes
			.join(", ")
			.replace("[", "")
			.replace("]", "");
		setAuxIngredientes(joinIngredientes);
	}, [editId]);

	//limpa os values dos useState
	const clear = () => {
		setObjProduct(undefined);
		setEditId("");
		setDeleteProductId("");
		setNome("");
		setPreco(0);
		setImg("");
		setDescricao("");
		setCategoria(0);
		setIngredientes([]);
		setAuxIngredientes("");
		setRestrictions([]);
		setAuxRestriction(undefined);
		setAuxFunction("");
		setAuxCategoria("");
	};

	const clearValuesObjEdit = () => {
		setObjProduct(undefined);
		setNome("");
		setPreco(0);
		setImg("");
		setDescricao("");
		setCategoria(0);
		setIngredientes([]);
		setAuxIngredientes("");
		setRestrictions([]);
		setAuxRestriction(undefined);
		setAuxFunction("");
		setAuxCategoria("");
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

	//assim que clicar no botão de editar ele auto preenche as inputs de criar produtos, para assim conseguir editar o mesmo
	useEffect(() => {
		clear();
		clearRestriction();
		objEditRestrictions();
		setObjEdit();
	}, [auxObjEdit]);

	//passar os dados de edit para os useState
	const setObjEdit = () => {
		setEditId(productEdit?.params.id != undefined ? productEdit?.params.id : "");
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
		setCategoria(
			productEdit?.params.categoria?.id != undefined
				? parseInt(productEdit?.params.categoria.id)
				: 0
		);
		setAuxCategoria(
			productEdit?.params.categoria.nome != undefined
				? productEdit?.params.categoria.nome
				: ""
		);
		setIngredientes(
			productEdit?.params.ingredientes != undefined
				? productEdit?.params.ingredientes
				: []
		);
	};

	//manipulação dos ingredientes, para inserir cada um
	useEffect(() => {
		var ingredientesSplit = auxIngredientes.split(",");
		var ingredientesAdapter = ingredientesSplit.map(item => {
			return item.trim();
		});
		setIngredientes(ingredientesAdapter);
	}, [auxIngredientes]);

	//verificar os valores e mandar para o objeto que será criado
	const setProduct = (method: string) => {
		if (user?.id == undefined || user.id == 0) {
			return;
		}
		if (nome.length <= 0) {
			return;
		}
		if (preco <= 0) {
			return;
		}
		if (descricao.length <= 0) {
			return;
		}
		if (ingredientes.length <= 0) {
			return;
		}
		if (restrictions.length <= 0) {
			return;
		}
		if (categoria <= 0) {
			return;
		}

		if (method == "create") {
			setObjProduct({
				id: user?.id,
				titulo: nome,
				preco: preco,
				descricao: descricao,
				imagem: "",
				ingredientes: ingredientes,
				unidadeDeVenda: "unidade",
				categoria: categoria,
				restricoes: restrictions,
			});
		}

		if (method == "update") {
			if (editId.length <= 0) {
				return;
			}
			setEditObjProduct({
				id: user?.id,
				titulo: nome,
				preco: preco,
				descricao: descricao,
				imagem: "",
				ingredientes: ingredientes,
				unidadeDeVenda: "unidade",
				categoria: categoria,
				restricoes: restrictions,
			});
		}

		if (method == "delete") {
			if (editId.length <= 0) {
				return;
			}
			setDeleteProductId(editId);
		}
	};

	//concatenar os id das restrictions conforme ir selecionando
	useEffect(() => {
		const newRestricitons: number[] = [];
		restrictionProduct != undefined
			? restrictionProduct.filter(item => {
					item.params.isActive ? newRestricitons.push(item.params.id) : "";
			  })
			: restrictions;
		setRestrictions(newRestricitons);
		setAuxFunction("auxFucntion");
	}, [auxFunction]);

	//limpar os campos quando abrir a aba ou fechar
	const clearOpenModal = () => {
		clear();
		clearObjEdit();
		clearRestriction();
	};

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
						onClick={() => {
							toggle != undefined ? toggle() : "";
							clearOpenModal();
						}}
					>
						<AiOutlineRight />
					</BtnRegisterProduct>
				</>
				<div className="container-info-register-product">
					<div className="header-register-product">
						<CardExpansiveEstablishmentFoodOrganism
							titulo={nome}
							categoria={auxCategoria}
						/>
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
											item.params.id == undefined
												? setCategoria(0)
												: (setCategoria(item.params.id),
												  setAuxCategoria(
														item.params.nome != undefined ? item.params.nome : ""
												  ))
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
								value={nome}
								updateValue={setNome}
								placeholder="Nome"
							/>
							<InputRegisterProduct
								label="Preço"
								value={preco}
								updateValue={setPreco}
								placeholder="valor"
							/>
							<InputRegisterProduct
								label="Ingredientes"
								value={auxIngredientes}
								updateValue={setAuxIngredientes}
								placeholder="sal, açucar"
							/>
							<InputRegisterProduct
								label="Descrição"
								value={descricao}
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
									{restrictionEdit?.map((restriction, i) => {
										// debugger;
										return (
											<Chips
												key={restriction.params.id + "item"}
												sizeChips="chips-md"
												onClick={() => {
													setAuxRestriction(restriction.params.id);
													setAuxFunction("auxChips");
												}}
												isActive={restriction.params.isActive ? true : false}
											>
												{restriction.params.restricao}
											</Chips>
										);
									})}
								</Box>
							</div>
						</div>
					</div>
					<div className="footer-register-product">
						<Box className="container-footer-register-product">
							{editId != "" ? (
								<StyledButton
									className="btn-cancelar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={clearValuesObjEdit}
								>
									Limpar
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
							{editId != "" ? (
								<StyledButton
									className="btn-cancelar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={() => setProduct("delete")}
								>
									Remover
								</StyledButton>
							) : (
								""
							)}
							{editId != "" ? (
								<StyledButton
									className="btn-salvar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={() => setProduct("update")}
								>
									Editar
								</StyledButton>
							) : (
								<StyledButton
									className="btn-salvar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={() => setProduct("create")}
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
