import Header from "../components/molecules/header/index";
import { FooterOrganism } from "../components/organisms/footer/footer-organism";
import { ContainerFluid } from "../components/atoms/container/index";
function Home() {
	return (
		<>
			<Header />
			<div
				style={{ paddingTop: "75px", marginLeft: "248px", marginRight: "248px" }}
			>
				<FooterOrganism />
			</div>
		</>
	);
}

export default Home;
