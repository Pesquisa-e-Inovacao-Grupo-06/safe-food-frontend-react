// import original module declarations
import 'styled-components';
type ColorType = {
    200?: string,
    400?: string,
    600?: string,
    800?: string,
    1000?: string,
}

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
<<<<<<< HEAD
        name: 'light'|"dark",
        isLight: boolean,
        isDark: boolean,
=======
        name: 'light' | "dark",
        isLight: () => boolean,
        isDark: () => boolean,
        pxToRem: (px) => string,
>>>>>>> 4f568f0 (created: text-component/ footer-molecule/ footer-organism)
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
            primary: ColorType,
            secondary: ColorType,
            black: string,
            white: string,
            dark_gray: ColorType,
            light_gray: ColorType,
            success: ColorType,
            warning: ColorType,
            danger: ColorType,
            error: ColorType,
            shadow: ColorType,
        },
        font: {
            size: {
                xsm: string,
                sm: string,
                md: string,
                mdB: string,
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
                text: string,
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