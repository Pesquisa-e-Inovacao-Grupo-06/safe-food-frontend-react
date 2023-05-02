import Header from "@/components/molecules/header";
import { BodyTemplate } from "@/components/templates/body-template";
import styled from "styled-components";


const HomeConsumer: React.FC = () => {
    return (
        <>
            <Header />
            <BodyTemplate footer>
                <ContainerHomeConsumer>
                    <div className="header-home-consumer"></div>
                    <div className="aside-filter-home-consumer"></div>
                    <div className="main-home-consumer"></div>
                    <div className="footer-home-consumer"></div>
                </ContainerHomeConsumer>

            </BodyTemplate>
        </>
    )
}

export default HomeConsumer;

const ContainerHomeConsumer = styled.div`
    display: grid;
    grid-template-columns: 0.35fr 1fr;
    grid-template-rows: 0.3fr 1fr 0.3fr;

    grid-template-areas: "header header"
                         "aside main"
                         "footer footer";

    background: red;
    height: 100dvh;

    .header-home-consumer {
        background: blue;
        grid-area: header;
    }

    .aside-filter-home-consumer {
        background: yellow;
        grid-area: aside;
    }

    .main-home-consumer {
        background: purple;
        grid-area: main;
    }

    .footer-home-consumer {
        background: gray;
        grid-area: footer;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        grid-template-areas: "header header"
                             "main main"
                             "footer footer";
    }
`;