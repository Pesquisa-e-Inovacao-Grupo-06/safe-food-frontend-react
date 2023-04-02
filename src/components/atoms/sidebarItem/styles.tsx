import styled from "styled-components";

export const Container = styled.div`
	& a {
		display: flex;
		align-items: center;
		font-size: 20px;
		padding: 10px 7px;
		cursor: pointer;
		border-radius: 10px;
		margin: 5px 0px;
	}
	& a svg {
		margin: 0 25px 0 5px;
	}
	& a:hover {
		background-color: ${props =>
			props.theme.name == "dark" ? "#4e4e4e" : "#e0e0e0"};
	}
`;
