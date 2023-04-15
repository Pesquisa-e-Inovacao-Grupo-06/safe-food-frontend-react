import { Box } from "@/components/atoms/box";
import { Column } from "@/components/atoms/column";
import { Row } from "@/components/molecules/row/styles";
import React, { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { ProfilePhotoUploadWithPreview } from "@/components/molecules/upload-profile-photo";
import { TextAtom } from "@/components/atoms/text";
import { TextField } from "@/components/molecules/textfield";
import { InputPhoneSignup } from "../inputs/InputPhoneSignUpConsumer";
import { PhoneValidator } from "@/app/util/validations/phone-validator";
import { InputBirthdateSignUp } from "../inputs/InputBirthdateSignUpConsumer";
import { InputsAddressSignupConsumer } from "../inputs/InputsAddressSignUpConsumer";
import { makeFindAddress } from "@/app/factories/makeFindAddressViaCep";
import { CepValidator } from "@/app/util/validations/cep-validator";

export const AdditionalSignUpConsumer: FC = () => {
	return (
		<>
			<HeadingSignUpConsumer
				title="Informações adicionais"
				text="Ah, mais uma coisa! Queremos conhecer você melhor para que possamos tornar
                sua experiência ainda mais incrível."
			/>
			<Box
				gap="12px"
				display="flex"
				flexDiretion="column"
			>
				<TextAtom typeText="text-md">Foto de perfil: </TextAtom>
				<ProfilePhotoUploadWithPreview
					width="120px"
					name="additional-profile-photo-consumer"
					id="additional-profile-photo-consumer"
				/>
				<Row>
					<Column maxWidth="48%">
						<InputPhoneSignup validator={new PhoneValidator()} />
					</Column>
					<Column maxWidth="48%">
						<InputBirthdateSignUp validator={new PhoneValidator()} />
					</Column>
				</Row>

				<InputsAddressSignupConsumer
					usecase={makeFindAddress()}
					validator={new CepValidator()}
				/>
			</Box>
		</>
	);
};
