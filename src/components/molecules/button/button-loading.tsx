import { Button } from "@/components/atoms/button";
import React from "react";
import { Loading } from "../../atoms/loading";

export type ButtonLoadingProps = {
	sizeLoading?: number;
};
export const ButtonLoading: React.FC<ButtonLoadingProps> = ({
	sizeLoading: sizeLoading,
}) => {
	return (
		<Button>
			<Loading size={sizeLoading} />
		</Button>
	);
};
