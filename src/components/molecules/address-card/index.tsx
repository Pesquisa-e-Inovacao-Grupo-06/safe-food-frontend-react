import React from "react";
import { AddresCardContainer } from "./styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { ButtonIcon } from "../button/button-icon";
import { IconType } from "react-icons/lib";
import { MdEdit } from "react-icons/md";
import { Box } from "@/components/atoms/box";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

export type AddresCardProps = {
	Icon?: IconType;
	headerText?: string;
	bodyText?: string;
	apelido: string;
	idAddress: number;
	onClickCard: (id: string) => void;
	onClickDeleteAddress: (id: number) => void;
};

const AddresCard: React.FC<AddresCardProps> = ({
	headerText,
	bodyText,
	onClickCard,
	apelido,
	onClickDeleteAddress,
	idAddress,
	...props
}) => {
	const handleButtonClick = () => {
		const enderecoApelido = apelido;
		onClickCard(enderecoApelido);
	};

	const handleButtonClickDelete = () => {
		onClickDeleteAddress(idAddress);
	};

	return (
		<>
			<AddresCardContainer>
				<div className="address-card-header">
					<Subtitle className="address-card-subtitle">{headerText}</Subtitle>
					<Box
						display="flex"
						flexDirection="row"
						justify="right"
						gap="20px"
					>
						<AiFillEdit
							size={24}
							onClick={handleButtonClick}
							cursor="pointer"
						/>
						<FaTrash
							cursor="pointer"
							onClick={handleButtonClickDelete}
						/>
					</Box>
				</div>
				<Box className="address-car-container-text">
					<span>{bodyText}</span>
				</Box>
			</AddresCardContainer>
		</>
	);
};

export default AddresCard;
