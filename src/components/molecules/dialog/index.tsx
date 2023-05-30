import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import React, { FC } from 'react';
export type SafeFoodDialogProps = {
	open: boolean;
	handleClickOpen(): void;
	handleClose(): void;
	title?: string;
	text?: string;
	btnRightText?: string;
	btnLeftText?: string;
};
export const SafeFoodDialog: FC<SafeFoodDialogProps> = ({
	handleClickOpen,
	handleClose,
	open,
	text,
	btnLeftText,
	btnRightText,
	title,
}) => {

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="responsive-dialog-title"
		>
			{title && (
				<DialogTitle id="responsive-dialog-title">
					{title}
				</DialogTitle>
			)}
			{text && (
				<DialogContent>
					<DialogContentText>{text}</DialogContentText>
				</DialogContent>
			)}
			<DialogActions>
				{btnLeftText && (
					<Button
						autoFocus
						onClick={handleClose}
					>
						{btnLeftText}
					</Button>
				)}

				<Button
					onClick={handleClickOpen}
					autoFocus
				>
					{btnRightText || 'OK'}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
