import { ContainerRegisterProduct, BtnRegisterProduct } from './styles';
import { AiOutlineRight } from 'react-icons/ai';
import { SDivider } from '../sidebar-establishment/styles';
import { StyledButton } from '@/components/atoms/button/styles';
import { Box } from '@/components/atoms/box';
import { CardExpansiveEstablishmentFoodOrganism } from '@/components/organisms/card-establishment-food/card-establishment-food-organism';
import { Text } from '@/components/atoms/text';
import { CLabelAttention } from '@/components/atoms/checkbox/styles';
import { Chips } from '@/components/atoms/chips/chips-atom';
import { Input } from '@/components/atoms/input';
import { Restriction } from '@/app/domain/entities/Restriction';
import { TypeProduct } from '@/app/domain/entities/TypeProduct';
import { SafeFoodCreateProductRequest } from '@/app/infra/gateway/safefood/models/SafeFoodProduct';
import { useState, useEffect, ReactElement } from 'react';
import { Product } from '@/app/domain/entities/Product';
import { SafeFoodUsuarioModel } from '@/app/infra/gateway/safefood/models/SafeFoodUser';
import { Alert, AlertType } from '@/components/atoms/alert';
import { InputIcon, InputIconProps } from '../input-icon';
import { spacing } from 'react-select/dist/declarations/src/theme';
import { useInputsValidator } from '@/app/contexts/InputValidatorsProvider';

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
	const [editId, setEditId] = useState<string>('');
	const [deleteProductId, setDeleteProductId] = useState<string>('');
	const [nome, setNome] = useState<string>('');
	const [preco, setPreco] = useState<number>(0);
	const [img, setImg] = useState<string>('');
	const [descricao, setDescricao] = useState<string>('');
	const [categoria, setCategoria] = useState<number>(0);
	const [auxCategoria, setAuxCategoria] = useState<string>('');
	const [ingredientes, setIngredientes] = useState<string[]>([]);
	const [auxIngredientes, setAuxIngredientes] = useState<string>('');
	const [restrictions, setRestrictions] = useState<number[]>([]);
	const [auxFunction, setAuxFunction] = useState<string>('');
	const [restrictionEdit, setRestrictionEdit] = useState<Restriction[]>(
		restrictionProduct || []
	);
	const [average, setAverage] = useState<number>();
	const [qtdComments, setQtdComments] = useState<number>();
	const [imageProfile, setImageProfile] = useState<File>();
	const [isVisibleAlert, setIsVisibleAlert] = useState(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>('success');
	const [textAlert, setTextAlert] = useState('Agradecemos por seu feedback!');

	//limpa os valores ao renderizar ao apertar o botão de adicionar e abrea a aba de regitro
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
			: '';
		console.log('OBJ IMAGE' + objProduct?.imagem);
		clear();
		clearRestriction();
		objProduct != undefined
			? renderListProduct != undefined
				? renderListProduct()
				: ''
			: '';
		clearObjEdit();
	}, [objProduct]);

	//update product e limpa as inputs
	useEffect(() => {
		editObjProduct != undefined && onClickUpdate != undefined
			? onClickUpdate(editId, editObjProduct)
			: '';
		clear();
		clearRestriction();
		editObjProduct != undefined
			? renderListProduct != undefined
				? renderListProduct()
				: ''
			: '';
		clearObjEdit();
	}, [editObjProduct]);

	//delete product e limpa as inputs
	useEffect(() => {
		deleteProductId != '' && onClickDelete != undefined
			? onClickDelete(deleteProductId)
			: '';
		clear();
		clearRestriction();
		deleteProductId != undefined
			? renderListProduct != undefined
				? renderListProduct()
				: ''
			: '';
		clearObjEdit();
	}, [deleteProductId]);

	//limpar todos os dados ao entrar ou reiniciar a página
	useEffect(() => {
		clear();
		clearRestriction();
		clearObjEdit();
	}, []);

	//ativa as restrições do produto que será editado
	const objEditRestrictions = () => {
		productEdit?.params.restricoes != undefined
			? productEdit?.params.restricoes.map(item => {
					var aux = item.restricao;
					restrictionEdit?.filter(item => {
						item.params.restricao == aux ? (item.params.isActive = true) : '';
					});
			  })
			: [];

		// productEdit?.params.restricoes != undefined
		// 	? productEdit.params.restricoes.forEach(restricaoAtiva => {
		// 			restricaoAtiva;
		// 			const index = restrictionEdit.findIndex(
		// 				item => item.params.id == restricaoAtiva.id
		// 			);
		// 			if (index > -1) {
		// 				restrictionEdit[index].params.isActive = true;
		// 				setRestrictionEdit(restrictionEdit);
		// 			}
		// 	  })
		// 	: [];
	};

	//concatena ingredientes para auto preencher a input de ingredietes do produto a ser editado
	useEffect(() => {
		const joinIngredientes = ingredientes
			.join(', ')
			.replace('[', '')
			.replace(']', '');
		setAuxIngredientes(joinIngredientes);
	}, [editId]);

	//limpa os values dos useState
	const clear = () => {
		setObjProduct(undefined);
		setEditId('');
		setDeleteProductId('');
		setNome('');
		setPreco(0);
		setImg('');
		setDescricao('');
		setCategoria(0);
		setIngredientes([]);
		setAuxIngredientes('');
		setRestrictions([]);
		setAuxCategoria('');
		setAuxFunction('');
		setImageProfile(undefined);
	};

	//limpas os valores da inpur do objeto que está sendo editado, porém não apaga o id, assim possibilitando editar
	const clearValuesObjEdit = () => {
		setObjProduct(undefined);
		setNome('');
		setPreco(0);
		setImg('');
		setDescricao('');
		setCategoria(0);
		setIngredientes([]);
		setAuxIngredientes('');
		setRestrictions([]);
		setAuxCategoria('');
		setAuxFunction('');
		setImageProfile(undefined);
	};

	//colocar todas restrições como inativadas
	const clearRestriction = () => {
		restrictionEdit?.map(item => {
			item.params.isActive = false;
		});
	};

	//limpar objEdit, após editar ou fechar a aba
	const clearObjEdit = () => {
		productEdit = undefined;
	};

	//assim que clicar no botão de editar ele auto preenche as inputs de criar produtos, para assim conseguir editar o mesmo
	useEffect(() => {
		clear();
		clearRestriction();
		setObjEdit();
		objEditRestrictions();
	}, [auxObjEdit]);

	//passar os dados de edit para os useState
	const setObjEdit = () => {
		setEditId(
			productEdit?.params.id != undefined ? productEdit?.params.id : ''
		);
		setNome(
			productEdit?.params.titulo != undefined ? productEdit?.params.titulo : ''
		);
		setPreco(
			productEdit?.params.preco != undefined ? productEdit?.params.preco : 0
		);
		setImg(
			productEdit?.params.imagem != undefined ? productEdit?.params.imagem : ''
		);
		setDescricao(
			productEdit?.params.descricao != undefined
				? productEdit?.params.descricao
				: ''
		);
		setCategoria(
			productEdit?.params.categoria?.id != undefined
				? productEdit.params.categoria.id
				: 0
		);
		setAuxCategoria(
			productEdit?.params.categoria.nome != undefined
				? productEdit?.params.categoria.nome
				: ''
		);
		setIngredientes(
			productEdit?.params.ingredientes != undefined
				? productEdit?.params.ingredientes
				: []
		);
		setAverage(
			productEdit?.params.average != undefined ? productEdit.params.average : 0
		);
		setQtdComments(
			productEdit?.params?.avaliacoes?.map(item => item.comentario).length !==
				undefined
				? productEdit?.params.avaliacoes.map(item => item.comentario).length
				: undefined
		);
	};

	//manipulação dos ingredientes, para inserir cada um
	useEffect(() => {
		var ingredientesSplit = auxIngredientes.split(',');
		var ingredientesAdapter = ingredientesSplit.map(item => {
			return item.trim();
		});
		setIngredientes(ingredientesAdapter);
	}, [auxIngredientes]);

	//verificar os valores e mandar para o objeto que será criado
	const setProduct = (method: string) => {
		if (imageProfile) {
			setTypeAlert('warning');
			setTextAlert('Selecione uma imagem de perfil');
			setIsVisibleAlert(true);
			return;
		}
		if (user?.id === undefined || user.id === 0) {
			setTypeAlert('warning');
			setTextAlert('ID do usuário não definido');
			setIsVisibleAlert(true);
			return;
		}
		if (nome.length <= 0) {
			setTypeAlert('warning');
			setTextAlert('Nome não preenchido');
			setIsVisibleAlert(true);
			return;
		}
		if (preco <= 0) {
			setTypeAlert('warning');
			setTextAlert('Preço inválido');
			setIsVisibleAlert(true);
			return;
		}
		if (descricao.length <= 0) {
			setTypeAlert('warning');
			setTextAlert('Descrição não preenchida');
			setIsVisibleAlert(true);
			return;
		}
		if (ingredientes.length <= 0) {
			setTypeAlert('warning');
			setTextAlert('Ingredientes não preenchidos');
			setIsVisibleAlert(true);
			return;
		}
		if (restrictions.length <= 0) {
			setTypeAlert('warning');
			setTextAlert('Restrições não preenchidas');
			setIsVisibleAlert(true);
			return;
		}
		if (categoria <= 0) {
			setTypeAlert('warning');
			setTextAlert('Categoria não selecionada');
			setIsVisibleAlert(true);
			return;
		}

		if (method == 'create') {
			setObjProduct({
				id: user?.id,
				titulo: nome,
				preco: preco,
				descricao: descricao,
				imagem: imageProfile,
				ingredientes: ingredientes,
				unidadeDeVenda: 'unidade',
				categoria: categoria,
				restricoes: restrictions,
			});
		}

		if (method == 'update') {
			if (editId.length <= 0) {
				return;
			}
			setEditObjProduct({
				id: user?.id,
				titulo: nome,
				preco: preco,
				descricao: descricao,
				imagem: imageProfile,
				ingredientes: ingredientes,
				unidadeDeVenda: 'unidade',
				categoria: categoria,
				restricoes: restrictions,
			});
		}

		if (method == 'delete') {
			if (editId.length <= 0) {
				return;
			}
			setDeleteProductId(editId);
		}
	};

	//concatenar os id das restrictions conforme ir selecionando
	useEffect(() => {
		const newRestricitons: number[] = [];
		restrictionEdit != undefined
			? restrictionEdit.filter(item => {
					item.params.isActive ? newRestricitons.push(item.params.id) : '';
			  })
			: restrictionEdit;
		setRestrictions(newRestricitons);
		setAuxFunction('auxFucntion');
	}, [auxFunction]);

	//limpar os campos quando abrir ou fechar a aba pelo o botão de seta da aba
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
							toggle != undefined ? toggle() : '';
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
							fileChange={file => {
								console.log(file);
								setImageProfile(file);
							}}
							average={average ?? 0}
							qtdComentario={qtdComments ?? 0}
						/>
					</div>
					<div className="main-register-product">
						{isVisibleAlert ? (
							<Alert type={typeAlert}>{textAlert}</Alert>
						) : (
							<></>
						)}
						<div className="container-main-register-product">
							<SDivider className="divider-register-product" />
							<Text className="text-categoria-register-product">
								<h1>Categoria</h1>
							</Text>
							<Box className="container-categoria-register-product">
								{typeProduct?.map(item => (
									<StyledButton
										onClick={() =>
											item.id == undefined
												? setCategoria(0)
												: (setCategoria(item.id),
												  setAuxCategoria(
														item.nome != undefined ? item.nome : ''
												  ))
										}
										focus={categoria == item.id}
										height="fit-content"
										width="fit-content"
										buttonStyle="filled"
										style={{
											fontSize: '16px',
											maxHeight: '32px',
											width: 'fit-content',
											maxWidth: '50px',
										}}
										key={item.id}
									>
										{item.nome}
									</StyledButton>
								))}
							</Box>
							<InputRegisterProduct
								label="Nome do Produto"
								value={nome}
								updateValue={setNome}
								placeholder="Ex: Sorvete de morango"
							/>
							<InputRegisterProduct
								label="Preço"
								value={'' + preco}
								updateValue={val => {
									const regex = /^[0-9]+(\.[0-9]{2})?$/;
									if (regex.test(val) || val.length == 0) {
										setPreco(Number(val));
									}
								}}
								inputMode="decimal"
								placeholder="Ex: R$ 29,99"
							/>
							<InputRegisterProduct
								label="Ingredientes"
								value={auxIngredientes}
								renderIcon={() => (
									<Box
										margin="4px"
										padding="5px"
										width="24px"
										height="24px"
										display="flex"
										justify="center"
										alignItems="center"
										style={{
											cursor: 'pointer',
											borderRadius: '50%',
											fontSize: 20,
											fontWeight: 'bold',
											border: '1px solid #bbb',
										}}
										background="#ddd"
										title='Separe os ingredientes por ","'
									>
										?
									</Box>
								)}
								updateValue={setAuxIngredientes}
								placeholder="Ex: Tomate, alface, queijo"
							/>
							<InputRegisterProduct
								label="Descrição"
								value={descricao}
								updateValue={setDescricao}
								placeholder="Ex: Produto de alta qualidade, feito com materiais duráveis"
							/>

							<div className="container-restricao-register-product">
								Restrições:
								<CLabelAttention
									required={true}
									alert={true}
									htmlFor=""
								>
									Restrições:
								</CLabelAttention>
								<Box className="restricao-register-product">
									{restrictionEdit?.map((restriction, i) => {
										return (
											<Chips
												key={restriction.params.id + 'item'}
												sizeChips="chips-md"
												onClick={() => {
													restriction.params.isActive =
														!restriction.params.isActive;
													setAuxFunction('auxChips');
												}}
												isActive={restriction.params.isActive}
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
							{editId != '' ? (
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
							{editId != '' ? (
								<StyledButton
									className="btn-cancelar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={() => setProduct('delete')}
								>
									Remover
								</StyledButton>
							) : (
								''
							)}
							{editId != '' ? (
								<StyledButton
									className="btn-salvar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={() => setProduct('update')}
								>
									Editar
								</StyledButton>
							) : (
								<StyledButton
									className="btn-salvar-footer-register-product"
									height="fit-content"
									width="fit-content"
									buttonStyle="filled"
									onClick={() => setProduct('create')}
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
type InputRegisterProductProps = {
	label: string;
	value: any;
	updateValue(value: string): void;
	placeholder: string;
	renderIcon?(): ReactElement;
} & InputIconProps;

const InputRegisterProduct = ({
	label,
	value,
	updateValue,
	placeholder,
	renderIcon = () => <></>,
}: InputRegisterProductProps) => {
	return (
		<>
			<ul>
				<li>
					<span>
						{label}:<label>*</label>
					</span>
					{renderIcon ? (
						<InputIcon
							renderEndIcon={renderIcon}
							value={value}
							onChange={e => updateValue(e.currentTarget.value)}
							placeholder={placeholder}
						/>
					) : (
						<InputIcon
							value={value}
							onChange={e => updateValue(e.currentTarget.value)}
							placeholder={placeholder}
						/>
					)}
				</li>
			</ul>
		</>
	);
};
