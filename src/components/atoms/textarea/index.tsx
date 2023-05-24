import React, { ChangeEvent } from "react";
import { ContainerTextArea } from "./styles";

type Props = {
	height?: string;
	textPlaceholder?: string;
	onTextChange?: (comment: string) => void;
};

const TextArea: React.FC<Props> = ({
	height = "50px",
	textPlaceholder = "Eu gostei da experiência no ambiente...",
	onTextChange,
}) => {
	const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const comment = event.target.value;
		if (onTextChange) {
			onTextChange(comment);
		}
	};

	return (
		<>
			<ContainerTextArea
				placeholder={textPlaceholder}
				height={height}
				onChange={handleTextChange}
			></ContainerTextArea>
		</>
	);
};

export default TextArea;
