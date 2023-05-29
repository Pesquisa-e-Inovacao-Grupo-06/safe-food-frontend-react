import { Box } from '@/components/atoms/box';
import { Column } from '@/components/atoms/column';
import { Row } from '@/components/molecules/row/styles';
import React, { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { HeadingSignUpConsumer } from '../complements/HeadingSignUpConsumer';
import { ProfilePhotoUploadWithPreview } from '@/components/molecules/upload-profile-photo';
import { Text } from '@/components/atoms/text';
import { TextField } from '@/components/molecules/textfield';
import moment from 'moment';
import { useInputsValidator } from '@/app/contexts/InputValidatorsProvider';
import { FindAddress } from '@/app/domain/usecases/FindAddress';
import { useSignupConsumer } from '@/app/contexts/SignupConsumerProvider';
import { FaSearch } from 'react-icons/fa';
import { DateValidator } from '@/app/util/validations/date-validator';

export const AdditionalSignUpConsumer: FC<{
	useCase: FindAddress;
}> = ({ useCase }) => {
	const { consumer, setConsumer } = useSignupConsumer();

	const { getPhoneValidator, getCepValidator, getDateValidator } =
		useInputsValidator();

	const phoneValidator = getPhoneValidator();
	const cepValidator = getCepValidator();
	const dateValidator = getDateValidator();

	const [phoneError, setPhoneError] = useState('');
	const [errorDate, setDateError] = useState('');

	const [errorCep, setCepError] = useState('');

	useEffect(() => {
		console.log(consumer);
	}, [consumer]);

	const changePhoneInput = (ev: FormEvent<HTMLInputElement>) => {
		let str = ev.currentTarget.value;
		let value = phoneValidator.format(str);
		setConsumer({
			...consumer,
			telefone: value,
		});
		if (value.length > 0) {
			const errors = phoneValidator.validate(value);
			if (errors.length > 0) {
				setPhoneError(errors.join(';'));
			} else {
				setPhoneError('');
			}
		} else {
			setPhoneError('');
		}
	};

	const changeBirthDateInput = (ev: FormEvent<HTMLInputElement>) => {
		let str = ev.currentTarget.value;
		let mdate = moment(str);
		// TODO AFTER
		let value = dateValidator.format(str);
		setConsumer({
			...consumer,
			dataNascimento: value,
		});
		const errors = dateValidator.validate(value);
		if (errors.length > 0) {
			setDateError(errors.join(';'));
		} else {
			setDateError('');
		}
	};
	const clearAddress = () => {
		setConsumer({
			...consumer,
			bairro: '',
			cidade: '',
			complemento: '',
			cep: '',
			numero: '',
			estado: '',
			logradouro: '',
		});
	};

	const findAddress = (cep: string) => {
		useCase
			.execute(cep)
			.then(({ params }) => {
				const { cep, complemento, logradouro, estado, bairro, cidade } = params;
				setConsumer({
					...consumer,
					cep: cep || '',
					estado: estado || '',
					logradouro: logradouro || '',
					complemento: complemento || '',
					bairro: bairro || '',
					cidade: cidade || '',
				});
			})
			.catch(err => {
				clearAddress();
				setCepError('CEP invalido');
			});
	};
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
				flexDirection="column"
			>
				<Text typeText="text-md">Foto de perfil: </Text>
				<ProfilePhotoUploadWithPreview
					width="120px"
					name="additional-profile-photo-consumer"
					id="additional-profile-photo-consumer"
					fileChange={file =>
						setConsumer({
							...consumer,
							file,
						})
					}
				/>
				<Row>
					<Column maxWidth="48%">
						<TextField
							label="Celular: "
							required={false}
							id="additional-phone"
							value={consumer.telefone}
							placeholder="(00) 00000-0000"
							title="Digite seu número de celular"
							type="tel"
							name="additional-phone"
							inputMode="tel"
							max={15}
							min={11}
							onChange={changePhoneInput}
							error={phoneError}
						/>
					</Column>
					<Column maxWidth="48%">
						<TextField
							label="Data de nascimento: "
							required={false}
							id="additional-birthday"
							name="additional-birthday"
							title="Selecione a data de seu nascimento"
							type="string"
							min={8}
							max={8}
							inputMode="numeric"
							value={consumer.dataNascimento}
							onChange={changeBirthDateInput}
							error={errorDate}
						/>
					</Column>
				</Row>

				<Row>
					<Column maxWidth="48%">
						<TextField
							label="CEP: "
							required={false}
							id="address-cep"
							value={consumer.cep || ''}
							renderEndIcon={() => <FaSearch />}
							onChange={ev => {
								const str = ev.currentTarget.value;
								const value = cepValidator.format(str);
								setConsumer({
									...consumer,
									cep: value,
								});
								if (str.length > 0) {
									const errors = cepValidator.validate(value);
									if (errors.length == 0) {
										setCepError('');
										findAddress(value);
									} else {
										setCepError(errors.join(';'));
									}
								} else {
									clearAddress();
									setCepError('');
								}
							}}
							placeholder="00000-000"
							title="Digite seu CEP"
							type="string"
							min={9}
							max={9}
							inputMode="numeric"
							error={errorCep}
						/>
					</Column>
					<Column maxWidth="48%">
						<TextField
							label="Estado: "
							id="address-state"
							disabled
							required={!!consumer.cep}
							value={consumer.estado}
							placeholder="SP"
							onChange={() => { }}
							title="Estado/UF de seu endereço"
							type="string"
							inputMode="text"
						/>
					</Column>
				</Row>
				<Row>
					<Column maxWidth="48%">
						<TextField
							label="Bairro: "
							required={!!consumer.cep}
							id="address-bairro"
							value={consumer.bairro}
							onChange={() => { }}
							title="Digite seu bairro"
							type="string"
							disabled
							max={100}
						/>
					</Column>
					<Column maxWidth="48%">
						<TextField
							label="Cidade: "
							id="address-state"
							disabled
							required={!!consumer.cep}
							value={consumer.cidade}
							onChange={() => { }}
							title="Digite sua cidade"
							type="string"
							inputMode="text"
						/>
					</Column>
				</Row>
				<Row gap="20px">
					<Column>
						<TextField
							label="Logradouro: "
							id="address-logradouro"
							disabled
							required={!!consumer.cep}
							value={consumer.logradouro}
							onChange={() => { }}
							title="Logradouro do endereço"
						/>
					</Column>
				</Row>
				<Row gap="20px">
					<Column
						size={1}
						maxWidth="120px"
					>
						<TextField
							label="Número: "
							required={!!consumer.cep}
							disabled={!consumer.cep}
							id="address-number"
							value={consumer.numero}
							onChange={ev => {
								setConsumer({
									...consumer,
									numero: ev.currentTarget.value,
								});
							}}
							placeholder="123"
							title="Digite o número de seu endereço"
							type="string"
						/>
					</Column>
					<Column size={3}>
						<TextField
							label="Complemento: "
							required={false}
							disabled={!consumer.cep}
							id="address-complement"
							value={consumer.complemento}
							onChange={ev => {
								setConsumer({
									...consumer,
									complemento: ev.currentTarget.value,
								});
							}}
							title="Complemento de seu endereço"
							type="string"
						/>
					</Column>
				</Row>
			</Box>
		</>
	);
};
