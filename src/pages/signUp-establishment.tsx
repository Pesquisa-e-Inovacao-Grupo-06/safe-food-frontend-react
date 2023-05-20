import { useModalHome } from "@/app/contexts/ModalProvider";
import { SignupEstablishmentProvider } from "@/app/contexts/SignupEstablishmentProvider";
import { Cache } from "@/app/domain/protocols/Cache";
import { SafeFoodEstablishmentGateway } from "@/app/infra/gateway/safefood/SafeFoodEstablishmentGateway";
import { SafeFoodCreateEstablishmentRequest } from "@/app/infra/gateway/safefood/models/SafeFoodEstablishment";
import { ViaCepGateway } from "@/app/infra/gateway/viacep/ViaCepGateway";
import { SignUpEstablishmentTemplate } from "@/components/organisms/signup-establishment";
import { useState } from "react";

function SignUpEstablishment({
	gateway,
	viaCepGateway,
}: {
	cache: Cache;
	gateway: SafeFoodEstablishmentGateway;
	viaCepGateway: ViaCepGateway;
}) {
	const clickToCreateEstablishment = async (
		data: SafeFoodCreateEstablishmentRequest
	) => {
		const res = await gateway.create(data);
	};
	const { modal, setModal } = useModalHome();
	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

	return (
		<SignupEstablishmentProvider>
			<SignUpEstablishmentTemplate
				isModalVisible={modal === "establishment"}
				toggleModal={() => {
					setIsVisibleModal(!isVisibleModal);
				}}
				findAddress={viaCepGateway}
				onClickCreate={clickToCreateEstablishment}
			/>
		</SignupEstablishmentProvider>
	);
}

export default SignUpEstablishment;
