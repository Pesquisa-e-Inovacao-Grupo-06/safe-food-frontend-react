import styled, { css } from "styled-components"
import { Box } from "../box"

export type DotsProps = {
    countItems: number,
    currentItem: number,
    size: number,
    direction: "row" | "column"
    colorActive?: string,

}

export const Dots: React.FC<DotsProps> = (props) => {
    const dotsArray = Array.from({ length: props.countItems }, (_, i) => i);
    return (
        <Box display="flex" flexDiretion={props.direction}>
            {dotsArray.map((dotIndex) => (
                props.currentItem === 2 ? (
                    <DotsStyle size={props.size}
                        key={dotIndex}
                        active
                        colorActive={props.colorActive}
                    />
                ) :
                    <DotsStyle size={props.size}
                        key={dotIndex}
                        colorActive={props.colorActive}
                    />
            ))}
        </Box>
    );
};

export const DotsStyle = styled.div<{
    size: number,
    active?: boolean,
    colorActive?: string,

}>`
    border-radius: 50%;
    background-color: 	${p => {
        if (p.active)
            return p.colorActive ?? "black";
    }};
        width: ${p => (typeof p.size === "number" ? p.size + "px" : p.size)};
        height: ${p => (typeof p.size === "number" ? p.size + "px" : p.size)};
        margin: 0px 1rem 0px 1rem;
        `