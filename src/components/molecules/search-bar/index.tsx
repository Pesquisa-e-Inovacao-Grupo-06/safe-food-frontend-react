import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { ContainerSearchBar } from "./styles";

type Props = {
	children?: any;
};

const SearchBar: React.FC<Props> = ({ children }) => {
	const [repositores, setRepositories] = useState<any[]>([]);
	const [filterData, setFilterData] = useState<any[]>([]);
	const [wordEntered, setWordEntered] = useState("");

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const response = await fetch("https://api.github.com/users/guivicsan/repos");
		const data = await response.json();
		setRepositories(data);
	}

	function setLocal(id: number) {
		repositores.map(repo => {
			return repo.id == id ? setWordEntered(repo.name) : "";
		});
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

	const clearInput = () => {
		setFilterData([]);
		setWordEntered("");
	};

	return (
		<>
			<ContainerSearchBar>
				<div className="container-search-bar">
					<input
						type="text"
						placeholder="Search"
						onChange={handleFilter}
						value={wordEntered}
					/>
					{wordEntered.length == 0 ? (
						<IoCloseSharp visibility="hidden" />
					) : (
						<IoCloseSharp onClick={clearInput} />
					)}
					<BiSearch />
				</div>
				{filterData.length != 0 && (
					<div className="content-search-bar">
						<ul className="options-search-bar">
							{filterData.slice(0, 15).map(repo => {
								return <li onClick={() => setLocal(repo.id)}>{repo.name}</li>;
							})}
						</ul>
					</div>
				)}
			</ContainerSearchBar>
		</>
	);
};

export default SearchBar;
