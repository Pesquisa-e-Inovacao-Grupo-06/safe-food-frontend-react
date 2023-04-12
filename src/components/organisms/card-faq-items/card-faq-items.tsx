import { Accordion } from "@/components/molecules/accordion";
import { StyledRow } from "../card-establishment-food/card-establishment-food-organism";
import { QuestionItemEntity } from "@/app/domain/entities/QuestionItem";

export type CardFaqItemsOrganismProps = {
	questionItemList: QuestionItemEntity[];
};

export const CardFaqItemsOrganism: React.FC<CardFaqItemsOrganismProps> = ({
	questionItemList,
}) => {
	function faqItemsList(questionItemList: QuestionItemEntity[]) {
		return questionItemList.map((item, i) => {
			const renderItem = () => (
				<div
					style={{ maxWidth: "49%" }}
					key={item.title + i}
				>
					<Accordion title={item.title}>{item.text}</Accordion>
				</div>
			);

			return renderItem();
		});
	}
	return (
		<StyledRow
			style={{
				flexWrap: "wrap",
				justifyContent: "unset",
				gap: "20px",
				justifyItems: "flex-start",
				width: "100%",
				alignItems: "flex-start",
			}}
		>
			{faqItemsList(questionItemList)}
		</StyledRow>
	);
};
