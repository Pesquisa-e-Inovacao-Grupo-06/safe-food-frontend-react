import { Link } from "react-router-dom";
import { Container } from "./styles";

type Props = {
	to?: string;
	text: string;
	onclick?: () => void;
};

function SignUpButton({ to, text, onclick }: Props) {
	return (
		<Container>
			{to ? <Link to={to}>{text}</Link> : <a onClick={onclick}>{text}</a>}
		</Container>
	);
}

export default SignUpButton;
