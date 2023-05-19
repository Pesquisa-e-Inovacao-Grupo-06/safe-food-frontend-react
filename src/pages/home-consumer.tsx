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
import { SafeFoodRestrictionModel } from "@/app/infra/gateway/safefood/models/SafeFoodRestriction";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
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
	const IDSAtivos = consumer.restricoes.map(i => i.id);
	const total = restrictions
		.filter(item => !IDSAtivos.includes(item.id))
		.map(item => SafeFoodRestrictionMapper.of(item));

	const [totalRestrictions, setTotalRestrictions] = useState<Restriction[]>(
		[...consumerRestrictions, ...total] ?? []
	);

	//TODO: ver com o grupo
	// console.log("Outros:", restrictions);

	const [product, setProduct] = useState<Product[]>([]);
	const [typeProduct, setTypeProduct] = useState<TypeProduct[]>([]);
	//TODO: TEMPLATE PRECISA RECEBER UMA LISTA DE RESTRIÇÕES PARA MONTAR OS CHECK'S
	console.log(
		"restrições da plataforma e do usuário:",
		totalRestrictions.map(item => item.params.restricao)
	);
	//TODO: TEMPLATE PRECISA RECEBER UMA LISTA DE CATEGORIAS PARA MONTAR OS CHECK'S
	console.log(
		"categoria dos produtos:",
		typeProduct.map(item => item.params.nome)
	);
	//TODO: TEMPLATE PRECISA RECEBER UMA LISTA DE TIPOS DE RESTRIÇÕES PARA MONTAR OS CHECK'S
	console.log(
		"tipo de restrições:",
		restrictions.map(item => item.tipoRestricao.tipoRestricao)
	);
	useEffect(() => {
		async function fetchProduct() {
			try {
				const resProduct = await productGateway.findAll();
				const resTypeProduct = await typeProductGateway.findAll();
				setProduct(resProduct.content.map(SafeFoodProductMapper.of));
				setTypeProduct(resTypeProduct.map(SafeFoodTypeProductMapper.of));
			} catch (error) {
				// Faça algo com o erro
			}
		}

		fetchProduct();
	}, []); // Array de dependências vazio para executar apenas uma vez

	console.log();
	return (
		<HomeConsumerTemplate
			products={product}
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
				},
				{
					titleDropDown: "Categoria do produto:",
					textSubMenuWithCheckBox: typeProduct
						.map(item => item.params.nome)
						.filter(text => text !== undefined)
						.map(text => text as string),
					activeCheckBox: true,
					alignSubText: "start",
					alignTitleText: false,
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
				},
			]}
		/>
	);
}

export default HomeConsumer;
