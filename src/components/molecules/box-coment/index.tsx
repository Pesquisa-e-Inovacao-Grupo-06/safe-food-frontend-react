import { Box } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import imgTeste from "../../../assets/food-favorite.png";
import { ContainerBoxComent } from "./styles";
import { ImageAtom } from "@/components/atoms/img";
import { ButtonIcon } from "../button/button-icon";
import { FaTrash } from "react-icons/fa";

export type CommentProps = {
	name?: string;
	comentario?: string;
	img?: string;
	date?: string;
	qtdComentario?: number;

	// key?: React.Key;
	onClickTrashDelete: () => void;
};

const BoxComment: React.FC<CommentProps> = ({
	name = "Ana Silva",
	comentario = "Adorei o Hambúrguer 2.0 Vegan do GreenBite, é delicioso e saudável!",
	img = "https://via.placeholder.com/150",
	date = "20/04/2023",
	qtdComentario = "18",
	// key,
	onClickTrashDelete,
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
						<Box
							display="flex"
							flexDirection="row"
							justify="space-between"
						>
							<h3>{name}</h3>
							<FaTrash
								cursor={"pointer"}
								onClick={onClickTrashDelete}
							></FaTrash>
						</Box>
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
