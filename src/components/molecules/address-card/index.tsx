import React from "react";
import { AddresCardContainer } from "./styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { IconType } from "react-icons/lib";
import { Box } from "@/components/atoms/box";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

export type AddresCardProps = {
	Icon?: IconType;
	headerText?: string;
	bodyText?: string;
	apelido: string;
	idAddress: number;
	onClickEditAddress: () => void;
	onClickDeleteAddress?: (id: number) => void;
	haveIconDelete: boolean;
};

const AddresCard: React.FC<AddresCardProps> = ({
	headerText,
	bodyText,
	onClickEditAddress,
	apelido,
	onClickDeleteAddress,
	idAddress,
	haveIconDelete = true,
	...props
}) => {
	const handleButtonClick = () => {
		onClickEditAddress();
	};

	const handleButtonClickDelete = () => {
		if(!onClickDeleteAddress){
			return;
		}
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
					{!haveIconDelete ? 	<FaTrash
							cursor="pointer"
							onClick={handleButtonClickDelete}
						/> : <></>
					}
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
