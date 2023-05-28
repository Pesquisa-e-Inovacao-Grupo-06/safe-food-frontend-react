import React, { HTMLAttributes, useState } from "react";
import Camera from "../../../assets/form/camera.png";
import { StyledLabelForImage } from "./styles";
import { Box, BoxJustify } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import { ImageAtom } from "@/components/atoms/img";
export type ProfilePhotoUploadWithPreviewProps = {
	name: string;
	id: string;
	width: string;
	justify?: BoxJustify;
	urlDefault?: string | undefined | null;
	isEditable?: boolean;
	onChangeFile?(file: File): void;
} & HTMLAttributes<HTMLLabelElement>;
export const ProfilePhotoUploadWithPreview: React.FC<
	ProfilePhotoUploadWithPreviewProps
> = ({ justify, isEditable = true, ...props }) => {
	const [preview, setPreview] = useState(props.urlDefault || Camera);
	const [fileName, setFilename] = useState("Nenhum arquivo selecionado");
	return (
		<>
			<Box
				display="flex"
				justify={justify}
				gap="8px"
				style={{
					flexWrap: "wrap",
				}}
			>
				<StyledLabelForImage
					className="transition"
					htmlFor={props.id}
					title="Clique sob para selecionar uma imagem"
					preview={preview !== Camera}
					{...props}
					id={props.id + "-label"}
					style={{ cursor: isEditable ? "pointer" : "not-allowed" }}
				>
					<ImageAtom
						cursor={isEditable ? "true" : "false"}
						src={preview}
						alt="Camera para editar a foto de perfil"
					/>
				</StyledLabelForImage>
				<Text>{fileName}</Text>
			</Box>

			<input
				type={isEditable ? "file" : "hidden"}
				accept="image/*"
				name={props.name}
				id={props.id}
				onChange={({ target }) => {
					if (target.files) {
						const [file] = target.files;
						if (file) {
							const img = URL.createObjectURL(file);
							setPreview(img);
							setFilename(file.name);
							if (props.onChangeFile) props.onChangeFile(file);
						}
					} else {
						setPreview(Camera);
					}
				}}
				style={{
					display: "none",
				}}
			/>
		</>
	);
};
