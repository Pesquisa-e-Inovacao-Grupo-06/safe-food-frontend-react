import styled from "styled-components";

export const ContainerSwitch = styled.label<{
	rounded: boolean;
}>`
	position: relative;
	display: inline-block;
	width: 35px;
	height: 19px;

	& input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	& span {
		position: absolute;
		cursor: pointer;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-color: ${(props) => props.theme.name == "dark" ? "#4e4e4e" :"#ccc"};
		transition: 0.4s;

		border-radius: ${({ rounded }) => (rounded ? "34px" : "0px")};
	}

	& span:before {
		position: absolute;
		content: "";
		height: 15px;
		width: 15px;
		left: 3px;
		bottom: 2px;
		/* background-color: white; */
		background-color: ${(props) =>
			props.theme.name === "dark" ? "#fcfcfc" : "#1f1f1f"};;
		transition: 0.4s;
		border-radius: ${({ rounded }) => (rounded ? "50%" : "0%")};
	}

	input:checked + span {
		background-color: ${props =>
			props.theme.name === "dark" ? "#4e4e4e" : "#ccc"};
	}

	& input:checked + span:before {
		transform: translate(15px);
		/* transform: ${() =>
			sessionStorage.key.name === "dark"
				? "translate(26px)"
				: "translate(-26px)"}; */
	}
`;
