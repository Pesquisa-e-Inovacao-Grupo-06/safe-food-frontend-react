import { SignUpConsumer } from "@/components/organisms/signup-consumer";
import { SignUpEstablishment } from "@/components/organisms/signup-establishment";
import React from "react";

function SignUp() {
	return (
		<div style={{ paddingTop: "75px" }}>
			<h1>SignUp</h1>

			{/*<SignUpConsumer />*/}
			<SignUpEstablishment />
		</div>
	);
}

export default SignUp;
