import styled, { css } from "styled-components";

export const StyleInput = styled.input <{error:boolean}>`

    height: 40px;
    width: 400px;
    padding-left: 10px;
    margin-left: 5px; /*somente temporario para visualização no processo de criação*/
    margin-top: 5px; /*somente temporario para visualização no processo de criação*/
    border-radius: ${p=> p.theme.border.radius.md};
    box-shadow: ${p=> p.theme.colors.shadow[400]};
    font-size: ${p=> p.theme.font.size.md};
    font-family: ${p=> p.theme.font.family.text};
    font-style: ${p=> p.theme.colors.text};
    background: ${p=> (p.error ? p.theme.colors.error[200] : p.theme.colors.light_gray[400])};
`