import styled, {css} from "styled-components";

export const StyledLabel = styled.label<{
    block?: boolean,
    required?: boolean
}>`
    font-size: ${p=>p.theme.font.size.md};
    line-height: ${p=>p.theme.font.height.md};
    font-weight: 500;
    color: ${p=>p.theme.colors.text};
    width: 100%;
    display: ${p=>p.block ? "block" : "inline"};
    ${p=>p.required &&
            css`
                &::after{
                    margin-left:2px;
                    content: "*";
                    color: ${p=>p.theme.colors.error[400]};
                }
            `}
`