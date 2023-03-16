// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        name: 'light'|"dark",
        border: {
            radius: {
                sm: string,
                md: string,
                lg: string,
            },
        },
        colors: {
            background?: string,
            text?: string,
            primary: string[],
            secondary: string[],
            black: string,
            white: string,
            dark_gray: string[],
            light_gray: string[],
            success: string[],
            warning: string[],
            danger: string[],
            shadow: string[],
        },
        font: {
            size: {
                xsm: string,
                sm: string,
                md: string,
                lg: string,
                xlg: string,
                xxlg: string,
                xxxlg: string,
            },
            height: {
                xsm: string,
                sm: string,
                md: string,
                lg: string,
                xlg: string,
                xxlg: string,
                xxxlg: string,
            },
            family: {
                sans: string,
                title: string,
            },
            spacing: {
                sm: string,
                md: string,
                lg: string,
            },
        },
        breakpoint: {
            xsm: string, // Old smartphones
            sm: string, // Actual smartphones
            md: string, // Tablets
            lg: string, // Large-tablets
            xlg: string, // Notebook
            xxlg: string, // Wide, TVs >
        },
        container: {
            xsm: string, // Old smartphones
            sm: string, // Actual smartphones
            md: string, // Tablets
            lg: string, // Large-tablets
            xlg: string, // Notebook
            xxlg: string, // Wide, TVs >
        },
        z_index: {
            under: number,
            normal: number,
            above: number,
            dropdown: number,
            sticky: number,
            fixed: number,
            modal_backdrop: number,
            offcanvas: number,
            modal: number,
            popover: number,
            tooltip: number,
        },
        transition: {
            duration: {
                fast: string,
                normal: string,
                slow: string,
            },
            type: {
                elastic: string,
                normal: string,
            },
        },
    }
}