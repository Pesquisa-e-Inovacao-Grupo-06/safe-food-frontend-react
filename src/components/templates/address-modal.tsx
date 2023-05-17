import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import React, { useEffect, useState } from "react";
import { Modal } from "../molecules/modal";
import { Box } from "../atoms/box";
import { AlertType } from "../atoms/alert";
export type AddressModalProps = {
	toggleModal(): void;
	isModalVisible: boolean;
	isAlertVisible?: boolean;
	typeAlert?: AlertType;
	textAlert?: string;
};
export const AddressModal: React.FC<AddressModalProps> = ({
	isModalVisible,
	toggleModal,
}) => {
	const { colors } = useSafeFoodTheme().getTheme();
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setVisible(isModalVisible);
	}, [isModalVisible]);

	return (
		<>
			<Modal
				size="sm"
				height="md"
				padding="20px 20px 40px 20px"
				responsive
				isOpen={visible}
				onClickForeground={() => {
					setVisible(false);
					setTimeout(() => {
						toggleModal();
					}, 300);
				}}
			>
				<Box
					display="flex"
					justify="left"
					alignItems="baseline"
					flexDiretion="column"
					padding="20px"
					height="90%"
					margin="auto"
					gap={"12px"}
					maxWidth={"400px"}
					alignSelf="center"
				></Box>
			</Modal>
		</>
	);
};
