import styled from "styled-components";

export const ContainerDropDown = styled.ul<{
	isDropDown?: boolean;
	alignTitleText?: boolean;
	alignSubText?: string;
}>`
	list-style: none;

	.dropdown-filter {
		user-select: none;
		display: ${p => (p.alignTitleText ? "grid" : "flex")};
		grid-template-columns: ${p => (p.alignTitleText ? "1fr 0fr" : "")};
		justify-content: space-between;
		justify-items: ${p => (p.alignTitleText ? "center" : "")};
		align-items: center;
		margin-top: 15px;

		> p:nth-child(1) {
			font-weight: 600;
		}

		> svg {
			transform: ${p => (p.isDropDown ? "rotate(180deg)" : "")};
			transition: all 0.3s ease;
			cursor: pointer;
			fill: ${p => p.theme.colors.primary[600]};
		}
	}

	ul {
		list-style: none;
	}

	> li > ul > li {
		text-align: ${p => p.alignSubText};

		> div > label > span:nth-child(1) {
			font-size: 14px;
			font-weight: 100;
		}
	}

	> li > ul > li {
		> a > p {
			text-align: ${p => p.alignSubText};
		}
	}
`;
