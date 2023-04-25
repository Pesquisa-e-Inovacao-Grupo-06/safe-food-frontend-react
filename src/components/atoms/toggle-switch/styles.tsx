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

		background-color: ${p =>
			p.theme.name == "dark"
				? p.theme.colors.primary[600]
				: p.theme.colors.light_gray[600]};
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
		background-color: ${p =>
			p.theme.name === "dark"
				? p.theme.colors.dark_gray[1000]
				: p.theme.colors.primary[600]};
		transition: 0.4s;
		border-radius: ${({ rounded }) => (rounded ? "50%" : "0%")};
	}

	input:checked + span {
		background-color: ${p =>
			p.theme.name === "dark"
				? p.theme.colors.primary[600]
				: p.theme.colors.light_gray[600]};
	}

	& input:checked + span:before {
		transform: translate(15px);
	}
`;
