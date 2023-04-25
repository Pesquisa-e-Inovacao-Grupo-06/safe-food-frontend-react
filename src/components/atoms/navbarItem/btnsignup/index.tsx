import { Link } from "react-router-dom";
import { Container } from "./styles";

type Props = {
	to: string;
	text: string;
};

function SignUpButton({ to, text }: Props) {
	return (
		<Container>
			<Link to={to}>{text}</Link>
		</Container>
	);
}

export default SignUpButton;
