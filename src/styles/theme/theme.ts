import { DefaultTheme } from "styled-components";

export const pixelToRem = (px: number) => px / 16 + "em";
export const theme: DefaultTheme = {
	name: "light",
	border: {
		radius: {
			sm: pixelToRem(2),
			md: pixelToRem(4),
			lg: pixelToRem(8),
		},
	},
	colors: {
		primary: ["#D9E9FC", "#D9E9FC", "#4392F1", "#205AA0"],
		secondary: ["#F9DFDC", "#F0AFA8", "#DC493A", "#7A322A"],
		black: "#000000",
		white: "#FFFFFF",
		dark_gray: ["#8E9095", "#7B7D80", "#58595B", "#313233"],
		light_gray: ["#EBF1FF", "#DEE1E7", "#D7DAE1", "#CBCDD1"],
		success: ["", "", "", ""],
		warning: ["", "", "", ""],
		danger: ["", "", "", ""],
		shadow: ["#24242526", "#24242535"],
	},
	font: {
		size: {
			xsm: pixelToRem(10),
			sm: pixelToRem(12),
			md: pixelToRem(16),
			lg: pixelToRem(20),
			xlg: pixelToRem(24),
			xxlg: pixelToRem(36),
			xxxlg: pixelToRem(54),
		},
		height: {
			xsm: pixelToRem(14),
			sm: pixelToRem(16),
			md: pixelToRem(24),
			lg: pixelToRem(28),
			xlg: pixelToRem(32),
			xxlg: pixelToRem(42),
			xxxlg: pixelToRem(60),
		},
		family: {
			sans: "Source Sans Pro, sans-serif",
			title: "Nunito, sans-serif",
		},
		spacing: {
			sm: "1%",
			md: "1.5%",
			lg: "2.5%",
		},
	},
	breakpoint: {
		xsm: pixelToRem(380), // Old smartphones
		sm: pixelToRem(576), // Actual smartphones
		md: pixelToRem(768), // Tablets
		lg: pixelToRem(996), // Large-tablets
		xlg: pixelToRem(1200), // Notebook
		xxlg: pixelToRem(1400), // Wide, TVs >
	},
	container: {
		xsm: pixelToRem(360), // Old smartphones
		sm: pixelToRem(540), // Actual smartphones
		md: pixelToRem(720), // Tablets
		lg: pixelToRem(960), // Large-tablets
		xlg: pixelToRem(1140), // Notebook
		xxlg: pixelToRem(1320), // Wide, TVs >
	},
	z_index: {
		under: 500,
		normal: 800,
		above: 900,
		dropdown: 1000,
		sticky: 1020,
		fixed: 1030,
		modal_backdrop: 1040,
		offcanvas: 1050,
		modal: 1060,
		popover: 1070,
		tooltip: 1080,
	},
	transition: {
		duration: {
			fast: "0.2s",
			normal: "0.4s",
			slow: "0.8s",
		},
		type: {
			elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
			normal: "ease",
		},
	},
};
