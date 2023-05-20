import { EmailValidator } from "@/app/util/validations/email-validator";
import { Dots } from "@/components/atoms/dots";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { InputEmailSignUp } from "@/components/organisms/signup-consumer/inputs/InputEmailSignUpConsumer";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ContainerBannerStep2ForgetPassword } from "./styles";

export const Step2ForgetPassword: React.FC = () => {
	return (
		<>
			<ContainerBannerStep2ForgetPassword>
				<div className="container-banner-step2-forget-password">
					<div className="container-step2-forget-password">
						<div className="header-step2-forget-password">
							<Dots
								countItems={3}
								currentItem={1}
								direction="row"
								colorActive="orange"
								colorDisabled="gray"
								size={12}
							/>
						</div>
						<div className="main-step2-forget-password">
							<div className="container-img-step2-forget-passwor">
								<img src="https://via.placeholder.com/200" />
							</div>
							<div className="text-step2-forget-password">
								<Text>Atualize sua senha</Text>
								<Subtitle>
									Agora vamos alterar sua senha, para que consiga recuperar sua conta,
									coloque uma senha valida.
								</Subtitle>
							</div>
							<div className="input-step2-forget-password">
								Senha: *
								<Input value="" />
							</div>
                            <div className="input-step2-forget-password">
								Confirmar senha: *
								<Input value="" />
							</div>
						</div>
						<div className="footer-step2-forget-password">
							<ButtonIcon icon={<MdOutlineArrowForwardIos />}>Atualizar</ButtonIcon>
						</div>
					</div>
				</div>
			</ContainerBannerStep2ForgetPassword>
		</>
	);
};
