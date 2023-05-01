import { Box } from "@/components/atoms/box";
import styled from "styled-components";

export const ContainerBoxComent = styled(Box)`
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding: 8px;
	border-radius: ${p => p.theme.border.radius.md};
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[400]
			: p.theme.colors.dark_gray[600]};

	border: 1px solid
		${p =>
			p.theme.name == "light" ? "transparent" : p.theme.colors.dark_gray[400]};
	box-shadow: ${p => p.theme.colors.shadow[200]};
	color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.dark_gray[600]
			: p.theme.colors.light_gray[600]};
	gap: 10px;
    margin-bottom: 12px;

	.header-comentario-product-text {
		display: flex;
		justify-content: flex-start;
		gap: 10px;
		align-items: center;

		img {
			height: 36px;
			width: 36px;
			border-radius: 50px;
		}

		> span {
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: ${p =>
				p.theme.name == "light"
					? p.theme.colors.dark_gray[400]
					: p.theme.colors.light_gray[200]};

			> h3 {
				font-size: 16px;
				line-height: 16px;
			}

			> span {
				font-size: 12px;
				line-height: 12px;
			}
		}
	}

	> span {
		font-size: 12px;
	}
`;
