import React from "react";
import logo from "../../../assets/svg-logo.svg";
import logopng from "../../../assets/Ping-Logo.png";
import { Link } from "react-router-dom";
import { ContainerLogo, CustomLogo } from "./styles";

export type SizeLogo = "logo-sm" | "logo-md" | "logo-l";

export type Props = {
	sizeLogo?: SizeLogo;	
};

export const LogoAtom: React.FC<Props> = ({
	sizeLogo = "logo-md",
	...props
}) => {
	return (
		<ContainerLogo sizeLogo={sizeLogo}>
			<Link
				to="/"
				className="linkLogo"
			>
				<CustomLogo
					src={logopng}
					sizeLogo={sizeLogo}
					alt="Safe Food"
				/>
				<h1>
					SAFE
					<br />
					FOOD
				</h1>
			</Link>
		</ContainerLogo>
	);
};
