import { EmailValidator } from "@/app/util/validations/email-validator";
import { Dots } from "@/components/atoms/dots";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { InputEmailSignUp } from "@/components/organisms/signup-consumer/inputs/InputEmailSignUpConsumer";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { ContainerBannerStep3ForgetPassword } from "./styles";

export const Step3ForgetPassword: React.FC = () => {
	return (
		<>
			<ContainerBannerStep3ForgetPassword>
				<div className="container-banner-step3-forget-password">
					<div className="container-step3-forget-password">
						<div className="header-step3-forget-password">
							<Dots
								countItems={3}
								currentItem={2}
								direction="row"
								colorActive="orange"
								colorDisabled="gray"
								size={12}
							/>
						</div>
						<div className="main-step3-forget-password">
							<div className="container-img-step3-forget-passwor">
								<img src="https://via.placeholder.com/200" />
							</div>
							<div className="text-step3-forget-password">
								<Text>Parabéns, você atualizou sua senha!!</Text>
								<Subtitle>Agora vai conseguir utilizar normalmente seu login.</Subtitle>
							</div>
						</div>
						<div className="footer-step3-forget-password">
							<ButtonIcon icon={<MdOutlineArrowForwardIos />}>Entrar na conta</ButtonIcon>
						</div>
					</div>
				</div>
			</ContainerBannerStep3ForgetPassword>
		</>
	);
};
