import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

export type LoadingProps = {
	size?: number;
};

export const Loading = ({ size = 25 }) => {
	return (
		<AiOutlineLoading
			className="spin"
			size={size}
		></AiOutlineLoading>
	);
};
