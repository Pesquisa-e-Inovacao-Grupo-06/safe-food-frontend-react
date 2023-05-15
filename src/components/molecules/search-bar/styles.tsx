import { Box } from "@/components/atoms/box";
import styled from "styled-components";

export const ContainerSearchBar = styled(Box)`
	user-select: none;

	.container-search-bar {
		max-width: 400px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 8px;
		padding: 0 10px;
		transition: 0.5s;
		border: 1px solid
			${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[800]
					: p.theme.colors.dark_gray[600]};
		background: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[1000]};

		> input {
			height: 35px;
			width: 100%;
			outline: none;
			font-size: 16px;
			transition: 0.5s;
			background: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[1000]};
		}

		> svg:nth-child(2) {
			cursor: pointer;
			font-size: 26px;
			line-height: 53px;
			margin-right: 5px;
			border-radius: 5px;
			transition: 0.2s;

			:hover {
				background: ${p => (p.theme.name == "light" ? "#eeeeee" : "#1a1a1a")};
			}
		}

		> svg {
			color: #999;
			font-size: 24px;
			line-height: 53px;
		}
	}

	.content-search-bar {
		position: absolute;
		width: 400px;
		padding: 20px;
		border-radius: 8px;
		background: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[1000]};
		box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
		box-shadow: 0px 2px 12px 0px #00000022;
		transition: 0.5s;
		top: 80px;

		.options-search-bar {
			list-style: none;
			max-height: 150px;
			overflow-y: auto;
			overflow-x: hidden;

			::-webkit-scrollbar {
				width: 7px;
			}
			::-webkit-scrollbar-track {
				background: ${p => (p.theme.name == "light" ? "#f1f1f1" : "#171717")};
				border-radius: 25px;
			}
			::-webkit-scrollbar-thumb {
				background: ${p =>
					p.theme.name == "light" ? "#ccc" : p.theme.colors.dark_gray[600]};
				border-radius: 25px;
			}

			> li {
				display: flex;
				align-items: center;
				height: 40px;
				padding: 0 13px;
				font-size: 14px;
				border-radius: 5px;

				:hover {
					background: ${p =>
						p.theme.name == "light"
							? p.theme.colors.light_gray[400]
							: p.theme.colors.dark_gray[800]};
				}
			}
		}
	}
`;
