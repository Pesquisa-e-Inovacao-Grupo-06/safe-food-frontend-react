import { MoreFavoriteOrganism } from '../organisms/more-favorite/more-favorite-organism';
import { Subtitle } from '@/styles/components/text/Subtitle';
import { Divider } from '../atoms/divider';
import { Product } from '@/app/domain/entities/Product';

interface MoreFavoriteProps {
	listOfFavorite: Product[];
}
export const MoreFavoritesTemplate: React.FC<MoreFavoriteProps> = ({
	listOfFavorite,
}) => {
	return (
		<div style={{ marginTop: '40px', width: '100%' }}>
			<Subtitle
				large
				style={{
					marginBottom: '30px',
					width: 'fit-content',
					borderBottom: '0.18em solid orange',
				}}
			>
				Mais favoritados
			</Subtitle>
			{listOfFavorite.slice(0, 2).map((i, index) => (
				<div key={i.params.id}>
					<MoreFavoriteOrganism moreFavoriteType={i} />
					<Divider marginAll="10px" />
				</div>
			))}
		</div>
	);
};
