import React from "react";
import Select from "react-select";
import { useTheme } from "styled-components";
import { StyledSelect } from "./select-styles";
import { ColorType } from "@/styles/theme/styled";
import { directionSelect } from "@/app/infra/gateway/safefood/models/SafeFoodProduct";

export interface Option {
  value: string;
  label: string;
  direction?: directionSelect
}

export interface SelectProps {
  options: Option[];
  width?: number;
  nameSelect?: string;
  noOptionsMessage?: string;
  colorArrowIcon?: ColorType & string;
  onChange: (selectedOption: Option | null) => void;
  children?: React.ReactNode;
}

export const SelectAtom: React.FC<SelectProps> = ({
  options,
  width,
  nameSelect,
  noOptionsMessage = "Sem resultados",
  colorArrowIcon,
  onChange,

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

  const handleSelectChange = (selectedOption: Option | null) => {
    if (onChange) {
      onChange(selectedOption);
    }
  };

  return (
    <StyledSelect width={width}>
      <Select
        placeholder={nameSelect}
        styles={style}
        noOptionsMessage={() => noOptionsMessage}
        options={options}
        onChange={handleSelectChange}
        
      />
    </StyledSelect>
  );
};
