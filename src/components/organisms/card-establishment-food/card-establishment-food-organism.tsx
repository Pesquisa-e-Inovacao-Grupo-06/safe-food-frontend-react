import {Box} from "../../atoms/box/index";
import styled from "styled-components";
import {AvaliationStars} from "@/components/molecules/avaliation-stars";
import {Subtitle} from "@/styles/components/text/Subtitle";
import {Text} from "../../atoms/text";
import {FaCommentAlt} from "react-icons/fa";
import {IoLocationSharp} from "react-icons/io5";
import {MdEdit} from "react-icons/md";
import {Star} from "@/components/atoms/star";
import {TextIcon} from "@/components/molecules/text-icon/text-icon-molecule";
import {Divider} from "@/components/atoms/divider";
import {formatReal} from "@/app/util/convertions/price-br";
import {Product} from "@/app/domain/entities/Product";
import {ImageAtom} from "@/components/atoms/img";
import SearchBar from "@/components/molecules/search-bar";
import {ButtonEdit} from "@/components/atoms/button-edit";
import {useNavigate} from "react-router-dom";
import {ProfilePhotoUploadWithPreview} from "@/components/molecules/upload-profile-photo";

export type EstablishmentFoodProps={
	NearbyFoodsItem: Product;
};
export type InfoProductProps={
	product: Product;
	getInfoProduct?(): void;
	activeEdit?: boolean;
};

export const NearbyFoodsCard: React.FC<EstablishmentFoodProps>=({
	NearbyFoodsItem: nearbyFoodsItem,
}) => {
	const navigate=useNavigate();

	return (
		<>
			<Box
				display="flex"
				flexDirection="column"
				borderRadius="md"
				style={{
					width: '480px',
					height: '236px',
				}}
				onClick={() =>
					navigate(`/product-consumer/${nearbyFoodsItem.params.id}`)
				}
			>
				<div style={{height: '46%', width: '100%'}}>
					<img
						src={
							nearbyFoodsItem.params.imagem??'https://via.placeholder.com/400'
						}
						style={{
							objectFit: 'cover',
							borderRadius: '4px',
							pointerEvents: 'none',
						}}
						height={'100%'}
						width={'100%'}
					/>
				</div>
				<div
					style={{
						height: '54%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
						padding: '10px',
					}}
				>
					<StyledRow style={{justifyContent: 'unset'}}>
						<Subtitle
							style={{
								WebkitLineClamp: 1,
								display: '-webkit-box',
								textOverflow: 'ellipsis',
								overflow: 'hidden',
								width: '200px',
								height: 'auto',
								WebkitBoxOrient: 'vertical',
								flexBasis: '79.4%',
							}}
						>
							{nearbyFoodsItem.params.titulo}
						</Subtitle>
						{/* TODO: ARRUMAR AVEGARE */}
						<AvaliationStars
							fixed
							avegareRate={1}
							style={{flexBasis: '20.6%'}}
						/>
						<div style={{flexBasis: '10%'}}></div>
					</StyledRow>
					<Text typeText="text-md">{nearbyFoodsItem.params.descricao}</Text>
					<StyledRow style={{alignItems: 'flex-start'}}>
						<StyledCost typeText="text-mdb">
							{formatReal(nearbyFoodsItem.params.preco)}
						</StyledCost>
						<TextIcon
							icon={<IoLocationSharp />}
							iconAlign="left"
							typeText="text-md"
						>
							{'m'??'distancia indefinida'}
						</TextIcon>
						<div></div>
					</StyledRow>
				</div>
			</Box>
		</>
	);
};

