import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodProductGateway } from "@/app/infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodProductMapper } from "@/app/infra/gateway/safefood/mappers/SafeFoodProductMapper";
import { SafeFoodProductModel } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";
import { HomeTemplate } from "@/components/templates/home-template";
import { useEffect, useState } from "react";
import SignIn from "./signIn";
import { SafeFoodUserGateway } from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodConsumerGateway } from "@/app/infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodEstablishmentGateway } from "@/app/infra/gateway/safefood/SafeFoodEstablishmentGateway";
import SignUpConsumer from "./signUp-consumer";
import { ViaCepGateway } from "@/app/infra/gateway/viacep/ViaCepGateway";
import SignUpEstablishment from "./signUp-establishment";
import { useModalHome } from "@/app/contexts/ModalProvider";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";

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
	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};

	const [nearbyProducts, setNearbyProducts] = useState<SafeFoodProductModel[]>(
		[]
	);
	const [listOfFavoriteProducts, setListOfFavoriteProducts] = useState<
		SafeFoodProductModel[]
	>([]);
	const [textFieldFood, setTextFieldFood] = useState("");
	const [textFieldLocation, setTextFieldLocation] = useState("");

	function handleChangeFood(value: any) {
		setTextFieldFood(value.target.value);
	}

	function handleChangeLocation(value: any) {
		setTextFieldLocation(value.target.value);
	}
	const [latitude, setLatitude] = useState<number | null>(null);
	const [longitude, setLongitude] = useState<number | null>(null);

	useEffect(() => {
		// Verifica se o navegador suporta a geolocalização
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					setLatitude(position.coords.latitude);
					setLongitude(position.coords.longitude);
				},
				error => {
					console.log("Erro ao obter localização:", error);
				}
			);

			// console.log(
			// 	"LATITUDE LONGITUDE" + JSON.stringify(navigator.geolocation),
			// 	latitude,
			// 	longitude
			// );
		} else {
			console.log("Geolocalização não suportada pelo navegador.");
		}
	}, []);
	useEffect(() => {
		async function fetchProduct() {
			try {
				const res = await productGateway.findAll();
				setNearbyProducts(res.content);
				setListOfFavoriteProducts(res.content);
				// console.log(res.content);
			} catch (error) {
				// faça algo com o erro
			}
		}
		fetchProduct();
	}, []);

	return (
		<HomeTemplate
			nearbyFoodsCardItems={nearbyProducts.map(SafeFoodProductMapper.of)}
			listOfFavoriteProducts={listOfFavoriteProducts.map(
				SafeFoodProductMapper.of
			)}
			textFieldFood={textFieldFood}
			textFieldLocation={textFieldLocation}
			handleChangeFood={handleChangeFood}
			handleChangeLocation={handleChangeLocation}
			onClickSearchLanding={() => {
				// console.log(textFieldLocation);
			}}
			user={user}
			cache={cache}
		/>
	);
}

export default Home;
