import { Box } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import imgTeste from "../../../assets/food-favorite.png";
import { ContainerBoxComent } from "./styles";

type Props = {
	name?: string;
	comentario?: string;
	img?: React.ImgHTMLAttributes<HTMLImageElement>;
	date?: string;
	qtdComentario?: number;
};

const BoxComent: React.FC<Props> = ({
	name = "Ana Silva",
	comentario = "Adorei o Hambúrguer 2.0 Vegan do GreenBite, é delicioso e saudável!",
	img = imgTeste,
	date = "20/04/2023",
	qtdComentario = "18",
}) => {
	return (
		<>
			<ContainerBoxComent>
				<Box className="header-comentario-product-text">
					<img src={img} />
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

export default BoxComent;
