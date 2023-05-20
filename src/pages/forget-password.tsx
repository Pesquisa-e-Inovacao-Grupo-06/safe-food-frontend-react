import Header from "@/components/molecules/header";
import { Step1ForgetPassword } from "@/components/organisms/banner-forget-password/step-1";
import { Step2ForgetPassword } from "@/components/organisms/banner-forget-password/step-2";
import { Step3ForgetPassword } from "@/components/organisms/banner-forget-password/step-3";
import { BodyTemplate } from "@/components/templates/body-template";

const ForgetPassWord: React.FC = () => {
	return (
		<>
			<Header />
			<BodyTemplate footer>
				<Step1ForgetPassword />
			</BodyTemplate>
		</>
	);
};

export default ForgetPassWord;
