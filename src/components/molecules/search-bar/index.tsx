import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { ContainerSearchBar } from "./styles";
import { Product } from "@/app/domain/entities/Product";

type Props = {
	children?: any;
	products: Product[];
	onChange: (e: string) => Promise<void>;
};

const SearchBar: React.FC<Props> = ({ children, products, onChange }) => {
	const [filterData, setFilterData] = useState<Product[]>([]);
	const [wordEntered, setWordEntered] = useState<string>("");
	const [repositores, setRepositories] = useState<Product[]>(products);

	const handleClick = () => {
		onChange(wordEntered)
	}


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
		const seacrhWorld = event;
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
						onChange={(e) => { setWordEntered(e.currentTarget.value) }}
						value={wordEntered}
					/>
					{wordEntered.length == 0 ? (
						<IoCloseSharp visibility="hidden" />
					) : (
						<IoCloseSharp onClick={clearInput} />
					)}
					<BiSearch onClick={async () => {
						await handleClick();
						handleFilter(wordEntered)
					}} cursor={"pointer"} />
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
