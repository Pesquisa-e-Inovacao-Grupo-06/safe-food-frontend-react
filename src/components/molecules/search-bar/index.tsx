import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { ContainerSearchBar } from "./styles";
import { Product } from "@/app/domain/entities/Product";

type Props = {
	children?: any;
	products: Product[];
};

const SearchBar: React.FC<Props> = ({ children, products }) => {
	const [filterData, setFilterData] = useState<Product[]>([]);
	const [wordEntered, setWordEntered] = useState("");
	const [repositores, setRepositories] = useState<Product[]>(products);

	useEffect(() => {
		setRepositories(products);
	}, [products]);

	function setLocal(id: string) {
		repositores.map(repo => {
			return repo.params.id == id
				? setWordEntered(repo.params.titulo != undefined ? repo.params.titulo : "")
				: "";
		});
		setFilterData([]);
	}

	const handleFilter = (event: any) => {
		const seacrhWorld = event.target.value;
		setWordEntered(seacrhWorld);
		const newFilter = repositores.filter(value => {
			return value.params.titulo != undefined
				? value.params.titulo.toLowerCase().includes(seacrhWorld.toLowerCase())
				: "";
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
								return (
									<li
										key={repo.params.id}
										onClick={() => setLocal(repo.params.id)}
									>
										{repo.params.titulo}
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</ContainerSearchBar>
		</>
	);
};

export default SearchBar;
