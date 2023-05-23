import { Button } from "@/components/atoms/button";
import { Column } from "@/components/atoms/column";
import { Container } from "@/components/atoms/container";
import { Divider } from "@/components/atoms/divider";
import { TextField } from "@/components/molecules/textfield";
import { useState } from "react";
import styled from "styled-components";

export type LandingFormFoodOrganismProps = {
	textFieldFood: string;
	textFieldLocation: string;
	handleChangeFood: (value: any) => void;
	handleChangeLocation: (value: any) => void;
	onClickSearchLanding: () => void;
};

export const LandingFormFoodOrganism: React.FC<
	LandingFormFoodOrganismProps
> = ({
	handleChangeFood,
	handleChangeLocation,
	textFieldFood,
	textFieldLocation,
	onClickSearchLanding,
}) => {
	return (
		<ContainerLanding
			size="sm"
			height={"auto"}
			// style={{ width: "100%" }}
		>
			<Column style={{ width: "70%" }}>
				<TextField
					type="string"
					label={"O que vai querer hoje?"}
					id={""}
					required={false}
					onChange={handleChangeFood}
					value={textFieldFood}
					placeholder="Bolo de cenoura, Tapioca, Pizza..."
				></TextField>
				<Divider marginAll="10px" />
				<TextField
					type="string"
					label={"localização:"}
					id={""}
					required={false}
					onChange={handleChangeLocation}
					value={textFieldLocation}
					placeholder="Rua Sete de Dezembro, n° 7"
				></TextField>
				<Divider marginAll="10px" />

				<Button
					style={{ width: "100%", height: "40px" }}
					onClick={onClickSearchLanding}
				>
					Pesquisar
				</Button>
			</Column>
		</ContainerLanding>
	);
};

const ContainerLanding = styled(Container)`
	@media (max-width: 1200px) {
		display: flex;
	}
`;
