import { DefaultTheme } from "styled-components";
const pixelToRem = (px: number) => px / 16 + "rem";

export const darkTheme: DefaultTheme = {
	name: "dark",
	isLight: false,
	isDark: true,
	border: {
		radius: {
			sm: pixelToRem(2),
			md: pixelToRem(4),
			lg: pixelToRem(8),
		},
	},
	colors: {
		background: "#252525ff",
		text: "#fcfcfcff",
		primary: {
			200: "#ffebd6ff",
			400: "#fed29aff",
			600: "#fe8e27ff",
			800: "#c76f11ff",
			1000: "#633304ff"
		},
		secondary: {
			"200": "#e6ffdaff",
			"400": "#90f887ff",
			"600": "#07cc00ff",
			"800": "#0a4908ff",
		},
		black: "#000000",
		white: "#FFFFFF",
		dark_gray:
		{
			"200": "#808080ff",
			"400": "#474747ff",
			"600": "#252525ff",
			"800": "#1f1f1fff",
			"1000": "#121212ff",
		},
		light_gray:
		{
			"200": "#fcfcfcff",
			"400": "#f2f2f2ff",
			"600": "#e2e2e2ff",
			"800": "#ccccccff",
		},
		error:{
			"200": "#FFDEE2",
			"400": "#E65769",
			"600": "#83282E",
		},
		success: {
			"200": "#e6feed",
			"400": "#40e76f",
			"600": "#18A942",
			"800": "#008526",
		},
		warning: {
			"200": "#fbf9c2",
			"400": "#EACE38",
			"600": "#C0A30B",
			"800": "#857205",
		},
		danger: {
			"200": "#ffcdd0",
			"400": "#eb505a",
			"600": "#9d0e26",
			"800": "#6a0113",
		},
		shadow: {
			"200": "0px 1px 8px 1px #05050500",
			"400": "0px 1px 32px 2px #05050500",
			"600": "0px 1px 64px 10px #00000000",
		},
	},
	font: {
		size: {
			xsm: pixelToRem(10),
			sm: pixelToRem(12),
			md: pixelToRem(16),
			lg: pixelToRem(24),
			xlg: pixelToRem(36),
			xxlg: pixelToRem(56),
			xxxlg: pixelToRem(64),
		},
		height: {
			xsm: pixelToRem(10*1.4),
			sm: pixelToRem(12*1.4),
			md: pixelToRem(16*1.4),
			lg: pixelToRem(24*1.4),
			xlg: pixelToRem(36*1.4),
			xxlg: pixelToRem(56*1.4),
			xxxlg: pixelToRem(64*1.4),
		},
		family: {
			text: "Source Sans Pro, sans-serif",
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
			elastic: "cubic-bezier(0.68, -0.2, 0.265, 1.2)",
			normal: "ease",
		},
	},
};
