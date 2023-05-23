import { Text } from "@/components/atoms/text";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import { ContainerDropDownLocalInfo } from "./styles";

type Props = {
	children?: any;
};

const DropDownLocalInfo: React.FC<Props> = ({ children }) => {
	const [active, setActive] = useState(false);
	const [repositores, setRepositories] = useState<any[]>([]);
	const [valueText, setValueText] = useState<any>("Selecione um local");
	const [filterData, setFilterData] = useState<any[]>([]);
	const [wordEntered, setWordEntered] = useState("");

	function setLocal(id: number) {
		repositores.map(repo => {
			return repo.id == id ? setValueText(repo.name) : "";
		});
		setActive(false);
		setWordEntered("");
		setFilterData([]);
	}

	const handleFilter = (event: any) => {
		const seacrhWorld = event.target.value;
		setWordEntered(seacrhWorld);
		const newFilter = repositores.filter(value => {
			return value.name.toLowerCase().includes(seacrhWorld.toLowerCase());
		});

		if (seacrhWorld === "") {
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
						{filterData.length != 0 && (
							<ul className="options-dropdown-local-info">
								{filterData.slice(0, 15).map(repo => {
									return <li onClick={() => setLocal(repo.id)}>{repo.name}</li>;
								})}
							</ul>
						)}
					</div>
				</div>
			</ContainerDropDownLocalInfo>
		</>
	);
};

export default DropDownLocalInfo;
