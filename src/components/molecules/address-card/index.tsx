import React from "react";
import { AddresCardContainer } from "./styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { ButtonIcon } from "../button/button-icon";
import { IconType } from "react-icons/lib";
import { MdEdit } from "react-icons/md";
import { Box } from "@/components/atoms/box";

export type AddresCardProps = {
	Icon?: IconType;
	subtitle?: string;
	text?: string;
};

const AddresCard: React.FC<AddresCardProps> = ({
	subtitle = "Casa",
	text = "Avenida Itaquera, 8266 ,Vila Carmosina, São Paulo - SP, 08295-000",
	...props
}) => {
	return (
		<>
			<AddresCardContainer>
				<div className="address-card-header">
					<Subtitle className="address-card-subtitle">{text}</Subtitle>
					<ButtonIcon
						className="address-card-btn-icon"
						icon={<MdEdit />}
					/>
				</div>
				<Box className="address-car-container-text">
					<span>{subtitle}</span>
				</Box>
			</AddresCardContainer>
		</>
	);
};

export default AddresCard;
