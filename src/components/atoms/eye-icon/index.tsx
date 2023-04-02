import React, { HTMLAttributes } from "react";
import { EyeClosed, EyeOpen } from "./styles";
export type EyeProps = {
	closed: boolean;
} & HTMLAttributes<HTMLOrSVGElement>;
export const Eye: React.FC<EyeProps> = ({ closed, ...props }) => {
	return closed ? <EyeClosed {...props} /> : <EyeOpen {...props} />;
};
