import React from "react";
import { ContainerFluid } from "../atoms/container";
import { Divider } from "../atoms/divider";

type BodyTemplateProps = {

} & React.PropsWithChildren;

export const BodyTemplate: React.FC<BodyTemplateProps> = ({ children }) => {
    return (
        <ContainerFluid>
            <Divider marginBottom="70px" />
            {children}
        </ContainerFluid>
    );
}

