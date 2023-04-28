import React from "react";
import { ContainerFluid } from "../atoms/container";
import { Divider } from "../atoms/divider";
import FooterOrganism from "../organisms/footer/footer-organism";

type BodyTemplateProps = {
	footer?: boolean;
} & React.PropsWithChildren;

export const BodyTemplate: React.FC<BodyTemplateProps> = ({
	children,
	footer = false,
}) => {
	return (
		<ContainerFluid>
			<Divider marginBottom="70px" />
			{children}

			{/* <Divider marginBottom="70px" /> */}
			{footer ? <FooterOrganism /> : null}
		</ContainerFluid>
	);
};
