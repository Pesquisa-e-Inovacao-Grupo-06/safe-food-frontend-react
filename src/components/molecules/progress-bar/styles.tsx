import styled from "styled-components";

export const ContainerProgressBar = styled.div<{
	value?: number;
	tooltip?: boolean;
	height?: string;
	color?: string;
	background?: string;
}>`
	.skill-bar {
		height: ${p => p.height};
		width: 100%;
		border-radius: 6px;
		background: ${p => p.background};

		.skill-per {
			position: relative;
			display: block;
			height: 100%;
			width: ${p => p.value}%;
			border-radius: 6px;
			background: ${p => p.color};
			animation: progress 0.4s ease-in-out forwards;
			opacity: 0;
			animation-delay: 0.3s;
		}

		@keyframes progress {
			0% {
				width: 0;
				opacity: 1;
			}

			100% {
				opacity: 1;
			}
		}

		.skill-bar-tooltip {
			display: ${p => (p.tooltip ? "block" : "none")};
			position: absolute;
			right: -14px;
			top: -28px;
			font-size: 9px;
			font-weight: 500;
			color: #fff;
			padding: 2px 6px;
			border-radius: 3px;
			background: ${p => p.color};
			z-index: 1;

			::before {
				content: "";
				position: absolute;
				left: 50%;
				bottom: -2px;
				height: 10px;
				width: 10px;
				z-index: -1;
				background: ${p => p.color};
				transform: translateX(-50%) rotate(45deg);
			}
		}
	}
`;
