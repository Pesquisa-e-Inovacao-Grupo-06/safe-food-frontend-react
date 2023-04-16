import styled from "styled-components";

export const SLayout = styled.div`
	display: grid;
	grid-template-columns: 0fr 1fr 0fr;
	position: fixed;
	width: 100dvw;

	@media screen and (max-width: 600px) {
		grid-template-columns: none;
	}
`;

export const SMain = styled.main`
	padding: 0 8px 0 16px ;
	overflow-y: scroll;
	overflow-x: none;
	height: 100dvh;

	/* Scrollbar modification */

	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */

	::-webkit-scrollbar-track {
		background-color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[600]};
	}

	/* Handle */

	::-webkit-scrollbar-thumb {
		background-color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[600]
				: p.theme.colors.dark_gray[1000]};
		border-radius: 50px;
		border: 3px solid
			${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[600]};
	}

	/* Handle on Hover */

	::-webkit-scrollbar-thumb:hover {
		background-color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[800]
				: p.theme.colors.black};
	}

	h1 {
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		overflow-y: initial;
	}
`;
