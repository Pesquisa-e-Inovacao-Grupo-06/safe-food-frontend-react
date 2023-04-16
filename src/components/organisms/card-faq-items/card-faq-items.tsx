import { Accordion } from "@/components/molecules/accordion";
import { QuestionItemEntity } from "@/app/domain/entities/QuestionItem";
import { Row } from "@/components/molecules/row/styles";
import styled from "styled-components";

export type CardFaqItemsOrganismProps = {
	questionItemList: QuestionItemEntity[];
};

export const CardFaqItemsOrganism: React.FC<CardFaqItemsOrganismProps> = ({
	questionItemList,
}) => {
	function faqItemsList(questionItemList: QuestionItemEntity[]) {
		return questionItemList.map((item, i) => {
			const renderItem = () => (
				<StyledFaqDiv
					style={{ maxWidth: "49%" }}
					key={item.title + i}
				>
					<Accordion title={item.title}>{item.text}</Accordion>
				</StyledFaqDiv>
			);

			return renderItem();
		});
	}
	return (
		<Row
			style={{
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

export const StyledFaqDiv = styled.div`
max-width: "49%";
backgorund-color: red;
/* @media(max-width: 1000px) {
	max-width: "100%";
	background-color: "red";
	
} */
`;


export const StyledBannerMobilePlatformContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-height: 100%;
	height: 100%;
	gap: 74;
	margin: 8px;
	padding: 20px;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;