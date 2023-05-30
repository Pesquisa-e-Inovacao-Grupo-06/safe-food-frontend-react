import {EmailValidator} from "@/app/util/validations/email-validator";
import {Dots} from "@/components/atoms/dots";
import {Input} from "@/components/atoms/input";
import {Text} from "@/components/atoms/text";
import {ButtonIcon} from "@/components/molecules/button/button-icon";
import {Subtitle} from "@/styles/components/text/Subtitle";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import {ContainerBannerStep1ForgetPassword} from "./styles";
import {TextField} from "@/components/molecules/textfield";
import {useState} from "react";
import {SafeFoodResponse} from "@/app/infra/gateway/safefood/models/SafeFoodResponse";
import {Alert} from "@/components/atoms/alert";

import step1Image from "../../../../assets/step-1-forget.png";


export const Step1ForgetPassword: React.FC<{
	enviarEmail(email: string): Promise<SafeFoodResponse>;
}>=({
	enviarEmail
}) => {
		const [email, setEmail]=useState("");
		const [error, setError]=useState("");
		const [success, setSuccess]=useState(false);

		return (
			<>
				<ContainerBannerStep1ForgetPassword>
					<div className="container-banner-step1-forget-password">
						<div className="container-step1-forget-password">
							<div className="header-step1-forget-password">
								<Dots
									countItems={3}
									currentItem={0}
									direction="row"
									colorActive="orange"
									colorDisabled="gray"
									size={12}
								/>
							</div>
							<div className="main-step1-forget-password">
								<div className="container-img-step1-forget-passwor">
									<img src={step1Image} />
								</div>
								<div className="text-step1-forget-password">
									<Text>Esqueceu sua senha ?</Text>
									<Subtitle>
										Vamos recuperá-la de uma maneira fácil, preencha o campo com seu email
										ou número cadastrado, por favor!
									</Subtitle>
								</div>
								{
									success&&
									<Alert type="success">
										<p>
											Recuperação de senha foi enviada no seu Email!
										</p>
									</Alert>
								}
								<TextField
									label="Email: "
									required
									id="email"
									value={email}
									placeholder="nome@exemplo.com"
									title="Digite seu e-mail completo"
									type="email"
									name="general-email"
									inputMode="email"
									max={100}
									min={10}
									onChange={ev => {
										let value=ev.currentTarget.value;
										setEmail(value);
									}}
									error={error}
								/>
							</div>
							<div className="footer-step1-forget-password">
								<ButtonIcon icon={<MdOutlineArrowForwardIos />} onClick={async () => {
									try {
										const res=await enviarEmail(email);

										const validStatus=[200, 201, 202, 204];
										if(!validStatus.includes(res.status)) {
											setError("Email não cadastrado ou serviço indisponível");
										}
										setSuccess(true);
									} catch(err) {
										setError("Email não cadastrado ou serviço indisponível");
									}
								}}>Enviar</ButtonIcon>
							</div>
						</div>
					</div>
				</ContainerBannerStep1ForgetPassword>
			</>
		);
	};
