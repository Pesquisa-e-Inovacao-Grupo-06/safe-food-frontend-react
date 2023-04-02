import React, { MouseEventHandler } from "react";
import StarIcon from "@/assets/star.svg";
export type StarProps = {
	filled: boolean;
	opacity?: number;
	value: number;
	size?: number;
	color?: string;
	onClick?: (value: number) => void;
	onMouseOver?: (ev: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
	onMouseOut?: (ev: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
} & React.HTMLAttributes<HTMLDivElement>;
export const Star: React.FC<StarProps> = ({
	filled,
	size = 16,
	onClick = () => {},
	value,
	color,
	opacity = 1,
	onMouseOut = () => {},
	onMouseOver = () => {},
	...props
}) => {
	return (
		<div
			style={{ display: "inline" }}
			{...props}
		>
			<svg
				width={`${size}px`}
				onClick={() => {
					onClick(value);
				}}
				onMouseOver={e => onMouseOver(e)}
				onMouseOut={e => onMouseOut(e)}
				style={{
					cursor: "pointer",
				}}
				opacity={opacity}
				height={`${size}px`}
				viewBox={`0 0 24 24`}
				preserveAspectRatio="xMinYMin meet"
				fill={filled ? color : "none"}
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Interface / Star">
					<path
						id="Vector"
						d="M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z"
						stroke={`${color}`}
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		</div>
	);
};
