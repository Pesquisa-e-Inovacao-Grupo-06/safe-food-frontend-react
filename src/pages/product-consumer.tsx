import Header from "@/components/molecules/header"
import { FooterOrganism } from "@/components/organisms/footer/footer-organism";
import { BodyTemplate } from "@/components/templates/body-template";
import styled from "styled-components";

const ProductConsumer: React.FC = () => {
    return (
        <>
            <Header />
            <BodyTemplate footer>
                <ContainerProductConsumer>
                    <div className="header-product-consumer"></div>
                    <div className="main-product-consumer">
                        <div className="img-product-consumer"></div>
                        <div className="info-product-consumer"></div>
                        <div className="comentario-product-consumer"></div>
                    </div>
                </ContainerProductConsumer>
            </BodyTemplate>
        </>
    )
}

export default ProductConsumer;

const ContainerProductConsumer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0fr 0fr;

    grid-template-areas: "header" "main";
    
    .header-product-consumer {
        background: red;
        height: 10dvh;
        grid-area: header;
    }
    
    .main-product-consumer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        grid-template-areas: "img" "coment" "info";

        height: 70dvh;
        background: blue;
        grid-area: main;
    }

    .img-product-consumer {
        background: gray;
        grid-area: img;
    }

    .info-product-consumer {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
        background: black;
    }

    .comentario-product-consumer {
        background: orange;
        grid-area: coment;
    }

    @media (max-width: 600px) {
        .main-product-consumer {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;

            grid-template-areas: "img" "info" "coment";
        }

        .info-product-consumer {
            grid-area: info;
        }
    
        .comentario-product-consumer {
            grid-area: coment;
        }
        
    }
`