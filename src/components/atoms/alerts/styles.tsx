import styled, {css} from "styled-components";

export type StyledAletsProps = {
    success?: boolean;
    danger?: boolean;
    warning?: boolean;
    info?: boolean;
}

export const Alerts = styled.div<StyledAletsProps>`
    height: 40px;
    width: 100%;
    padding: 0 10px;
    border-radius: ${p => p.theme.border.radius.md};
    font-family: ${p => p.theme.font.family.text};
    box-shadow: ${p => p.theme.colors.shadow[200]};
    background: ${p => {
        if(p.theme.isLight){
            if(p.success) return p.theme.colors.success[400];
            if(p.danger) return p.theme.colors.danger[600];
            if(p.warning) return p.theme.colors.warning[400];
            if(p.info) return p.theme.colors.dark_gray[200]
        }
        if(p.theme.isDark){
            if(p.success) return p.theme.colors.success[200];
            if(p.danger) return p.theme.colors.danger[400];
            if(p.warning) return p.theme.colors.warning[200];
            if(p.info) return p.theme.colors.dark_gray[200];
        }
    }}
`