import SignIn from "@/pages/signIn";
import SignUpConsumer from "@/pages/signUp-consumer";
import SignUpEstablishment from "@/pages/signUp-establishment";
import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { SafeFoodProductGateway } from "../infra/gateway/safefood/SafeFoodProductGateway";
import { SafeFoodUserGateway } from "../infra/gateway/safefood/SafeFoodUserGateway";
import { SafeFoodConsumerGateway } from "../infra/gateway/safefood/SafeFoodConsumerGateway";
import { SafeFoodEstablishmentGateway } from "../infra/gateway/safefood/SafeFoodEstablishmentGateway";
import { ViaCepGateway } from "../infra/gateway/viacep/ViaCepGateway";
import { Cache } from "../domain/protocols/Cache";
export type ModalActive = "login" | "consumer" | "establishment" | null;

export type ModalHomeContextParams = {
	modal: ModalActive;
	setModal: Dispatch<SetStateAction<ModalActive>>;
};
export const ModalHomeConsumerContext = createContext<ModalHomeContextParams>(
	{} as ModalHomeContextParams
);

export const useModalHome = () => useContext(ModalHomeConsumerContext);

type ModalHomeProviderProps = {
	cache: Cache;
	productGateway: SafeFoodProductGateway;
	gateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
	establishmentGateway: SafeFoodEstablishmentGateway;
	viaCepGateway: ViaCepGateway;
} & PropsWithChildren;
export const ModalHomeProvider: FC<ModalHomeProviderProps> = ({ cache, consumerGateway, establishmentGateway, gateway, productGateway, viaCepGateway, ...props }) => {
	const [modal, setModal] = useState<ModalActive>(null);

	return (
		<ModalHomeConsumerContext.Provider
			value={{
				modal,
				setModal,
			}}
		>
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
					userGateway={gateway}
					cache={cache}
					viaCepGateway={viaCepGateway}
					gateway={consumerGateway}
				/>
			)}
			{modal === "establishment" && (
				<SignUpEstablishment
					userGateway={gateway}
					cache={cache}
					gateway={establishmentGateway}
					viaCepGateway={viaCepGateway}
				/>
			)}
			{props.children}
		</ModalHomeConsumerContext.Provider>
	);
};
