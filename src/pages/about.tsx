import { Dots } from "@/components/atoms/dots";
import HeaderConsumer from "@/components/molecules/header-consumer";
import React from "react";

function About() {
	return (
		<>
			<HeaderConsumer />
			<div style={{ paddingTop: "75px" }}>
				<h1>ABOUT</h1>
			</div>
		</>
	);
}

export default About;
