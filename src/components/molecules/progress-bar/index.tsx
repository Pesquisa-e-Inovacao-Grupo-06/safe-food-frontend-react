import { ContainerProgressBar } from "./styles";

type Props = {
	value?: number;
	tooltip?: boolean;
	height?: string;
	color?: string;
	background?: string;
};

const ProgressBar: React.FC<Props> = ({
	value = 50,
	tooltip = false,
	height = "8px",
	color = "#fe8e27ff",
	background = "#ffebd6ff",
}) => {
	return (
		<ContainerProgressBar
			value={value}
			tooltip={tooltip}
			height={height}
			color={color}
			background={background}
		>
			<div className="skill-bar">
				<span className="skill-per">
					<span className="skill-bar-tooltip">{value}%</span>
				</span>
			</div>
		</ContainerProgressBar>
	);
};

export default ProgressBar;
