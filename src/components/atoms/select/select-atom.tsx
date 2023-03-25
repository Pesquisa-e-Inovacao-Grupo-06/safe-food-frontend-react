import Select from "react-select";
import { StyledSelect } from "./select-styles";

export type SelectProps = {
	options: Array<string>;
	width?: number;
} & React.PropsWithChildren;

const style = {
	dropdownIndicator: (provided: any) => ({
		...provided,
		svg: {
			fill: "orange",
		},
	}),
};

export const SelectAtom: React.FC<SelectProps> = ({
	options,
	width,
	...props
}) => {
	return (
		<StyledSelect width={width}>
			<Select
				placeholder="Ordenar"
				styles={style}
			/>
		</StyledSelect>
	);
};
