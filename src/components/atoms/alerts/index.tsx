import React from "react";
import { StyledAletsProps } from "./styles";

export type AlertsPropsComponet = {
    type: "string";
    value: string;
    success?: string;
    error?: string;
    warning?: string;
    info?: string;
}

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & AlertsPropsComponet;