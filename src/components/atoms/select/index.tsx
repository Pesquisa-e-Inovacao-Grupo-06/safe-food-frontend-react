import Select from "react-select";
import { useTheme } from "styled-components";
import { StyledSelect } from "./select-styles";
import { ColorType } from "@/styles/theme/styled";

export type SelectProps = {
	options: Array<string>;
	width?: number;
	nameSelect?: string;
	noOptionsMessage?: string;
	colorArrowIcon?: ColorType & string;
} & React.PropsWithChildren;
export const SelectAtom: React.FC<SelectProps> = ({
	options,
	width,
	nameSelect,
	noOptionsMessage = "Sem resultados",
	colorArrowIcon,
	...props
}) => {
	const theme = useTheme();
	const style = {
		dropdownIndicator: (provided: any) => ({
			...provided,
			svg: {
				fill: colorArrowIcon ? colorArrowIcon : theme.colors.primary[600],
			},
		}),
	};

	return (
		<StyledSelect width={width}>
			<Select
				placeholder={nameSelect}
				styles={style}
				noOptionsMessage={() => noOptionsMessage}
				options={options.map(option => ({ value: option, label: option }))}
			/>
		</StyledSelect>
	);
};
