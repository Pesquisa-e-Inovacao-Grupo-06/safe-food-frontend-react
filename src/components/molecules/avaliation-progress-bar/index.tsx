import React from "react";
import { Subtitle } from "@/styles/components/text/Subtitle";
import ProgressBar from "../progress-bar";
import { Text } from "@/components/atoms/text";
import { Box } from "@/components/atoms/box";

interface ProgressBarProps {
	value: number;
	index: number;
}

const ProgressBarWrapper: React.FC<ProgressBarProps> = ({ value, index }) => {
	return (
		<div className={`progress-bar-${index}`}>
			<Text>{index}</Text>
			<ProgressBar value={value} />
		</div>
	);
};

export interface AvaliationProgressBarProps {
	values?: number[];
	average?: number;
	label?: string;
	reviews?: string;
}

export const AvaliationProgressBar: React.FC<AvaliationProgressBarProps> = ({
	values = [10, 2, 15, 0, 9],
	average = 0,
	label = "Sem avaliação",
	reviews = "",
}) => {
	let calcMetricsValue = values.reduce((total, value) => value + total);

	return (
		<Box className="container-evaluation-info-product">
			<div className="container-progress-bar">
				{values.map((value, index) => (
					<>
						<ProgressBarWrapper
							key={index}
							value={(value / calcMetricsValue) * 100}
							index={index + 1}
						/>
					</>
				))}
			</div>
			<div className="container-circulo-value">
				<div className="circulo-value">
					<Text>{average.toFixed(1)}</Text>
				</div>
				<Subtitle>
					<h3>{label}</h3>
					<span>{reviews} reviews</span>
				</Subtitle>
			</div>
		</Box>
	);
};
