import styled from "styled-components";

export const SLayout = styled.div`
	display: grid;
	grid-template-columns: 0fr 1fr 0fr;
	/* position: fixed; */
	width: 100dvw;
	overflow: hidden;
	@media screen and (max-width: 800px) {
		grid-template-columns: none;
		grid-template-columns: 1fr 0fr 0fr;
		width: auto;
	}

	@media screen and (max-height: 800px) {
		width: auto;
	}
`;

export const SMain = styled.main<{
	active?: boolean;
	padding?: boolean;
}>`
	padding: ${p => (p.padding ? "0 8px 0 16px" : "0")};
	overflow-y: scroll;
	overflow-x: hidden;
	height: 100dvh;
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[600]};

	/* Scrollbar modification */

	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */

	::-webkit-scrollbar-track {
		background-color: #00000000;
		opacity: 0%;
	}

	/* Handle */

	::-webkit-scrollbar-thumb {
		background-color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[600]
			: p.theme.colors.dark_gray[800]};
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

	@media screen and (max-width: 800px) {
		margin-top: 75px;
		overflow-y: initial;

		/* padding: ${p => (!p.active ? "0px 8px 0px 16px" : "0")}; */
		padding: 0;
	}
`;
