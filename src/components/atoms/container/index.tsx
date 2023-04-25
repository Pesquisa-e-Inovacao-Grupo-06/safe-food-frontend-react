import styled from "styled-components";

export const Container = styled.section<{
	size: "xsm" | "sm" | "md" | "lg" | "xlg" | "xxlg";
	height: string | number;
	display?: "flex" | "block" | "inline";
	justify?: "center" | "space-between" | "left" | "space-around";
	overflow?: "auto" | "hidden" | "visible";
}>`
	width: ${p => {
		return p.theme.container[`${p.size}`];
	}};
	height: ${p => (typeof p.height === "number" ? p.height + "px" : p.height)};
	display: ${p => p.display || "block"};
	justify-content: ${p => p.justify || "center"};
	align-items: center;
	margin: 0 auto;
	overflow: ${p => p.overflow || "hidden"};
`;

export const ContainerFluid = styled.section<{
	height?: string | number;
	display?: "flex" | "block" | "inline";
	justify?: "center" | "space-between" | "left" | "space-around";
	overflow?: "auto" | "hidden" | "visible";
}>`
	width: 95%;
	height: ${p => (typeof p.height === "number" ? p.height + "px" : p.height)};
	display: ${p => p.display || "block"};
	justify-content: ${p => p.justify || "center"};
	align-items: center;
	padding: 4px;
	margin: 0 auto;

	overflow: ${p => p.overflow || "hidden"};
	@media (min-width: ${p => p.theme.breakpoint.xsm}) {
		width: 90%;
	}
	@media (min-width: ${p => p.theme.breakpoint.sm}) {
		width: ${p => p.theme.container.sm};
	}
	@media (min-width: ${p => p.theme.breakpoint.md}) {
		width: ${p => p.theme.container.md};
	}
	@media (min-width: ${p => p.theme.breakpoint.lg}) {
		width: ${p => p.theme.container.lg};
	}
	@media (min-width: ${p => p.theme.breakpoint.xlg}) {
		width: ${p => p.theme.container.xlg};
	}
	@media (min-width: ${p => p.theme.breakpoint.xxlg}) {
		width: ${p => p.theme.container.xxlg};
	}
`;
