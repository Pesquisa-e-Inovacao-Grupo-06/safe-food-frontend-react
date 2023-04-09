import { Box } from "@/components/atoms/box";
import { Column } from "@/components/atoms/column";
import { SelectAtom } from "@/components/atoms/select/select-atom";
import { TextAtom } from "@/components/atoms/text/text-atom";
import { TextField } from "@/components/atoms/textfield";
import { ButtonIcon } from "@/components/molecules/button/button-icon";
import { Row } from "@/components/molecules/row/styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import React, { FC } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { HeadingSignUpConsumer } from "./HeadingSignUpConsumer";

export const AdditionalSignUpConsumer: FC<{
	onClickGoBack: () => void;
	onClickAhead: () => void;
}> = ({ onClickAhead, onClickGoBack }) => {
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
			<Box
				width="100%"
				display="flex"
				margin="20px 0 0 0"
				justify="space-between"
			>
				<ButtonIcon
					icon={<BiLeftArrowAlt />}
					onClick={onClickGoBack}
					alignIcon="left"
					buttonStyle="outline"
					style={{
						height: 45,
					}}
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
					Finalizar
				</ButtonIcon>
			</Box>
		</>
	);
};
