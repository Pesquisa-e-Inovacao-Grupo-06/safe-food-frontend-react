import { Box } from "@/components/atoms/box";
import styled from "styled-components";

export const ContainerDropDownLocalInfo = styled(Box)<{
	active: boolean;
}>`
	user-select: none;
	.wrapper-dropdown-local-info {
		width: 225px;

		.select-btn-dropdown-local-info > p,
		.options-dropdown-local-info > li {
			display: flex;
			cursor: pointer;
			align-items: center;
		}

		> .select-btn-dropdown-local-info {
			> p {
				height: 65px;
				font-size: 16px;
				display: flex;
				cursor: pointer;
				padding: 0 20px;
				border-radius: 7px;
				align-items: center;
				justify-content: space-between;

				> svg {
					fill: ${p => p.theme.colors.primary[600]};
				}

				> svg:nth-child(1) {
					font-size: 20px;
				}

				> svg:nth-child(3) {
					transform: ${p => (p.active ? "rotate(180deg)" : "")};
					transition: all 0.3s ease;
					cursor: pointer;
				}

				> span:nth-child(2) {
					max-width: 130px;
					overflow: hidden;
				}
			}
		}

		> .content-dropdown-local-info {
			position: absolute;
			width: 225px;
			padding: 20px;
			border-radius: 7px;
			background: ${p =>
				p.theme.name == "light"
					? p.theme.colors.light_gray[200]
					: p.theme.colors.dark_gray[1000]};
			box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
			box-shadow: 0px 2px 12px 0px #00000022;
			transition: 0.5s;
			top: ${p => (p.active ? "80px" : "135px")};
			visibility: ${p => (p.active ? "visible" : "hidden")};
			opacity: ${p => (p.active ? 1 : 0)};

			> .search-dropdown-local-info {
				display: flex;
				align-items: center;
				gap: 10px;
				padding: 0 10px;
				border: 1px solid
					${p =>
						p.theme.name == "light"
							? p.theme.colors.light_gray[800]
							: p.theme.colors.dark_gray[600]};

				> svg {
					color: #999;
					font-size: 20px;
					line-height: 53px;
				}

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
			}

			> .options-dropdown-local-info {
				margin-top: 10px;
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
	}
`;
