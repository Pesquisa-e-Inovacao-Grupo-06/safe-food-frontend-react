import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { Star } from "@/components/atoms/star";
import React, { HTMLAttributes, useState } from "react";
export type AvaliationStarsProps = {
	avegareRate: number;
	totalAvaliations?: number;
	size?: number;
	onClickStar?: (val: number) => void;
	color?: string;
	gap?: number;
} & HTMLAttributes<HTMLDivElement>;
export const AvaliationStars: React.FC<AvaliationStarsProps> = ({
	avegareRate = 4,
	totalAvaliations,
	onClickStar = () => {},
	size = 16,
	color,
	gap = 2,
	...props
}) => {
	const { colors } = useSafeFoodTheme().getTheme();
	const [starsFilled, setStarsFilled] = useState(0);
	return (
		<>
			<section
				style={{
					display: "flex",
					alignItems: "center",
					gap: gap,
				}}
				{...props}
			>
				{[1, 2, 3, 4, 5].map(val => (
					<Star
						key={val}
						opacity={starsFilled ? 1 : 0.8}
						color={color ? color : colors.warning[600]}
						onMouseOver={() => {
							setStarsFilled(val);
						}}
						title={`Avaliar com ${val} estrelas`}
						onMouseOut={() => setStarsFilled(0)}
						value={val}
						size={size}
						onClick={() => {
							onClickStar(val);
						}}
						filled={val <= (starsFilled ? starsFilled : avegareRate)}
					/>
				))}
				{totalAvaliations && (
					<span style={{ marginLeft: gap * 4 + "px" }}>{totalAvaliations}</span>
				)}
			</section>
		</>
	);
};
