import { MdEdit } from "react-icons/md";
import styled from "styled-components";

type Props = {
	onClick?(): void;
};

export const ButtonEdit: React.FC<Props> = ({ onClick }) => {
	return (
		<>
			<ContainerButtonEdit onClick={onClick}>
				<div className="container-btn-edit">
					<MdEdit />
				</div>
			</ContainerButtonEdit>
		</>
	);
};

const ContainerButtonEdit = styled.div`
	> .container-btn-edit {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		margin-left: auto;
		width: fit-content;
		border-radius: 100%;
		background: ${p => (p.theme.name == "light" ? "#0000004a" : "#00000073")};
	}
`;
