import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { ContainerChips, ContainerSkillChips } from "./styles";

function SkillChips() {
	const [repositores, setRepositories] = useState<any[]>([]);

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const response = await fetch("https://api.github.com/users/guivicsan/repos");
		const data = await response.json();

		setRepositories(data);
	}

	function handleFavorite(id: number) {
		const newRepositories = repositores.map(repo => {
			return repo.id == id ? { ...repo, favorite: !repo.favorite } : repo;
		});
		setRepositories(newRepositories);
	}

	return (
		<ContainerSkillChips>
			{repositores.map(repo => {
				return (
					<ContainerChips
						key={repo.id}
						favorite={repo.favorite}
						onClick={() => handleFavorite(repo.id)}
					>
						<p>
							<FaCheck /> {repo.name}
						</p>
					</ContainerChips>
				);
			})}
		</ContainerSkillChips>
	);
}

export default SkillChips;
