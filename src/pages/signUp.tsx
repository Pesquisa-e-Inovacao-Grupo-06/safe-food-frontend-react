import { makeHttpClient } from "@/app/factories/makeAxiosHttpClient";
import { RemoteRestrictionService } from "@/app/infra/services/RemoteRestrictionService";
import { SignUpConsumer } from "@/components/organisms/signup-consumer";

function SignUp() {
	const service = new RemoteRestrictionService(
		makeHttpClient("http://localhost:8081")
	);
	return (
		<div style={{ paddingTop: "75px" }}>
			<h1>SignUp</h1>

			<SignUpConsumer restrictionService={service} />
			{/* <SignUpEstablishment /> */}
		</div>
	);
}

export default SignUp;
