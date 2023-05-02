import { ContainerTextArea } from "./styles";

type Props = {
	height?: string;
	textPlaceholder?: string;
};

const TextArea: React.FC<Props> = ({
	height = "50px",
	textPlaceholder = "Eu gostei da experiência no ambiente...",
}) => {
	return (
		<>
			<ContainerTextArea
				placeholder={textPlaceholder}
				height={height}
			></ContainerTextArea>
		</>
	);
};

export default TextArea;
