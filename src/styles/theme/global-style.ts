import {createGlobalStyle} from "styled-components";
import { rotate } from "./animations";
const GlobalStyles = createGlobalStyle`
  *{
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    color: inherit;
    fill: inherit;
    transition: all ${({theme})=>theme.transition.duration.fast} ${({theme})=>theme.transition.type.normal};
  }
  body {
    font-family: ${p=>p.theme.font.family.text}, "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 100%;
    background-color: ${p=>p.theme.colors.background};
    color: ${p=>p.theme.colors.text};
    fill: ${p=>p.theme.colors.text};
  }
  .spin{
    animation: ${rotate} infinite ${p=>p.theme.transition.type.elastic} ${p=>p.theme.transition.duration.slow};
  }
`;

export {
    GlobalStyles
}