import { Box } from "@/components/atoms/box";
import { Column } from "@/components/atoms/column";
import { Row } from "@/components/molecules/row/styles";
import React, { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { HeadingSignUpConsumer } from "../complements/HeadingSignUpConsumer";
import { ProfilePhotoUploadWithPreview } from "@/components/molecules/upload-profile-photo";
import { TextAtom } from "@/components/atoms/text/text-atom";
import { TextField } from "@/components/molecules/textfield";

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
				<Row gap="20px">
					<Column>
						<TextField
							label="Telefone: "
							id="phone"
							required={false}
							value=""
							placeholder="(99) 99999-9999"
							onChange={() => {}}
							title="Digite seu Telefone celular completo"
							type="tel"
							inputMode="tel"
							error={""}
						/>
					</Column>
					<Column>
						<TextField
							label="CEP: "
							required={false}
							id="address-cep"
							value=""
							renderEndIcon={() => <FaSearch />}
							onChange={() => {}}
							placeholder="99999-999"
							title="Digite seu CEP"
							type="string"
							inputMode="numeric"
							error={""}
						/>
					</Column>
				</Row>
				<Row gap="20px">
					<Column>
						<TextField
							label="Logradouro: "
							id="address-logradouro"
							disabled
							required={false}
							value=""
							onChange={() => {}}
							title="Logradouro do endereço"
							error={""}
						/>
					</Column>
					<Column>
						<TextField
							label="Estado: "
							id="address-state"
							disabled
							required={false}
							value=""
							placeholder="SP"
							onChange={() => {}}
							title="Estado/UF de seu endereço"
							type="string"
							inputMode="text"
							error={""}
						/>
					</Column>
				</Row>
				<Row gap="20px">
					<Column>
						<TextField
							label="Número: "
							required={false} // TODO Depende
							disabled={false} // depende
							id="address-number"
							value=""
							onChange={() => {}}
							placeholder="123"
							title="Digite o número de seu endereço"
							type="string"
							error={""}
						/>
					</Column>
					<Column>
						<TextField
							label="Complemento: "
							required={false}
							disabled={false} // depende
							id="address-complement"
							value=""
							onChange={() => {}}
							title="Complemento de seu endereço"
							type="string"
							error={""}
						/>
					</Column>
				</Row>
			</Box>
		</>
	);
};
