import { ContainerFluid } from "@/components/atoms/container";
import Header from "@/components/molecules/header";
import { Divider } from "./home";
import { Title } from "@/styles/components/text/Title";
import { Box } from "@/components/atoms/box";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { StyledRow } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { Button } from "@/components/atoms/button";
import { CardFaqItemsOrganism } from "../components/organisms/card-faq-items/card-faq-items";
import { useState } from "react";
import { questionConsumerListMock } from "../app/domain/entities/QuestionItem";
import {
	QuestionItemEntity,
	questionEstablishmentListMock,
} from "@/app/domain/entities/QuestionItem";

function FAQ() {
	const [isConsumerSelected, setIsConsumerSelected] = useState(false);
	var questionListMock: QuestionItemEntity[] = [];
	const handleIsConsumerSelected = () => {
		setIsConsumerSelected(!isConsumerSelected);

		if (isConsumerSelected) {
			questionListMock = questionEstablishmentListMock;
			console.log(questionListMock);
		} else {
			questionListMock = questionConsumerListMock;
			console.log(questionListMock);
		}
	};
	return (
		<>
			<Header />
			<ContainerFluid
				display="flex"
				justify="space-between"
			>
				<Box
					display="flex"
					justify="center"
					flexDiretion="column"
					gap="30px"
				>
					<Divider marginBottom="100px"></Divider>
					<Title>Perguntas frequentes (FAQ)</Title>
					<Subtitle>
						Essas são algumas perguntas frequentemente feitas para a gente
					</Subtitle>
					<div
						style={{
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
						}}
					>
						<StyledRow style={{ justifyContent: "space-around", width: "80%" }}>
							<Button onClick={handleIsConsumerSelected}>Estabelecimento</Button>
							<Button onClick={handleIsConsumerSelected}>Consumidor</Button>
						</StyledRow>
					</div>
					<CardFaqItemsOrganism questionItemList={questionListMock} />
				</Box>
			</ContainerFluid>
		</>
	);
}

export default FAQ;
