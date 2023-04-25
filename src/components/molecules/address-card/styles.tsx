import { Box } from "@/components/atoms/box";
import styled from "styled-components";

export const AddresCardContainer = styled(Box)`
	border-radius: 8px;
	max-width: fit-content;
	box-shadow: ${p => p.theme.colors.shadow[200]};

	.address-card-header {
		display: flex;
		padding: 0 20px;
		align-items: center;
		border-radius: 8px 8px 0 0;
		background: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[800]
				: p.theme.colors.dark_gray[400]};
		border-bottom: 1px solid ${p => p.theme.colors.dark_gray[200]};
	}

	.address-card-subtitle {
		font-size: 16px;
	}

	.address-card-btn-icon {
		background: none;
		border: none;
		padding: 0;
		box-shadow: none;
		min-width: fit-content;
		max-height: fit-content;
		margin-left: auto;
		width: fit-content;

		> svg {
			color: ${p =>
				p.theme.name == "light"
					? p.theme.colors.dark_gray[400]
					: p.theme.colors.light_gray[600]};
			transition: 0.2s;

			:hover {
				color: #fe8e27;
			}
		}
	}

	.address-car-container-text {
		padding: 20px;
		min-width: 150px;
		min-height: 150px;
		max-width: 350px;
		color: ${p =>
			p.theme.name == "light"
				? p.theme.colors.dark_gray[1000]
				: p.theme.colors.light_gray[200]};
		background: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[200]
				: p.theme.colors.dark_gray[400]};
		border-radius: 0 0 8px 8px;
	}
`;
