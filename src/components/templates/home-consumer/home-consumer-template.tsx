import { Product } from '@/app/domain/entities/Product';
import { SelectAtom } from '@/components/atoms/select';
import { Text } from '@/components/atoms/text';
import DropDown, { DropDownProps } from '@/components/molecules/drop-down';
import HeaderConsumer from '@/components/molecules/header-consumer';
import { CardEstablishmentFoodOrganism } from '@/components/organisms/card-establishment-food/card-establishment-food-organism';
import { BodyTemplate } from '@/components/templates/body-template';
import { Subtitle } from '@/styles/components/text/Subtitle';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { Button } from '../../atoms/button/index';
import { Divider } from '@/components/atoms/divider';
import { Cache } from '@/app/domain/protocols/Cache';
import { Pagination } from '../../atoms/pagination';
import { Box } from '../../atoms/box';
import { CardProductHomeConsumer, ContainerHomeConsumer } from './style';
export type HomeConsumerProps = {
	products: Product[];
	dropDownList: DropDownProps[];
	onClickApplication(): void;
	cache: Cache;
	onPageChange: (pageNumber: number) => void;
	totalPagesProductFilter: number;
	changeOrder: (e: any) => void;
	changeItens: (e: any) => void;
	totalElements?: number;
};
const HomeConsumerTemplate: React.FC<HomeConsumerProps> = ({
	products,
	dropDownList,
	onClickApplication,
	cache,
	onPageChange,
	totalPagesProductFilter,
	changeItens,
	changeOrder,
	totalElements,
}) => {
	const [formCard, setFormcard] = useState<boolean>(false);

	const [isDropDown, setDropDown] = useState(false);

	return (
		<>
			<HeaderConsumer
				cache={cache}
				products={products}
			/>
			<BodyTemplate footer={true}>
				<ContainerHomeConsumer isFormCardActive={formCard}>
					<div className="header-home-consumer">
						<div className="container-header-home-consumer">
							<ul>
								{/* TODO: RESOLVER SELECTS */}
								<li>
									<Text>Ordenar:</Text>
									<SelectAtom
										options={[
											{ value: 'TODOS', label: 'Todos', direction: 'asc' },
											{
												value: 'QTD_AVALIACOES',
												label: 'Mais Avaliados',
												direction: 'desc',
											},
											{
												value: 'QTD_AVALIACOES_DESC',
												label: 'Menos Avaliados',
												direction: 'asc',
											},
											{
												value: 'LANCAMENTOS',
												label: 'Mais recentes',
												direction: 'desc',
											},
											{
												value: 'LANCAMENTOS_DESC',
												label: 'Menos recentes',
												direction: 'asc',
											},
											{
												value: 'PRECO',
												label: 'Maiores Preços',
												direction: 'desc',
											},
											{
												value: 'PRECO_DESC',
												label: 'Menores Preços',
												direction: 'asc',
											},
											{
												value: 'MELHORES_AVALIACOES',
												label: 'Mais relevante',
												direction: 'desc',
											},
											{
												value: 'MELHORES_AVALIACOES_DESC',
												label: 'Menos relevante',
												direction: 'asc',
											},
										]}
										onChange={changeOrder}
									/>
								</li>
								<li>
									<Text>Exibir:</Text>
									<SelectAtom
										// TODO: TIRAR VALUE ERRADO PARA TESTE
										options={[
											{ value: '6', label: '6 itens' },
											{ value: '9', label: '9 itens' },
											{ value: '12', label: '12 itens' },
											{ value: '15', label: '15 itens' },
										]}
										onChange={changeItens}
									/>
								</li>
								<li>
									<Text>{totalElements || 0} produtos</Text>
								</li>
							</ul>
							<div className="container-icon-header-home-consumer">
								<Text>{totalElements || 0} produtos</Text>
								<div className="box-icon-header-home-consumer">
									<FaBars onClick={() => setFormcard(true)} />
									<RxDashboard onClick={() => setFormcard(false)} />
								</div>
							</div>
						</div>
					</div>
					<div className="header-aside-filter-home-consumer">
						<Subtitle>Filtrar por:</Subtitle>
					</div>

					<div className="main-aside-filter-home-consumer">
						<div className="container-main-aside-filter-home-consumer">
							{dropDownList.map((dropDownItem, i) => {
								return (
									<DropDown
										key={i + '' + dropDownItem.textSubMenuWithCheckBox}
										titleDropDown={dropDownItem.titleDropDown}
										activeCheckBox={dropDownItem.activeCheckBox}
										alignTitleText={dropDownItem.alignTitleText}
										alignSubText={dropDownItem.alignSubText}
										textSubMenuWithCheckBox={
											dropDownItem.textSubMenuWithCheckBox
										}
										checkList={dropDownItem.checkList}
										onCheckboxChainChange={dropDownItem.onCheckboxChainChange}
									/>
								);
							})}
						</div>
						<Divider marginAll="10px" />
						<Button onClick={onClickApplication}>Aplicar</Button>
					</div>
					<div className="main-home-consumer">
						<Box
							display="flex"
							justify="center"
							alignItems="center"
							className="container-main-home-consumer"
						>
							{products.length == 0 ? (
								<Text>Não há resultados</Text>
							) : (
								products.map(item => (
									<Link
										key={item.params.id}
										to={`/product-consumer/${item.params.id}`}
									>
										<CardProductHomeConsumer isActive={formCard}>
											<CardEstablishmentFoodOrganism product={item} />
										</CardProductHomeConsumer>
									</Link>
								))
							)}
						</Box>
						<Box
							display="flex"
							flexDirection="row"
							justify="center"
							alignItems="center"
							margin="40px 0 0 0"
						>
							<Pagination
								totalPages={totalPagesProductFilter}
								onPageChange={onPageChange}
							/>
						</Box>
					</div>
					<div className="footer-home-consumer"></div>
				</ContainerHomeConsumer>
			</BodyTemplate>
		</>
	);
};

export default HomeConsumerTemplate;
