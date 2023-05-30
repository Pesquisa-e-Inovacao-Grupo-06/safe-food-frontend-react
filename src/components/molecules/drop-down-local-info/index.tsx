import { Text } from '@/components/atoms/text';
import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { ContainerDropDownLocalInfo } from './styles';
import { Address } from '@/app/domain/entities/Address';
import { Button } from '@/components/atoms/button';
import { useNavigate } from 'react-router-dom';
import { ButtonIcon } from '../button/button-icon';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Divider } from '@/components/atoms/divider';

type Props = {
	children?: any;
	address: Address[];
};

const DropDownLocalInfo: React.FC<Props> = ({ children, address }) => {
	const navigate = useNavigate();
	const [active, setActive] = useState(false);
	const [repositores, setRepositories] = useState<Address[]>(address);
	const [valueText, setValueText] = useState<any>('Selecione um local');
	const [filterData, setFilterData] = useState<Address[]>(address);
	const [wordEntered, setWordEntered] = useState('');

	function setLocal(id: string) {
		repositores.map(repo => {
			return repo.params.apelido == id ? setValueText(repo.params.apelido) : '';
		});
		setActive(false);
		setWordEntered('');
		setFilterData([]);
	}

	const handleFilter = (event: any) => {
		const seacrhWorld = event.target.value;
		setWordEntered(seacrhWorld);
		const newFilter = repositores.filter(value => {
			return value.params.apelido != undefined
				? value.params.apelido.toLowerCase().includes(seacrhWorld.toLowerCase())
				: '';
		});

		if (seacrhWorld === '') {
			setFilterData([]);
		} else {
			setFilterData(newFilter);
		}
	};

	return (
		<>
			<ContainerDropDownLocalInfo active={active}>
				<div className="wrapper-dropdown-local-info">
					<div
						className="select-btn-dropdown-local-info"
						onClick={() => setActive(!active)}
					>
						<Text>
							<GoLocation />
							<span>{valueText}</span>
							<AiFillCaretDown />
						</Text>
					</div>
					<div className="content-dropdown-local-info">
						<div className="search-dropdown-local-info">
							<BiSearch />
							<input
								type="text"
								placeholder="Search"
								onChange={handleFilter}
								value={wordEntered}
							/>
						</div>

						<ul className="options-dropdown-local-info">
							{filterData.length > 0 ? (
								filterData.map(repo => {
									return (
										<li
											onClick={() => {
												repo.params.apelido != undefined
													? setLocal(repo.params.apelido)
													: '';
												navigate(
													`/home-consumer/${repo.params.cep}/${repo.params.numero}`
												);
											}}
											key={repo.params.apelido}
										>
											{repo.params.apelido}
										</li>
									);
								})
							) : (
								<></>
							)}
						</ul>
						<Divider marginTop="10px"></Divider>
						<Button
							onClick={() => {
								navigate('/profile');
							}}
						>
							<Text color="white">novo endereço</Text>
						</Button>
						<Divider marginTop="10px" />
						<Button
							onClick={() => {
								navigate('/profile');
							}}
							style={{ background: 'green', borderColor: 'green' }}
						>
							<Text color="white">pegar localização</Text>
						</Button>
					</div>
				</div>
			</ContainerDropDownLocalInfo>
		</>
	);
};

export default DropDownLocalInfo;