export const CardEstablishmentFoodOrganism: React.FC<InfoProductProps>=({
	product,
	activeEdit=false,
	getInfoProduct,
}) => {
	const navigate=useNavigate();
	return (
		<Box
			display="flex"
			flexDirection="column"
			borderRadius="md"
			shadow="md"
			background="#FCFCFC"
		// style={{ cursor: "pointer" }}
		// onClick={() => navigate(`establishment/${product.params.estabelecimento.id}/products/${product.params.id}`)}
		>
			<div
				style={{
					width: '100%',
					backgroundImage: `url(${product.params.imagem||'https://via.placeholder.com/400'})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					borderRadius: '4px',
					maxHeight: '200px',
					minHeight: '200px',
					padding: '10px',
				}}
			>
				{activeEdit&&<ButtonEdit onClick={getInfoProduct} />}
				{/* COMENTEI A IMG ABAIXO, PARA COLOCAR IMG NO BAKCGROUND DA DIV, PARA COLOCAR BOTÃO DE EDITAR */}
				{/* <img
					src={product.params.imagem ?? "https://via.placeholder.com/400"}
					alt=""
					style={{
						maxHeight: "200px",
						objectFit: "cover",
						width: "100%",
						borderRadius: "4px",
					}}
				/> */}
			</div>
			<StyledColumn style={{margin: '14px', alignItems: 'start', cursor: "pointer"}}
				// style={{ cursor: "pointer" }}
				onClick={() => navigate(`${product.params.estabelecimento.id}/products/${product.params.id}`)}
			>
				<Subtitle
					style={{
						height: '40px',
						overflow: 'hidden',
					}}
				>
					{product.params.titulo}
				</Subtitle>
				<Text style={{height: '60px', overflow: 'hidden'}}>
					{product.params.descricao}
				</Text>
				<StyledCost typeText="text-mdb">
					{formatReal(product.params.preco)}
				</StyledCost>

				<Divider />
				<StyledRow>
					<AvaliationStars
						fixed
						color="orange"
						avegareRate={product.params.average??0}
					/>
					<Text>{product.params.avaliacoes?.length??0} avaliações</Text>
				</StyledRow>
			</StyledColumn>
		</Box>
	);
};

type CardExpansiveEstablishmentFoodOrganismProps={
	titulo?: string;
	categoria?: string;
	qtdComentario: number,
	average: number,
	fileChange?(file: File): void;
};

export const CardExpansiveEstablishmentFoodOrganism: React.FC<
	CardExpansiveEstablishmentFoodOrganismProps
>=({titulo="Hamburger Vegan 2.0", categoria="", fileChange, average, qtdComentario}) => {
	return (
		<Box
			display="flex"
			flexDirection="row"
			borderRadius="md"
			width="100%"
			shadow="md"
			background="#FCFCFC"
		>
			<div style={{height: "125px", padding: "10px", flexBasis: "20%"}}>
				<ProfilePhotoUploadWithPreview
					shape="rectangle"
					name={""} id={"imageProductEdit"} width={""}
					 fileChange={fileChange} />
			</div>
			<StyledColumn style={{flexBasis: '20%', alignItems: 'start'}}>
				<Subtitle>{titulo}</Subtitle>
				<StyledRow style={{justifyContent: 'unset', gap: '20px'}}>
					<TextIcon
						icon={
							<Star
								filled={true}
								value={3.5}
								size={20}
							></Star>
						}
						iconAlign="left"
					>
						{average}
					</TextIcon>
					<TextIcon
						icon={<FaCommentAlt />}
						iconAlign="left"
					>
						{qtdComentario}
					</TextIcon>
					{categoria}
				</StyledRow>
			</StyledColumn>
			{/* <div
				style={{
					height: "100%",
					background: "black",
					width: "10px",
					flexBasis: "1%",
					position: "relative",
				}}
			></div> */}
			<StyledRow style={{flexBasis: '59%'}}>
				<Text style={{height: 'fit-content'}}>
					Aproveite todo o sabor de um clássico hambúrguer sem sacrificar seus
					princípios veganos com o nosso revolucionário Hambúrguer 2.0 Vegano.
					Feito com ingredientes de origem vegetal de alta qualidade, este
					hambúrguer é uma deliciosa opção para quem busca uma alimentação mais
					saudável e sustentável. Com sua textura suculenta e sabor inigualável,
					é perfeito para qualquer refeição, desde um lanche rápido até um
					jantar sofisticado. Experimente agora e descubra o futuro do
					hambúrguer vegano!
				</Text>
			</StyledRow>
		</Box>
	);
};

export const StyledContainer=styled.div<{
	flexDiretion?: 'column'|'row';
}>`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	flex-direction: row;
	.img-more-favorite {
		border-radius: 8px;
	}
`;

export const StyledRow=styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 100%;
`;
export const StyledColumn=styled.div<{
	alignItems?: AlignSetting;
}>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 100%;
	align-items: ${p => p.alignItems};
	gap: 20px;
`;

export const StyledCost=styled(Text) <{
	backgroundColor?: string;
}>`
	background-color: ${p => p.backgroundColor??'green'};
	height: 100%;
	border-radius: 4px;
	padding-left: 3%;
	padding-right: 3%;
	color: white;
	max-width: auto;
	width: fit-content;
`;
