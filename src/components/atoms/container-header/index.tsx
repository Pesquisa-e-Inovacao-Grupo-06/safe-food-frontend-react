import styled from "styled-components";

type Props = {
	children?: any;
};

const ContainerHeader: React.FC<Props> = ({ children }) => {
	return (
		<>
			<ContainerNavbar>{children}</ContainerNavbar>
		</>
	);
};

export default ContainerHeader;

const ContainerNavbar = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	transition: 0.6s;
	z-index: 1000;
	height: 75px;
	box-shadow: 0px 1px 12px 0px #00000022;
	background: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[1000]};
`;
