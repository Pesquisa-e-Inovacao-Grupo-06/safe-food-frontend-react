import styled from "styled-components";
import { Label } from "../label";

export const CheckboxContainer = styled.div`
	margin-top: 5px;
	& .checkboxLabel {
		display: inline-block;
		padding-left: 27px;
		position: relative;
		cursor: pointer;
		font-family: sans-serif;
		user-select: none;
	}

	& .checkboxValue {
		font-size: 16px;
		color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.dark_gray[600]
				: p.theme.colors.light_gray[400]};
	}

	& input {
		display: none;
	}

	& input:checked + .checkmark {
		background-color: #fe8e27;
		border-color: #fe8e27;
	}

	& input:checked + .checkmark::after {
		content: "";
		position: absolute;
		height: 4px;
		width: 9px;
		border-left: 2px solid
			${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[600]};
		border-bottom: 2px solid
			${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[600]};
		top: 42%;
		left: 52%;
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	& .checkmark {
		display: inline-block;
		width: 18px;
		height: 18px;
		border: 2px solid
			${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[600]
					: p.theme.colors.dark_gray[400]};
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 3px;
	}

	:hover .checkmark {
		border-color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[800]
				: p.theme.colors.dark_gray[200]};
	}
`;

export const CLabelAttention = styled(Label)<{ alert: boolean }>`
	display: flex;
	color: red;
	font-size: 10px;
	line-height: 15px;
	opacity: ${p => (p.alert ? "0%" : "100%")};
`;
