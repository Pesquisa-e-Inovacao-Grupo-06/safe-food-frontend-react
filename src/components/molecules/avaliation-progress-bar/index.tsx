import React from 'react';
import { Subtitle } from '@/styles/components/text/Subtitle';
import ProgressBar from '../progress-bar';
import { Text } from '@/components/atoms/text';
import { Box } from '@/components/atoms/box';

interface ProgressBarProps {
	value: number;
	index: number;
}

const niveisSatisfacao = new Map<number, { text: string; class: string }>();

niveisSatisfacao.set(0, { text: 'Inválido', class: 'gray' });
niveisSatisfacao.set(1, { text: 'Muito insatisfeito', class: 'red' });
niveisSatisfacao.set(2, { text: 'Insatisfeito', class: 'orange' });
niveisSatisfacao.set(3, { text: 'Neutro', class: 'yellow' });
niveisSatisfacao.set(4, { text: 'Satisfeito', class: 'light-green' });
niveisSatisfacao.set(5, { text: 'Muito satisfeito', class: 'green' });

function obterNivelSatisfacao(numero: number): { text: string; class: string } {
	if (numero <= 1) {
		return niveisSatisfacao.get(1)!;
	} else if (numero <= 2) {
		return niveisSatisfacao.get(2)!;
	} else if (numero <= 3) {
		return niveisSatisfacao.get(3)!;
	} else if (numero <= 4) {
		return niveisSatisfacao.get(4)!;
	} else if (numero <= 5) {
		return niveisSatisfacao.get(5)!;
	} else {
		return niveisSatisfacao.get(0)!;
	}
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
	reviews?: string;
}

export const AvaliationProgressBar: React.FC<AvaliationProgressBarProps> = ({
	values = [0, 0, 0, 0, 0],
	average = 0,
	reviews,
}) => {
	let calcMetricsValue = values.reduce((total, value) => value + total);

	return (
		<Box className="container-evaluation-info-product">
			<div className="container-progress-bar">
				{values.map((value, index) => (
					<ProgressBarWrapper
						key={index}
						value={value == 0 ? 0 : (value / calcMetricsValue) * 100}
						index={index + 1}
					/>
				))}
			</div>
			<div className="container-circulo-value ">
				<div className={'circulo-value ' + obterNivelSatisfacao(4).class}>
					<Text>
						{average.toFixed(1) === 'NaN' ? '0.0' : average.toFixed(1)}
					</Text>
				</div>
				<Subtitle>
					<strong>{obterNivelSatisfacao(4).text}</strong>
					<br />

					<span>{reviews ?? 0} avaliações</span>
				</Subtitle>
			</div>
		</Box>
	);
};
