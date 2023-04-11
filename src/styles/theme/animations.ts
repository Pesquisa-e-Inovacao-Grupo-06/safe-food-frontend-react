import {keyframes} from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const shake = keyframes`
  0% {
    transform: rotate(0deg) translateX(0px);
  }
  20% {
    transform: rotate(-.2deg) translateX(5px);
  }
  40% {
    transform: rotate(-.5deg) translateX(10px);
  }
  60% {
    transform: rotate(.2deg) translateX(5px);
  }
  80% {
    transform: rotate(.5deg) translateX(10px);
  }
  100% {
    transform: rotate(.2deg) translateX(5px);
  }
`