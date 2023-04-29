import { Box } from "@/components/atoms/box";
import { Chips } from "@/components/atoms/chips/chips-atom";
import { FC } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { Restriction } from "@/app/domain/entities/Restriction";

export const RestrictionSignUpConsumer: FC<{
	restrictions: Restriction[];
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
						key={r.id}
						sizeChips="chips-lg"
						title={r.descricao}
					>
						{r.name}
					</Chips>
				))}
			</Box>
		</>
	);
};
