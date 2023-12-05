import { ProfileEstablishmentTemplate } from '@/components/templates/profile-establishment-template';
import { Cache } from '@/app/domain/protocols/Cache';
import { SafeFoodEstablishmentModel, SafeFoodUpdateEstablishmentRequest } from '@/app/infra/gateway/safefood/models/SafeFoodEstablishment';
import { useEffect, useState } from 'react';
import { SafeFoodEstablishmentGateway } from '../app/infra/gateway/safefood/SafeFoodEstablishmentGateway';
import { AlertType } from '@/components/atoms/alert';
import { SafeFoodResponse } from '@/app/infra/gateway/safefood/models/SafeFoodResponse';
import { useNavigate } from 'react-router';
import { SafeFoodAddressModel } from '@/app/infra/gateway/safefood/models/SafeFoodAddress';
import { SafeFoodLoginResponse } from '@/app/infra/gateway/safefood/models/SafeFoodUser';
import { FindAddress } from '@/app/domain/usecases/FindAddress';
import { CepValidator } from '@/app/util/validations/cep-validator';
import { PhoneValidator } from '@/app/util/validations/phone-validator';
import { CnpjValidator } from '@/app/util/validations/cnpj-validator';

type ProfileEstablishment = {
	cache: Cache;
	establishmentGateway: SafeFoodEstablishmentGateway;
	findAddressUsecase: FindAddress,
	cepValidator: CepValidator;
	phoneValidator: PhoneValidator;
	cnpjValidator: CnpjValidator
};

