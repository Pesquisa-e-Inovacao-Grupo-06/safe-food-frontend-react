import { Box } from "@/components/atoms/box";
import { Chips } from "@/components/atoms/chips/chips-atom";
import { FC } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { Restriction } from "@/app/domain/entities/Restriction";
import { useSignupConsumer } from "@/app/contexts/SignupConsumerProvider";

export const RestrictionSignUpConsumer: FC<{
	restrictions: Restriction[];
}> = ({ restrictions }) => {
	const { consumer, setConsumer } = useSignupConsumer();
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
						onClick={st => {
							const data = consumer.restricoes;
							if (st) {
								data.push(r.id);
								setConsumer({
									...consumer,
									restricoes: data,
								});
							} else {
								const index = data.indexOf(r.id);
								if (index > -1) {
									data.splice(index, 1);
								}
							}

							setConsumer({
								...consumer,
								restricoes: data,
							});
						}}
						title={r.descricao}
					>
						{r.name}
					</Chips>
				))}
			</Box>
		</>
	);
};
