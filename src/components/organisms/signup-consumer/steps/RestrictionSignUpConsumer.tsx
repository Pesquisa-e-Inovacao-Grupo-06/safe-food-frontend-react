import { Box } from "@/components/atoms/box";
import { Chips } from "@/components/atoms/chips/chips-atom";
import { FC } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { useSignupConsumer } from "@/app/contexts/SignupConsumerProvider";
import { Restriction } from "@/app/domain/entities/Restriction";

export const RestrictionSignUpConsumer: FC<{
	restrictions: Restriction[];
}> = ({ restrictions }) => {
	// console.log(restrictions);

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
				{restrictions.map(
					(r, i) =>
						r.params.id && (
							<Chips
								key={r.params.id}
								sizeChips="chips-lg"
								onClick={st => {
									const data = consumer.restricoes;
									if (st) {
										data.push(r.params.id);
										setConsumer({
											...consumer,
											restricoes: data,
										});
									} else {
										const index = data.indexOf(r.params.id);
										if (index > -1) {
											data.splice(index, 1);
										}
									}

									setConsumer({
										...consumer,
										restricoes: data,
									});
								}}
								title={r.params.descricao}
							>
								{r.params.restricao}
							</Chips>
						)
				)}
			</Box>
		</>
	);
};
