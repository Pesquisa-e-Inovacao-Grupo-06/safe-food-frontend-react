import styled from "styled-components";

export const ItemSidebarContainer = styled.div<{
	isActive?: boolean;
}>`
	& a {
		background: ${({ theme, isActive }) =>
			!isActive
				? `transparent`
				: `${
						theme.name == "light"
							? theme.colors.light_gray[600]
							: theme.colors.dark_gray[800]
				  }`};
		display: flex;
		align-items: center;
		font-size: 18px;
		padding: 10px 7px;
		cursor: pointer;
		border-radius: 8px;
		margin: 5px 0px;
		transition: 0.3s;
	}
	& a svg {
		font-size: 18px;
		margin: 0 25px 0 5px;
	}
	& a:hover {
		background: ${p =>
			p.theme.name == "light"
				? p.theme.colors.light_gray[800]
				: p.theme.colors.dark_gray[600]};
	}

	@media (max-width: 600px) {
		& a {
			font-size: 20px;
		}

		& a svg {
			font-size: 20px;
		}
	}
`;
