import { Product } from '@/app/domain/entities/Product';
import { Restriction } from '@/app/domain/entities/Restriction';
import { TypeProduct } from '@/app/domain/entities/TypeProduct';
import { Cache } from '@/app/domain/protocols/Cache';
import { SafeFoodProductGateway } from '@/app/infra/gateway/safefood/SafeFoodProductGateway';
import { SafeFoodTypeProductGateway } from '@/app/infra/gateway/safefood/SafeFoodTypeProductGateway';
import { SafeFoodProductMapper } from '@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper';
import { SafeFoodRestrictionMapper } from '@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper';
import { SafeFoodConsumerModel } from '@/app/infra/gateway/safefood/models/SafeFoodConsumer';
import {
	directionSelect,
	OrderSelect,
	SafeFoodProductFilterRequest,
	SafeFoodProductLocationRequest,
	SafeFoodProductsResponse,
} from '@/app/infra/gateway/safefood/models/SafeFoodProduct';
import { SafeFoodRestrictionModel } from '@/app/infra/gateway/safefood/models/SafeFoodRestriction';
import { CheckBoxEntity } from '@/components/molecules/checkbox-chain';
import HomeConsumerTemplate from '@/components/templates/home-consumer/home-consumer-template';
import { useEffect, useState } from 'react';
import { Option } from '@/components/atoms/select';
import { removeDescSuffix } from '@/app/util/convertions/remove-desc-suffix';
import { useParams } from 'react-router-dom';

type HomeConsumerProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
	typeProductGateway: SafeFoodTypeProductGateway;
};

