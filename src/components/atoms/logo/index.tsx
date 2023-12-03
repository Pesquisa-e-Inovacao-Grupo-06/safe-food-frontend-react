import React from "react";
import { Link } from "react-router-dom";
import { ContainerLogo, CustomLogo } from "./styles";

export type SizeLogo = "logo-sm" | "logo-md" | "logo-lg";

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
					src={"https://safefood-nfs.hopto.org/assets/Ping-Logo.png"}
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
