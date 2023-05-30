import {SafeFoodUserGateway} from "@/app/infra/gateway/safefood/SafeFoodUserGateway";
import {SafeFoodResponse} from "@/app/infra/gateway/safefood/models/SafeFoodResponse";
import Header from "@/components/molecules/header";
import {Step1ForgetPassword} from "@/components/organisms/banner-forget-password/step-1";
import {Step2ForgetPassword} from "@/components/organisms/banner-forget-password/step-2";
import {Step3ForgetPassword} from "@/components/organisms/banner-forget-password/step-3";
import {BodyTemplate} from "@/components/templates/body-template";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

type ForgetPasswordProps={
	userGateway: SafeFoodUserGateway;
};
export type ForgetPage="email"|"change"|"finished";
const ForgetPassword: React.FC<ForgetPasswordProps>=({
	userGateway
}) => {
	const location=useLocation();
	const queryParams=new URLSearchParams(location.search);
	const auth=queryParams.get("auth");

	const [forgetPage, setForgetPage]=useState<ForgetPage>(auth? "change":"email");

	async function enviarEmail(email: string) {
		const res=userGateway.enviarEmailRecuperarSenha(email);
		return res;
	}
	async function atualizarSenha(senha: string) {
		const res=await userGateway.atualizarSenha(senha, auth!);
		return res;
	}

	return (
		<>
			<Header />
			<BodyTemplate footer>
				{
					forgetPage==="email"&&<Step1ForgetPassword enviarEmail={enviarEmail} />
				}
				{
					forgetPage==="change"&&<Step2ForgetPassword changePage={setForgetPage} atualizarSenha={atualizarSenha} />
				}
				{
					forgetPage==="finished"&&<Step3ForgetPassword />
				}
			</BodyTemplate>
		</>
	);
};

export default ForgetPassword;
