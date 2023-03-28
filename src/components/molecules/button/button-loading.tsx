import React from "react";
import { Button } from "../../atoms/button/button-atom";
import { Loading } from "../../atoms/loading/loading";

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
