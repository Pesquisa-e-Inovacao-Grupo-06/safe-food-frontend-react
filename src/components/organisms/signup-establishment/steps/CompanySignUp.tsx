import { Box } from "@/components/atoms/box";
import React, { FC } from "react";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { PhoneValidator } from "@/app/util/validations/phone-validator";
import { InputPhoneSignupWpp } from "../inputs/InputPhoneSignUpWpp";
import { InputPhoneSignupFixo } from "../inputs/InputPhoneSignUpFixo";
import { InputCnpjSignUp } from "../inputs/InputCnpjSignUp";
import { CnpjValidator } from "@/app/util/validations/cnpj-validator";
import { InputNameSignUpEstablishment } from "../inputs/InputNameSignUpEstablishment";
import { JustStringAndSpaceValidator } from "@/app/util/validations/just-string-and-space";
import { useInputsValidator } from "@/app/contexts/InputValidatorsProvider";
import TextArea from "@/components/atoms/textarea";
import { useSignupEstablishment } from "@/app/contexts/SignupEstablishmentProvider";
import { TextField } from "@/components/molecules/textfield";
import { ProfilePhotoUploadWithPreview } from "@/components/molecules/upload-profile-photo";
import { Text } from "@/components/atoms/text";

export const CompanySignUp: FC = () => {
	const { getCnpjValidator, getPhoneValidator, getJustStringValidator } =
		useInputsValidator();
	const cnpjValidator = getCnpjValidator();
	const phoneValidator = getPhoneValidator();
	const stringValidator = getJustStringValidator(5, 100);

	const { establishment, setEstablishment } = useSignupEstablishment();

	return (
		<>
			<HeadingSignUpConsumer
				title="Infomações de empresa"
				text="Por favor, preencha os dados essenciais para a gente conhecer a sua empresa e logo cadastrar seus produtos."
			/>
			<Box
				gap="12px"
				display="flex"
				flexDirection="column"
			>
				<Text typeText="text-md">Foto de perfil: </Text>
				<ProfilePhotoUploadWithPreview
					width="120px"
					name="additional-profile-photo-consumer"
					id="additional-profile-photo-consumer"
					fileChange={file =>
						setEstablishment({
							...establishment,
							file,
						})
					}
				/>
				<InputNameSignUpEstablishment validator={stringValidator} />
				<InputCnpjSignUp validator={cnpjValidator} />
				<TextField
					label="Descricao"
					required={true}
					id="additional-description"
					value={establishment.descricao}
					title="Faca um breve resumo do que seu estabelecimento fornece e uma descricao para os consumidores verem"
					type="string"
					name="additional-description"
					inputMode="text"
					max={100}
					min={5}
					onChange={ev => {
						let str = ev.currentTarget.value;
						setEstablishment({
							...establishment,
							descricao: str,
						});
					}}
				/>
				<InputPhoneSignupWpp validator={phoneValidator} />
				<InputPhoneSignupFixo validator={phoneValidator} />
			</Box>
		</>
	);
};
