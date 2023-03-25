import Select from "react-select";
import { useTheme } from "styled-components";
import { StyledSelect } from "./select-styles";

export type SelectProps = {
	options: Array<string>;
	width?: number;
} & React.PropsWithChildren;
// TODO: deixar as cores personalizadas
export const SelectAtom: React.FC<SelectProps> = ({
	options,
	width,
	...props
}) => {
	const theme = useTheme();
	const style = {
		dropdownIndicator: (provided: any) => ({
			...provided,
			svg: {
				fill: theme.colors.primary[600],
			},
		}),
	};

	return (
		<StyledSelect width={width}>
			<Select
				placeholder="Ordenar"
				styles={style}
			/>
		</StyledSelect>
	);
};
