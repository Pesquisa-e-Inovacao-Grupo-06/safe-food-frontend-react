import HeaderConsumer from "@/components/molecules/header-consumer";
import { BodyTemplate } from "@/components/templates/body-template";
import styled from "styled-components";

const ChangePassWord: React.FC = () => {
    return (
        <>
            <HeaderConsumer />
            <BodyTemplate footer>
                <ContainerBannerChangePassword>
                    <div className="container-change-password">
                        <div className="header-change-password"></div>
                        <div className="main-change-password"></div>
                        <div className="footer-change-password"></div>
                    </div>
            </ContainerBannerChangePassword>
            </ BodyTemplate>
        </>
    )
}

export default ChangePassWord;

const ContainerBannerChangePassword = styled.div`
    margin:150px 0px 0px 0px;
    border: 2px solid red;
    height: 70dvh;

    > .container-change-password {
        display: grid;
        height: 100%;
        grid-template-rows: 0.2fr 1fr 0.3fr;
        border: 2px solid orange;

        grid-template-areas: "header"
                            "main"
                            "footer";

        > .header-change-password{
            grid-area: header;
            background: blue;
        }

        > .main-change-password{
            grid-area: main;
            background: yellow;
        }

        > .footer-change-password{
            grid-area: footer;
            background: gray;
        }
    }
`;