import { Box } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import { ContainerBoxComent } from "./styles";
import { ImageAtom } from "@/components/atoms/img";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

const StyledFaTrash = styled(FaTrash)`
  fill: red  ;
  transition: fill 0.3s ease;

  &:hover {
    fill: #ff0000 ;
  }
`;

export type CommentProps = {
	name?: string;
	comentario?: string;
	img?: string;
	date?: string;
	qtdComentario?: number;
	idComment: number;
	haveIconTrash?: boolean;
	onClickDeleteComment: (idComment: number) => void;
};

const BoxComment: React.FC<CommentProps> = ({
	name = "Ana Silva",
	comentario = "Adorei o Hambúrguer 2.0 Vegan do GreenBite, é delicioso e saudável!",
	img = "https://via.placeholder.com/150",
	date = "20/04/2023",
	qtdComentario = "18",
	onClickDeleteComment,
	idComment,
	haveIconTrash = true,
	...props
}) => {
	const handleClickDeleteComment = () => {
		onClickDeleteComment(idComment);
	};



	return (
		<>
			<ContainerBoxComent {...props}>
				<Box className="header-comentario-product-text">
					<ImageAtom src={img} />
					<Text>
						<Box display="flex" flexDirection="row" justify="space-between">
							<h3>{name}</h3>
							{haveIconTrash ? (
								<StyledFaTrash
									cursor="pointer"
									onClick={handleClickDeleteComment}
								/>
							) : (
								<></>
							)}
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
