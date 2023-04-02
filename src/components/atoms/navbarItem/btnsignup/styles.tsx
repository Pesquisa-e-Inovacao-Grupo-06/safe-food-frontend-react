import styled from "styled-components";

export const Container = styled.div`
	& a {
		color: #fcfcfc;
		background-color: #fe8e27;
		padding: 20px 15px;
		height: 25px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
	}

	& a:hover {
		background-color: #e98324;
		transition: all 0.2s ease-out;
	}
`;
