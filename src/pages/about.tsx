import { Dots } from "@/components/atoms/dots";
import React from "react";

function About() {
	return (
		<div style={{ paddingTop: "75px" }}>
			<Dots countItems={3} currentItem={2} direction="row" size={40} colorActive="orange"></Dots>
		</div>
	);
}

export default About;
