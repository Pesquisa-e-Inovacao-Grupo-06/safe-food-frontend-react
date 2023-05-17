import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { Box } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import { Subtitle } from "@/styles/components/text/Subtitle";
import React from "react";

export const HeadingSignUpConsumer: React.FC<{
	title: string;
	text: string;
}> = ({ text, title }) => {
	const { colors } = useSafeFoodTheme().getTheme();
	return (
		<Box
			display="flex"
			justify="center"
			flexDirection="column"
			margin="10px 20px"
			gap="12px"
			id="signup-heading"
		>
			<Subtitle
				large
				center
			>
				{title}
			</Subtitle>
			<Text
				typeText="text-md"
				align="center"
				style={{
					color: colors.dark_gray[200],
				}}
			>
				{text}
			</Text>
		</Box>
	);
};
