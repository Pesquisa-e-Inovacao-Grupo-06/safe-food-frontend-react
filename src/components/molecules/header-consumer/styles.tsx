import styled from "styled-components";

export const ContainerHeaderConsumer = styled.div`
	display: grid;
	grid-template-columns: 0fr 0.6fr 1fr 0fr 0fr;
	align-items: center;
	padding: 0 50px;
	grid-column-gap: 10px;
	width: -webkit-fill-available;
	justify-items: center;

	> div:nth-child(5) {
		width: 100%;
	}

	> div:nth-child(4) {
		width: fit-content;
	}

	> svg:nth-child(1) {
		display: none;
	}

	.container-user-info-header-consumer {
		display: flex;
		justify-content: flex-start;
		gap: 10px;
		align-items: center;
		justify-content: center;
		padding-right: 20px;

		> p {
			min-width: 150px;
			display: flex;
			justify-content: flex-end;

			> span {
			}
		}

		img {
			height: 46px;
			width: 46px;
			cursor: pointer;
			border-radius: 50px;
		}
	}

	@media (max-width: 810px) {
		display: flex;
		justify-content: space-between;
		padding: 0 20px;

		> div:nth-child(3),
		> div:nth-child(4),
		> div:nth-child(5),
		> div:nth-child(6) {
			display: none;
		}

		> svg:nth-child(1) {
			display: block;
			font-size: 24px;
			cursor: pointer;
		}
	}
`;
