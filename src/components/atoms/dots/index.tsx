import styled, { css } from "styled-components";
import { Box } from "../box";

export type DotsProps = {
	countItems: number;
	currentItem: number;
	size: number;
	direction: "row" | "column";
	colorActive?: string;
	colorDisabled?: string;
};

export const Dots: React.FC<DotsProps> = props => {
	const dotsArray = Array.from({ length: props.countItems }, (_, i) => i);
	return (
		<Box
			display="flex"
			flexDirection={props.direction}
		>
			{dotsArray.map((dotIndex, index) =>
				props.currentItem === index ? (
					<DotsStyle
						size={props.size}
						key={dotIndex}
						active
						colorActive={props.colorActive}
						direction={props.direction}
					/>
				) : (
					<DotsStyle
						size={props.size}
						key={dotIndex}
						colorDisabled={props.colorDisabled}
						direction={props.direction}
					/>
				)
			)}
		</Box>
	);
};

export const DotsStyle = styled.div<{
	size: number;
	active?: boolean;
	colorActive?: string;
	colorDisabled?: string;
	direction?: "row" | "column";
}>`
	border-radius: 50%;
	background-color: ${p =>
		p.active
			? p.colorActive ?? p.theme.colors.primary[600]
			: p.colorDisabled ?? p.theme.colors.dark_gray[400]};
	width: ${p => (typeof p.size === "number" ? p.size + "px" : p.size)};
	height: ${p => (typeof p.size === "number" ? p.size + "px" : p.size)};
	margin: ${p => {
		if (p.direction === "row") {
			return "0px 1rem 0px 1rem";
		} else if (p.direction === "column") {
			return "1rem 0px 1rem 0px";
		} else {
			return "0px";
		}
	}};
`;
