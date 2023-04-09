import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { Chips } from "@/components/atoms/chips/chips-atom";
import { TextAtom } from "@/components/atoms/text/text-atom";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { Subtitle } from "@/styles/components/text/Subtitle";
import React, { FC } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { HeadingSignUpConsumer } from "./HeadingSignUpConsumer";

export const RestrictionSignUpConsumer: FC<{
	restrictions: string[];
	onClickAhead: () => void;
	onClickGoBack: () => void;
}> = ({ restrictions, onClickAhead, onClickGoBack }) => {
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

			<Box
				width="100%"
				display="flex"
				margin="20px 0 0 0"
				justify="space-between"
			>
				<ButtonIcon
					icon={<BiLeftArrowAlt />}
					alignIcon="left"
					buttonStyle="outline"
					onClick={onClickGoBack}
				>
					Voltar
				</ButtonIcon>
				<ButtonIcon
					icon={<BiRightArrowAlt />}
					onClick={onClickAhead}
					style={{
						height: 45,
					}}
				>
					Adicionais
				</ButtonIcon>
			</Box>
		</>
	);
};
