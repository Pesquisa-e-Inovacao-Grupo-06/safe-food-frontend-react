import React from "react";
import { AddresCardContainer } from "./styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { ButtonIcon } from "../button/button-icon";
import { IconType } from "react-icons/lib";
import { MdEdit } from "react-icons/md";
import { Box } from "@/components/atoms/box";

export type AddresCardProps = {
	Icon?: IconType;
	headerText?: string;
	bodyText?: string;
};

const AddresCard: React.FC<AddresCardProps> = ({
	headerText,
	bodyText,
	...props
}) => {
	return (
		<>
			<AddresCardContainer>
				<div className="address-card-header">
					<Subtitle className="address-card-subtitle">{headerText}</Subtitle>
					<ButtonIcon
						className="address-card-btn-icon"
						icon={<MdEdit />}
					/>
				</div>
				<Box className="address-car-container-text">
					<span>{bodyText}</span>
				</Box>
			</AddresCardContainer>
		</>
	);
};

export default AddresCard;
