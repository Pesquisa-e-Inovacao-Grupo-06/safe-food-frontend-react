import { EmailValidator } from "@/app/util/validations/email-validator";
import { Dots } from "@/components/atoms/dots";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { InputEmailSignUp } from "@/components/organisms/signup-consumer/inputs/InputEmailSignUpConsumer";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ContainerBannerStep1ForgetPassword } from "./styles";

export const Step1ForgetPassword: React.FC = () => {
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
								<img src="https://via.placeholder.com/200" />
							</div>
							<div className="text-step1-forget-password">
								<Text>Esqueceu sua senha ?</Text>
								<Subtitle>
									Vamos recuperá-la de uma maneira fácil, preencha o campo com seu email
									ou número cadastrado, por favor!
								</Subtitle>
							</div>
							<div className="input-step1-forget-password">
								Email: *
								<Input value="" />
							</div>
						</div>
						<div className="footer-step1-forget-password">
							<ButtonIcon icon={<MdOutlineArrowForwardIos />}>Enviar</ButtonIcon>
						</div>
					</div>
				</div>
			</ContainerBannerStep1ForgetPassword>
		</>
	);
};