function ProfileEstablishment({
	cache,
	establishmentGateway,
	findAddressUsecase,
	cepValidator,
	phoneValidator,
	cnpjValidator
}: ProfileEstablishment) {
	const navigate = useNavigate();

	const establishment: SafeFoodEstablishmentModel =
		cache.getItem('establishment') !== null
			? JSON.parse(cache.getItem('establishment')!)
			: {};

	const [establishmentState, setEstablishmentState] = useState<SafeFoodEstablishmentModel>(establishment)

	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};

	//CAMPOS
	const [imageProfile, setImageProfile] = useState<File>();
	const [name, setName] = useState(establishment.nome);
	const [tempoEsperaMedio, setTempoEsperaMedio] = useState(establishment.tempoEsperaMedio || '');
	const [horarioFuncionamento, setHorarioFuncionamento] = useState(establishment.horarioFuncionamentoSemana);
	const [horarioFuncionamentoFds, setHorarioFuncionamentoFds] = useState(establishment.horarioFuncionamentoFimDeSemana);
	const [isDelivery, setIsDelivery] = useState(establishment.isDelivery || false);
	const [isFreeShipping, setIsFreeShipping] = useState(establishment.isFreteGratis || false);
	const [isPickInPlace, setIsPickInPlace] = useState(establishment.isRetireNoLocal || false);
	const [email, setEmail] = useState(establishment.email);
	const [numberphone, setNumberPhone] = useState(establishment.celular);
	const [nameEstablishment, setNameEstablishment] = useState(
		establishment.nomeEmpresa
	);
	const [cnpj, setCNPJ] = useState(establishment.cnpj);
	const [cellphone, setCellphone] = useState(establishment.celular);
	const [contact, setContact] = useState(establishment.contatoCliente);
	const [description, setDescription] = useState(establishment.descricao);

	//Actions
	const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isAlertVisible, setIsVisibleAlert] = useState<boolean>(false);
	const [typeAlert, setTypeAlert] = useState<AlertType>();
	const [textAlert, setTextAlert] = useState<string>();
	const [isEditable, setIsEditable] = useState<boolean>(false);
	const [modalAddress, setModalAddress] = useState<boolean>(false);


	const [modalCep, setModalCep] = useState<string>("");
	const [modalNumero, setModalNumero] = useState<string>("");
	const [modalApelido, setModalApelido] = useState<string>("");

	const onClickUpdateInfo = async ({
		celular,
		cnpj, contatoCliente, descricao,
		email, nome, nomeEmpresa, horarioFuncionamentoFimDeSemana, horarioFuncionamentoSemana, delivery, freteGratis, retireNoLocal, tempoEsperaMedio }: SafeFoodUpdateEstablishmentRequest) => {
		setIsLoading(true);
		try {
			const request: SafeFoodUpdateEstablishmentRequest = {
				nome,
				email,
				nomeEmpresa,
				descricao,
				celular,
				contatoCliente,
				cnpj,
				horarioFuncionamentoFimDeSemana,
				horarioFuncionamentoSemana,
				delivery: delivery || false,
				freteGratis: freteGratis || false,
				retireNoLocal: retireNoLocal || false,
				tempoEsperaMedio
			}

			if (typeof imageProfile == "object") {
				request.file = imageProfile;
			}

			if (!request.celular) delete request.celular
			if (!request.contatoCliente) delete request.contatoCliente;

			const res = await establishmentGateway.update(establishment.id, request);

			if (res?.status !== 200) {
				setIsVisibleAlert(true);
				setTypeAlert('warning');
				setTextAlert('Alguns dados podem estar com formato incorreto!');
				return;
			}

			setIsLoading(false);
			setTypeAlert('success');
			setTextAlert('Cadastro alterado com sucesso!');
		} catch (e) {
		} finally {
			setIsLoading(false);
		}
	};

	const deleteUser = async (id: number) => {
		if (!id) {
			return;
		}
		try {
			const res = await establishmentGateway.remove(id);
			const validStatus = [200, 204];
			if (!validStatus.includes(res.status)) {
				window.location.href = '/';
			}
		} catch (e) {
			console.log(e);
		}
	};

	const onClickChangePassword = () => {
		navigate('/change-password');
	};

	const handleAddressCardClick = (address: SafeFoodAddressModel) => {
		setModalAddress(true);
	};

	const importArchiveTxt = async (file: File): Promise<SafeFoodResponse> => {
		return establishmentGateway.importProducts(establishment.id, file);
	};
	const updateAddress = async (address: SafeFoodAddressModel) => {
		if (!address) {
			return;
		}
		try {
			const response = await establishmentGateway.updateAddress(
				user.usuario.id,
				address
			);
			const validStatus = [200, 201];
			if (!validStatus.includes(response.status)) {
				setTypeAlert("warning");
				setTextAlert("Erro ao cadastrar o endereço");
			} else {
				// const indexAddress = consumerState.enderecos.findIndex(
				// 	item => item.id === response.data.id
				// );
				// consumerState.enderecos[indexAddress] = response.data;
				// updateConsumer(consumerState);
				setTypeAlert("success");
				setTextAlert("Endereço atualizado com sucesso");

			}
		} catch (e) {
			setTypeAlert("warning");
			setTextAlert("Erro ao atualizar o endereço");
		} finally {
			setIsVisibleAlert(true);
			setModalAddress(false);
		}
	}

	const findAddress = (cep: string) => {
		findAddressUsecase
			.execute(cep)
			.then(({ params }) => {
				const {
					complemento,
					logradouro,
					estado,
					bairro,
					cidade,
				} = params;

				setEstablishmentState({
					...establishmentState,
					endereco: {
						id: establishmentState.endereco?.id,
						cep: modalCep || "",
						complemento: complemento || "",
						logradouro: logradouro || "",
						estado: estado || "",
						bairro: bairro || "",
						cidade: cidade || "",
						numero: modalNumero || "",
						apelido: modalApelido || "",
					}
				})
			})
			.catch(err => {
				// clearAddress(cep);
				// setError("CEP invalido");
			});
	};

	useEffect(() => {
		if (modalCep.length > 8) {
			findAddress(modalCep);
		}
	}, [modalCep, modalApelido, modalNumero]);

	return establishment ? (
		<ProfileEstablishmentTemplate
			fileChange={file => {
				setImageProfile(file);
			}}
			updateAddress={updateAddress}
			apelido={modalApelido}
			cep={modalCep}
			numero={modalNumero}
			importArchiveTxt={importArchiveTxt}
			isModalVisible={modalAddress}
			onChange={async (ev) => {
				const str = ev.currentTarget.value;
				const value = cepValidator.format(str);
				// setModalAddress(value);
				setModalCep(value);
				if (value.length > 8) {
					findAddress(modalCep);
				}

				setEstablishmentState({
					...establishmentState,
					endereco: {
						...establishmentState.endereco!,
						cep: value
					}
				})
			}}
			onChangeNumero={e => {
				const value = e.currentTarget.value
				setModalNumero(value);
				const newAddress = {
					...establishmentState.endereco!,
					numero: value
				}
				setEstablishmentState({
					...establishmentState,
					endereco: newAddress
				})
			}}
			onChangeApelido={e => {
				setModalApelido(e.currentTarget.value);
				setEstablishmentState({
					...establishmentState,
					endereco: {
						...establishmentState.endereco!,
						apelido: e.currentTarget.value
					}
				})
			}}
			toggleModal={() => {
				setModalAddress(!modalAddress);
			}}
			establishment={establishmentState}
			listOfComponentAdministration={[
				{
					name: 'Nome: ',
					value: name,
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							nome: state
						})
						setName(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Email: ',
					value: email,
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							email: state
						})
						setEmail(state)
					},
					disabled: !isEditable,
				}
			]}
			listOfComponentEstablishment={[
				{
					name: 'Nome da empresa: ',
					value: nameEstablishment,
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							nomeEmpresa: state
						})
						setNameEstablishment(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Cnpj: ',
					value: cnpjValidator.format(cnpj),
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							cnpj: state
						})
						setCNPJ(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Celular (responsável): ',
					value: phoneValidator.format(cellphone || ''),
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							celular: state
						})
						setCellphone(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Contato (WhatsApp para clientes): ',
					value: phoneValidator.format(contact || ""),
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							contatoCliente: state
						})
						setContact(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Descrição: ',
					value: description,
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							descricao: state
						})
						setDescription(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Tempo de espera (médio): ',
					value: tempoEsperaMedio,
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							tempoEsperaMedio: state
						})
						setTempoEsperaMedio(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Horário de funcionamento (semana): ',
					value: horarioFuncionamento || '',
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							horarioFuncionamentoSemana: state
						})
						setHorarioFuncionamento(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Horário de funcionamento (fim de semana): ',
					value: horarioFuncionamentoFds || '',
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							horarioFuncionamentoFimDeSemana: state
						})
						setHorarioFuncionamentoFds(state)
					},
					disabled: !isEditable,
				},
				{
					name: 'Frete Gratis: ',
					value: isFreeShipping || false,
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							isFreteGratis: !isFreeShipping
						})
						setIsFreeShipping(!isFreeShipping)
					},
					disabled: !isEditable,
				},
				{
					name: 'Faz entrega (delivery): ',
					value: isDelivery || false,
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							isDelivery: !isDelivery
						})
						setIsDelivery(!isDelivery)
					},
					disabled: !isEditable,
				},
				{
					name: 'Pode retirar no local: ',
					value: isPickInPlace || false,
					setUseState: (state) => {
						setEstablishmentState({
							...establishmentState,
							isRetireNoLocal: !isPickInPlace
						})
						setIsPickInPlace(!isPickInPlace)
					},
					disabled: !isEditable,
				},
			]}
			urlDefault={establishment.imagem}
			onClickSave={onClickUpdateInfo}
			isSaveButtonActive={isActiveButton}
			isLoading={isLoading}
			isAlertVisible={isAlertVisible}
			textAlert={textAlert}
			typeAlert={typeAlert}
			onClickChangePassword={onClickChangePassword}
			cache={cache}
			onClickCard={(address) => {
				handleAddressCardClick(address)
			}}
			deleteUser={deleteUser}
			isEditable={isEditable}
			onClickEditable={() => setIsEditable(true)}
			onClickSaveButton={() => {
				setIsEditable(false);
				// onClickUpdate()
			}}
		/>
	) : (
		<h1>Carregando...</h1>
	);
}
export default ProfileEstablishment;
