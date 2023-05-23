import { Product } from "@/app/domain/entities/Product";
import { Restriction } from "@/app/domain/entities/Restriction";
import { TypeProduct } from "@/app/domain/entities/TypeProduct";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodTypeProductGateway } from "@/app/infra/gateway/safefood/SafeFoodTypeProductGateway";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { SafeFoodRestrictionMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodRestrictionMapper";
import { SafeFoodTypeProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodTypeProductMapper";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";
import { SafeFoodProductFilterRequest } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
import { CheckBoxEntity } from "@/components/molecules/checkbox-chain";
import HomeConsumerTemplate from "@/components/templates/home-consumer-template";
import { useEffect, useState } from "react";

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
	const consumer: SafeFoodConsumerModel =
		cache.getItem("consumer") !== null
			? JSON.parse(cache.getItem("consumer")!)
			: {};

	const restrictions: SafeFoodRestrictionModel[] =
		cache.getItem("restrictions") !== null
			? JSON.parse(cache.getItem("restrictions")!)
			: {};

	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};

	const [userRestrictions, setUserRestrictions] = useState<
		SafeFoodRestrictionModel[]
	>(consumer.restricoes);

	const userTypeRestrictions = userRestrictions.map(
		restriction => restriction.tipoRestricao
	);
	const consumerRestrictions = consumer.restricoes.map(item =>
		SafeFoodRestrictionMapper.of(item, true)
	);
	const activeRestrictionIds = consumer.restricoes.map(i => i.id);
	const inactiveRestrictions = restrictions
		.filter(item => !activeRestrictionIds.includes(item.id))
		.map(item => SafeFoodRestrictionMapper.of(item));

	const [totalRestrictions, setTotalRestrictions] = useState<Restriction[]>(
		[...consumerRestrictions, ...inactiveRestrictions] ?? []
	);

	const [products, setProducts] = useState<Product[]>([]);
	const [typeProducts, setTypeProducts] = useState<TypeProduct[]>([]);
	const [filterProducts, setFilterProducts] =
		useState<SafeFoodProductFilterRequest>({});

	const [productsFilter, setProductsFilter] = useState<any>();
	useEffect(() => {
		async function fetchProducts() {
			try {
				const fetchedProducts = await productGateway.findAll();
				const fetchedTypeProducts = await typeProductGateway.findAll();
				setProducts(fetchedProducts.content.map(SafeFoodProductMapper.of));
				setTypeProducts(fetchedTypeProducts.map(SafeFoodTypeProductMapper.of));
				console.log("fetch" + JSON.stringify(fetchedProducts));
			} catch (error) {}
		}
		fetchProducts();
	}, []);

	const [checkedRestrictions, setCheckedRestrictions] = useState<string[]>([]);
	const [checkedTypeProducts, setCheckedTypeProducts] = useState<string[]>([]);
	const [checkedTypeRestrictions, setCheckedTypeRestrictions] = useState<
		string[]
	>([]);

	// ...

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

	const onClickApplication = async () => {
		try {
			const filterProducts = {
				ids_restricoes: checkedRestrictions,
				ids_categorias: checkedTypeProducts,
				ids_tipos_restricoes: checkedTypeRestrictions,
			};

			console.log("Filtro aplicado:", filterProducts);

			const fetchedProductsFilter = await productGateway.productFilter(
				filterProducts
			);
			setProductsFilter(fetchedProductsFilter);
			setProducts(fetchedProductsFilter.content.map(SafeFoodProductMapper.of));
			console.log("RESPOSTA DE FILTRO:", fetchedProductsFilter);
		} catch (error) {
			// Tratar erros
		}
	};

	const dropdownRestrictions = restrictions
		.map(item => ({ name: item.name, id: item.id }))
		.filter(item => item.name !== undefined)
		.map(item => ({ name: item.name as string, id: item.id }));

	const dropdownTypeProducts = typeProducts
		.map(item => ({ name: item.params.nome, id: item.params.id }))
		.filter(item => item.name !== undefined)
		.map(item => ({ name: item.name as string, id: item.id }));

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
		item => createCheckBoxEntity(item.name, item.id)
	);

	const checkboxListTypeProducts: CheckBoxEntity[] = dropdownTypeProducts.map(
		item => createCheckBoxEntity(item.name, item.id?.toString()!)
	);

	const checkboxListTypeRestrictions: CheckBoxEntity[] =
		dropdownTypeRestrictions.map(item =>
			createCheckBoxEntity(item.name, item.id)
		);

	return (
		<HomeConsumerTemplate
			products={products}
			dropDownList={[
				{
					titleDropDown: "Restrições:",
					textSubMenuWithCheckBox: totalRestrictions
						.map(item => item.params.restricao)
						.filter(text => text !== undefined)
						.map(text => text as string),
					activeCheckBox: true,
					alignSubText: "start",
					alignTitleText: false,
					checkList: checkboxListRestrictions,
					onCheckboxChainChange: handleCheckboxChainChangeRestrictions,
				},
				{
					titleDropDown: "Categoria do produto:",
					textSubMenuWithCheckBox: typeProducts
						.map(item => item.params.nome)
						.filter(text => text !== undefined)
						.map(text => text as string),
					activeCheckBox: true,
					alignSubText: "start",
					alignTitleText: false,
					checkList: checkboxListTypeProducts,
					onCheckboxChainChange: handleCheckboxChainChangeTypeProducts,
				},
				{
					titleDropDown: "Tipo de restrição:",
					textSubMenuWithCheckBox: restrictions
						.map(item => item.tipoRestricao.tipoRestricao)
						.filter(text => text !== undefined)
						.map(text => text as string),
					activeCheckBox: true,
					alignSubText: "start",
					alignTitleText: false,
					checkList: checkboxListTypeRestrictions,
					onCheckboxChainChange: handleCheckboxChainChangeTypeRestrictions,
				},
			]}
			onClickApplication={onClickApplication}
		/>
	);
}

export default HomeConsumer;
