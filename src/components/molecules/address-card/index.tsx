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
	apelido: string;
	onClickCard: (id: string) => void;
};

const AddresCard: React.FC<AddresCardProps> = ({
	headerText,
	bodyText,
	onClickCard,
	apelido,
	...props
}) => {
	const handleButtonClick = () => {
		// Aqui você pode acessar as informações necessárias para a callback
		// Por exemplo, se houver um ID relacionado ao endereço, você pode passá-lo para a callback
		const enderecoApelido = apelido;

		// Chama a função de callback passando o ID como argumento
		onClickCard(enderecoApelido);
	};

	return (
		<>
			<AddresCardContainer>
				<div className="address-card-header">
					<Subtitle className="address-card-subtitle">{headerText}</Subtitle>
					<ButtonIcon
						className="address-card-btn-icon"
						icon={<MdEdit />}
						onClick={handleButtonClick} // Passa a função handleButtonClick como callback para o onClick do botão
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
