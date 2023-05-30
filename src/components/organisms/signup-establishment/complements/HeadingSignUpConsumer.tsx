import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { Alert } from "@/components/atoms/alert";
import { Box } from "@/components/atoms/box";
import { Text } from "@/components/atoms/text";
import { Subtitle } from "@/styles/components/text/Subtitle";
import React from "react";

export const HeadingSignUpConsumer: React.FC<{
	title: string;
	text: string;
}> = ({ text, title }) => {
	const { colors } = useSafeFoodTheme().getTheme();
	const { errors } = useSignupEstablishment();

	return (
		<Box
			display="flex"
			justify="center"
			flexDirection="column"
			margin="10px 0"
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
			{errors && errors.length > 0 ? (
				<Alert
					type="warning"
					title="Ops... Encontramos alguns problemas"
				>
					{errors.map(item => (
						<li
							key={item}
							style={{ marginLeft: 16 }}
						>
							{item}
						</li>
					))}
				</Alert>
			) : (
				<></>
			)}
		</Box>
	);
};
