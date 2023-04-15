import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import Camera from "../../../assets/form/camera.svg";
import { StyledLabelForImage } from "./styles";
import { Box } from "@/components/atoms/box";
import { TextAtom } from "@/components/atoms/text/text-atom";
export type ProfilePhotoUploadWithPreviewProps = {
	name: string;
	id: string;
	width: string;
	justify?: string;
} & HTMLAttributes<HTMLLabelElement>;
export const ProfilePhotoUploadWithPreview: React.FC<
	ProfilePhotoUploadWithPreviewProps
> = ({ justify = "center", ...props }) => {
	const [preview, setPreview] = useState(Camera);
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
				>
					<img
						src={preview}
						alt="Camera para editar a foto de perfil"
					/>
				</StyledLabelForImage>
				<TextAtom>{fileName}</TextAtom>
			</Box>

			<input
				type="file"
				accept="image/*"
				name={props.name}
				id={props.id}
				onChange={({ target }) => {
					if (target.files) {
						const [file] = target.files;
						console.log(file);
						if (file) {
							const img = URL.createObjectURL(file);
							setPreview(img);
							setFilename(file.name);
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
