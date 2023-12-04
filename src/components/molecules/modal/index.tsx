import React, { HTMLAttributes, PropsWithChildren } from "react";
import { ForegroundModal, StyledModal, StyledModalProps } from "./styles";
import { HTMLMotionProps } from "framer-motion";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
export type ModalProps = {
	isOpen: boolean;
	onClickForeground?: () => void;
} & HTMLAttributes<HTMLElement> &
	PropsWithChildren &
	HTMLMotionProps<"section"> &
	StyledModalProps;
export const Modal: React.FC<ModalProps> = ({
	isOpen,
	children,
	onClickForeground,
	...props
}) => {
	const theme = useSafeFoodTheme().getTheme();
	return (
		<>
			<ForegroundModal
				animate={{
					left: isOpen ? 0 : "-110%",
					opacity: isOpen ? 1 : 0,
					zIndex: isOpen ? theme.z_index.modal_backdrop : theme.z_index.under,
				}}
				onClick={onClickForeground}
			></ForegroundModal>
			<StyledModal
				animate={{
					left: isOpen ? "50%" : "-110%",
					opacity: isOpen ? 1 : 0,
					zIndex: isOpen ? theme.z_index.modal : theme.z_index.under,
				}}
				{...props}
			>
				{children}
			</StyledModal>
		</>
	);
};