function HomeConsumer({
	cache,
	productGateway,
	typeProductGateway,
}: HomeConsumerProps) {
	const { idEstablishment, idProduct, cep, numero, distanceRadio } =
		useParams();

	const consumer: SafeFoodConsumerModel =
		cache.getItem('consumer') !== null
			? JSON.parse(cache.getItem('consumer')!)
			: {};

	const restrictions: SafeFoodRestrictionModel[] =
		cache.getItem('restrictions') !== null
			? JSON.parse(cache.getItem('restrictions')!)
			: {};

	const typeProductCache: TypeProduct[] =
		cache.getItem('typeProducts') !== null
			? (JSON.parse(cache.getItem('typeProducts')!) as TypeProduct[])
			: [];

	const [products, setProducts] = useState<Product[]>([]);
	const [productsFilter, setProductsFilter] = useState<any>();
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [totalItens, setTotalItens] = useState<number>(0);
	//	todo: verifica esse useState e seu componente de paginação, não consigo atualizaar ele lá em baixo no campo de totalPage, mesmo que eu de um set aqui no total, a paginação não atualiza o seu < 1 2 3>
	const [totalPage, setTotalPage] = useState<number>(0);
	const [initialize, setInitializa] = useState<boolean>(false);
	const [selectOrder, setSelectOrder] = useState<OrderSelect>();
	const [selectItems, setSelectItems] = useState<number>(6);
	const [direction, setDirection] = useState<directionSelect>();
	const [typeProducts, setTypeProducts] = useState<TypeProduct[]>([]);

	const handlePageChange = async (pageNumberHandle: number) => {
		if (initialize == false) {
			return;
		}
		if (pageNumberHandle === pageNumber) {
			return;
		}
		setPageNumber(pageNumberHandle);

		try {
			if (cep) {
				const fetchedProducts = await productGateway.productsCloser({
					page: pageNumberHandle ?? 1,
					itensPorpagina: selectItems ?? 6,
					sort: 'id',
					direction: 'asc',
					cep: cep,
					numero: numero,
					distanceRadio: 1,
				});
				setProducts(fetchedProducts.content.map(SafeFoodProductMapper.of));
				setTotalPage(fetchedProducts.totalPages);
			} else if (idEstablishment) {
				const fetchedProducts = await productGateway.productFilter({
					ids_categorias: [],
					ids_restricoes: [],
					ids_tipos_restricao: [],
					cep: '09572660',
					direction: direction,
					distanceRadio: 10,
					itensPorPagina: selectItems ?? 6,
					numero: undefined,
					page: pageNumberHandle ?? 1, // Utilize o valor atual do pageNumber
					pesquisa: undefined,
					select: selectOrder ?? 'TODOS',
					id_estabelecimento: parseInt(idEstablishment),
				});
				setProducts(fetchedProducts.content.map(SafeFoodProductMapper.of));
				setTotalPage(fetchedProducts.totalPages);
			} else {
				const fetchedProducts = await productGateway.productFilter({
					ids_categorias: [],
					ids_restricoes: [],
					ids_tipos_restricao: [],
					cep: '09572660',
					direction: direction,
					distanceRadio: 10,
					itensPorPagina: selectItems ?? 6,
					numero: undefined,
					page: pageNumberHandle ?? 1, // Utilize o valor atual do pageNumber
					pesquisa: undefined,
					select: selectOrder ?? 'TODOS',
				});
				setProducts(fetchedProducts.content.map(SafeFoodProductMapper.of));
				setTotalPage(fetchedProducts.totalPages);
			}
		} catch (error) { }
	};

	const onClickApplication = async () => {
		try {
			if (cep) {
				const filterProductsByLocation: SafeFoodProductLocationRequest = {
					page: 1,
					itensPorpagina: 10,
					sort: 'id',
					direction: 'asc',
					cep: cep,
					numero: numero,
					distanceRadio: 10,
				};
				// console.log('locazação', filterProductsByLocation);
				const fetchedProductsFilter: SafeFoodProductsResponse =
					await productGateway.productsCloser(filterProductsByLocation);
				// console.log(filterProductsByLocation);
				if (fetchedProductsFilter.size === 0) {
					setProducts([]);
					setInitializa(true);
					return;
				}

				setProductsFilter(fetchedProductsFilter);
				setProducts(
					fetchedProductsFilter.content.map(SafeFoodProductMapper.of)
				);
				setTotalPage(fetchedProductsFilter.totalPages);
				setTotalItens(fetchedProductsFilter.numberOfElements);
				setInitializa(true);
			} else if (idEstablishment) {
				const filterProductsByIdEstablishment: SafeFoodProductFilterRequest = {
					ids_restricoes: checkedRestrictions,
					ids_categorias: checkedTypeProducts,
					ids_tipos_restricao: checkedTypeRestrictions,
					id_estabelecimento: parseInt(idEstablishment),
					page: 1,
					direction: direction,
					itensPorPagina: selectItems,
					select: selectOrder ?? 'TODOS',
				};

				const fetchedProductsFilter: SafeFoodProductsResponse =
					await productGateway.productFilter(filterProductsByIdEstablishment);
				// console.log(fetchedProductsFilter);

				if (fetchedProductsFilter.size === 0) {
					setProducts([]);
					setInitializa(true);
					return;
				}

				setProductsFilter(fetchedProductsFilter);
				setProducts(
					fetchedProductsFilter.content.map(SafeFoodProductMapper.of)
				);
				setTotalPage(fetchedProductsFilter.totalPages);
				setTotalItens(fetchedProductsFilter.numberOfElements);
				setInitializa(true);
			} else {
				const filterProducts: SafeFoodProductFilterRequest = {
					ids_restricoes: checkedRestrictions,
					ids_categorias: checkedTypeProducts,
					ids_tipos_restricao: checkedTypeRestrictions,
					page: 1,
					direction: direction,
					itensPorPagina: selectItems,
					select: selectOrder ?? 'TODOS',
				};

				const fetchedProductsFilter: SafeFoodProductsResponse =
					await productGateway.productFilter(filterProducts);
				// console.log(fetchedProductsFilter);

				if (fetchedProductsFilter.size === 0) {
					setProducts([]);
					setInitializa(true);
					return;
				}

				setProductsFilter(fetchedProductsFilter);
				setProducts(
					fetchedProductsFilter.content.map(SafeFoodProductMapper.of)
				);
				setTotalPage(fetchedProductsFilter.totalPages);
				setTotalItens(fetchedProductsFilter.numberOfElements);
				setInitializa(true);
			}
		} catch (error) {
			setProductsFilter([]);
			setProducts([]);
			setTotalPage(1);
			setTotalItens(0);
			setInitializa(true);
		}
	};

	useEffect(() => {
		onClickApplication();
	}, [cep]);

	useEffect(() => {
		if (initialize == false) {
			setTypeProducts(typeProductCache);
			onClickApplication();
		}
	}, [pageNumber]);

	useEffect(() => { }, [typeProductCache]);
	const [checkedRestrictions, setCheckedRestrictions] = useState<string[]>([]);
	const [checkedTypeProducts, setCheckedTypeProducts] = useState<string[]>([]);
	const [checkedTypeRestrictions, setCheckedTypeRestrictions] = useState<
		string[]
	>([]);

	const handleCheckboxChainChangeRestrictions = (
		checkedCheckboxes: string[]
	) => {
		setCheckedRestrictions(checkedCheckboxes);
	};

	const handleCheckboxChainChangeTypeProducts = (
		checkedCheckboxes: string[]
	) => {
		setCheckedTypeProducts(checkedCheckboxes);
	};

	const handleCheckboxChainChangeTypeRestrictions = (
		checkedCheckboxes: string[]
	) => {
		setCheckedTypeRestrictions(checkedCheckboxes);
	};

	const dropdownRestrictions = restrictions
		.map(item => ({ name: item.restricao, id: item.id }))
		.filter(item => item.name !== undefined)
		.map(item => ({ name: item.name as string, id: item.id }));

	const dropdownTypeProducts = typeProducts.map(item => ({
		name: item.nome,
		id: item.id,
	}));

	const dropdownTypeRestrictions = restrictions
		.map(item => ({
			name: item.tipoRestricao.tipoRestricao,
			id: item.tipoRestricao.id,
		}))
		.filter(item => item.name !== undefined)
		.map(item => ({ name: item.name as string, id: item.id }));

	function createCheckBoxEntity(
		name: string,
		id: number | string
	): CheckBoxEntity {
		return {
			params: {
				value: name,
				id: id.toString(), // Converter o id para string
				key: id.toString(),
			},
		};
	}

	const checkboxListRestrictions: CheckBoxEntity[] = dropdownRestrictions.map(
		item => {
			return createCheckBoxEntity(item.name, item.id);
		}
	);

	const checkboxListTypeProducts: CheckBoxEntity[] = dropdownTypeProducts.map(
		item => {
			return createCheckBoxEntity(item.name, item.id!);
		}
	);

	const checkboxListTypeRestrictions: CheckBoxEntity[] =
		dropdownTypeRestrictions.map(item =>
			createCheckBoxEntity(item.name, item.id)
		);
	const handleItemsChange = (value: Option) => {
		const res = value as Option;
		setSelectItems(parseInt(res.value));
	};

	const handleOrderChange = (value: Option) => {
		setDirection(value.direction);
		const order = removeDescSuffix(value.value);
		setSelectOrder(order as OrderSelect);
	};

	useEffect(() => { }, [selectItems]);

	useEffect(() => { }, [selectOrder]);

	if (totalPage > 0) {
		return (
			<HomeConsumerTemplate
				products={products}
				dropDownList={[
					{
						titleDropDown: 'Restrições:',
						textSubMenuWithCheckBox: restrictions.map(item => item.restricao),
						activeCheckBox: true,
						alignSubText: 'start',
						alignTitleText: false,
						checkList: checkboxListRestrictions,
						onCheckboxChainChange: handleCheckboxChainChangeRestrictions,
					},
					{
						titleDropDown: 'Categoria do produto:',
						textSubMenuWithCheckBox: typeProducts
							.map(item => item.nome)
							.filter(text => text !== undefined)
							.map(text => text as string),
						activeCheckBox: true,
						alignSubText: 'start',
						alignTitleText: false,
						checkList: checkboxListTypeProducts,
						onCheckboxChainChange: handleCheckboxChainChangeTypeProducts,
					},
					{
						titleDropDown: 'Tipo de restrição:',
						textSubMenuWithCheckBox: Array.from(
							new Set(
								restrictions.map(item => item.tipoRestricao.tipoRestricao)
							)
						).filter(text => text != undefined),
						activeCheckBox: true,
						alignSubText: 'start',
						alignTitleText: false,
						checkList: checkboxListTypeRestrictions,
						onCheckboxChainChange: handleCheckboxChainChangeTypeRestrictions,
					},
				]}
				onClickApplication={onClickApplication}
				cache={cache}
				totalElements={totalItens}
				onPageChange={handlePageChange}
				totalPagesProductFilter={totalPage}
				changeOrder={handleOrderChange}
				changeItens={handleItemsChange}
			/>
		);
	} else return null;
}

export default HomeConsumer;
