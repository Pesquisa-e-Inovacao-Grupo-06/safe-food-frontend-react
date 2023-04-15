import { ContainerFluid } from "@/components/atoms/container";
import Header from "@/components/molecules/header";
import { Title } from "@/styles/components/text/Title";
import { Box } from "@/components/atoms/box";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { StyledRow } from "@/components/organisms/card-establishment-food/card-establishment-food-organism";
import { Button } from "@/components/atoms/button";
import { CardFaqItemsOrganism } from "../components/organisms/card-faq-items/card-faq-items";
import { useState } from "react";
import { getQuestionConsumerListMock } from "../app/domain/entities/QuestionItem";
import {
	getQuestionEstablishmentListMock,
} from "@/app/domain/entities/QuestionItem";
import { Divider } from "@/components/atoms/divider";

function FAQ() {
	const [isConsumerSelected, setIsConsumerSelected] = useState(false);
	const [list, setList] = useState(getQuestionEstablishmentListMock);
	const handleIsConsumerSelected = () => {
		setIsConsumerSelected(!isConsumerSelected);
		setList(
			isConsumerSelected
				? getQuestionEstablishmentListMock
				: getQuestionConsumerListMock
		);
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
					<Divider marginBottom="100px" />
					<Title>Perguntas frequentes (FAQ)</Title>
					<Subtitle>
						Essas são algumas perguntas frequentes que nos são feitas
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
							<Button
								onClick={handleIsConsumerSelected}
								disabled={!isConsumerSelected}
							>
								Estabelecimento
							</Button>
							<Button
								onClick={handleIsConsumerSelected}
								disabled={isConsumerSelected}
							>
								Consumidor
							</Button>
						</StyledRow>
					</div>
					<CardFaqItemsOrganism questionItemList={list} />
				</Box>
			</ContainerFluid>
		</>
	);
}

export default FAQ;
