import { Box } from "@/components/atoms/box";
import { Chips } from "@/components/atoms/chips/chips-atom";
import React, { FC } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";

export const RestrictionSignUpConsumer: FC<{
	restrictions: string[];
}> = ({ restrictions }) => {
	return (
		<>
			<HeadingSignUpConsumer
				text="Para uma melhor experiência no nosso site, levaremos em conta suas
            restrições. Preencha suas alergias, intolerâncias ou alguma dieta."
				title="Restrições"
			/>
			<Box
				display="flex"
				justify="center"
				gap="10px"
				margin="0 auto"
				style={{
					flexWrap: "wrap",
				}}
			>
				{restrictions.map((r, i) => (
					<Chips
						key={r + i}
						sizeChips="chips-lg"
					>
						{r}
					</Chips>
				))}
			</Box>
		</>
	);
};
