import { Box } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import imgTeste from "../../../assets/food-favorite.png";
import { ContainerBoxComent } from "./styles";
import { ImageAtom } from "@/components/atoms/img";

export type CommentProps = {
	name?: string;
	comentario?: string;
	img?: string;
	date?: string;
	qtdComentario?: number;
	// key?: React.Key;
};

const BoxComment: React.FC<CommentProps> = ({
	name = "Ana Silva",
	comentario = "Adorei o Hambúrguer 2.0 Vegan do GreenBite, é delicioso e saudável!",
	img = "https://via.placeholder.com/150",
	date = "20/04/2023",
	qtdComentario = "18",
	// key,
	...props
}) => {
	return (
		<>
			<ContainerBoxComent
				{...props}
				// key={key}
			>
				<Box className="header-comentario-product-text">
					<ImageAtom src={img} />
					<Text>
						<h3>{name}</h3>
						<span>
							{date} - {qtdComentario} comentários
						</span>
					</Text>
				</Box>
				<span>"{comentario}"</span>
			</ContainerBoxComent>
		</>
	);
};

export default BoxComment;
