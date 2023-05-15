import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { SafeFoodProductModel } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { HomeTemplate } from "@/components/templates/home-template";
import { ReactNode, useEffect, useState } from "react";
import SignIn from "./signIn";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodEstablishmentGateway } from "@/app/infra/gateway/safefood/SafeFoodEstablishmentGateway";
import SignUpConsumer from "./signUp-consumer";
import { ViaCepGateway } from "@/app/infra/gateway/viacep/ViaCepGateway";
import SignUpEstablishment from "./signUp-establishment";
import { useModalHome } from "@/app/contexts/ModalProvider";

export type HomeProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
	gateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
	establishmentGateway: SafeFoodEstablishmentGateway;
	viaCepGateway: ViaCepGateway;
};

function Home({
	cache,
	productGateway,
	consumerGateway,
	establishmentGateway,
	gateway,
	viaCepGateway,
}: HomeProps) {
	const { modal } = useModalHome();

	const [nearbyProducts, setNearbyProducts] = useState<SafeFoodProductModel[]>(
		[]
	);
	const [listOfFavoriteProducts, setListOfFavoriteProducts] = useState<
		SafeFoodProductModel[]
	>([]);

	useEffect(() => {
		async function fetchProduct() {
			try {
				const res = (await productGateway.findAll()).content;
				console.log(res);
				setNearbyProducts(res);
				setListOfFavoriteProducts(res);
			} catch (error) {
				// faça algo com o erro
			}
		}

		fetchProduct();
	}, []);

	return (
		<div>
			{modal === "login" && (
				<SignIn
					cache={cache}
					consumerGateway={consumerGateway}
					establishmentGateway={establishmentGateway}
					gateway={gateway}
				/>
			)}
			{modal === "consumer" && (
				<SignUpConsumer
					cache={cache}
					viaCepGateway={viaCepGateway}
					gateway={consumerGateway}
				/>
			)}
			{modal === "establishment" && (
				<SignUpEstablishment
					cache={cache}
					gateway={establishmentGateway}
					viaCepGateway={viaCepGateway}
				/>
			)}
			<HomeTemplate
				nearbyFoodsCardItems={nearbyProducts.map(SafeFoodProductMapper.of)}
				listOfFavoriteProducts={listOfFavoriteProducts.map(
					SafeFoodProductMapper.of
				)}
			/>
		</div>
	);
}

export default Home;
