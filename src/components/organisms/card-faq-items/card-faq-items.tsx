import { Accordion } from "@/components/molecules/accordion";
import { StyledRow } from "../card-establishment-food/card-establishment-food-organism";
import { QuestionItemEntity } from "@/app/domain/entities/QuestionItem";
import styled from "styled-components";
import { Row } from "@/components/molecules/row/styles";

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
					style={{
						maxWidth: "49%",

					}}
					key={item.title + i}
				>
					<Accordion title={item.title}>{item.text}</Accordion>
				</div>
			);

			return renderItem();
		});
	}
	return (
		<Row
			style={{
				// flexWrap: "wrap",
				justifyContent: "unset",
				gap: "20px",
				justifyItems: "flex-start",
				width: "100%",
				alignItems: "flex-start",
			}}
		>
			{faqItemsList(questionItemList)}
		</Row>
	);
};
