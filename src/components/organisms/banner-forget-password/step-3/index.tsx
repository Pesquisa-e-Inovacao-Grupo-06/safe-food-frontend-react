import {Dots} from "@/components/atoms/dots";
import {Text} from "@/components/atoms/text";
import {ButtonIcon} from "@/components/molecules/button/button-icon";
import {Subtitle} from "@/styles/components/text/Subtitle";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import {ContainerBannerStep3ForgetPassword} from "./styles";
import {useNavigate} from "react-router-dom";

import step3Image from "../../../../assets/step-3-forget.png";

export const Step3ForgetPassword: React.FC=() => {
	const navigate=useNavigate();
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
								<img src={step3Image} />
							</div>
							<div className="text-step3-forget-password">
								<Text>Parabéns, você atualizou sua senha!!</Text>
								<Subtitle>Agora vai conseguir utilizar normalmente seu login.</Subtitle>
							</div>
						</div>
						<div className="footer-step3-forget-password">
							<ButtonIcon icon={<MdOutlineArrowForwardIos />} onClick={() => navigate("/#signin")}>Entrar na conta</ButtonIcon>
						</div>
					</div>
				</div>
			</ContainerBannerStep3ForgetPassword>
		</>
	);
};
