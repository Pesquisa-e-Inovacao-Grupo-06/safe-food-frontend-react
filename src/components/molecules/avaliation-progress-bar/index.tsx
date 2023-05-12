import { Subtitle } from "@/styles/components/text/Subtitle";
import ProgressBar from "../progress-bar";
import { Text } from "@/components/atoms/text";
import { Box } from "@/components/atoms/box";

interface AvaliationProgressBarProps {}
export const AvaliationProgressBar: React.FC<
	AvaliationProgressBarProps
> = ({}) => {
	return (
		<Box className="container-evaluation-info-product">
			<div className="container-progress-bar">
				<div className="progress-bar-1">
					<Text>9 - 10</Text>
					<ProgressBar value={90} />
				</div>
				<div className="progress-bar-2">
					<Text>7 - 8</Text>
					<ProgressBar value={70} />
				</div>
				<div className="progress-bar-3">
					<Text>5 - 6</Text>
					<ProgressBar value={50} />
				</div>
				<div className="progress-bar-4">
					<Text>3 - 4</Text>
					<ProgressBar value={30} />
				</div>
				<div className="progress-bar-5">
					<Text>1 - 2</Text>
					<ProgressBar value={10} />
				</div>
			</div>
			<div className="container-circulo-value">
				<div className="circulo-value">
					<Text>9,0</Text>
				</div>
				<Subtitle>
					<h3>Excelente</h3>
					<span>1400 reviews</span>
				</Subtitle>
			</div>
		</Box>
	);
};
