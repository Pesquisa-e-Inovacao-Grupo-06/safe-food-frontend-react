import { Box } from "@/components/atoms/box";
import ContainerHeader from "@/components/atoms/container-header";
import { LogoAtom } from "@/components/atoms/logo";
import styled from "styled-components";
import imgTeste from "../../../assets/food-favorite.png";
import { Text } from "@/components/atoms/text";
import DropDownSubMenu from "../drop-down-sub-menu";
import Switch from "@/components/atoms/toggle-switch";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import { useState } from "react";

const HeaderConsumer: React.FC = () => {
	const { toggleTheme, getTheme } = useSafeFoodTheme();

	return (
		<>
			<ContainerHeader>
				<ContainerHeaderConsumer>
					<LogoAtom />
					<div></div>
					<Box className="container-user-info-header-consumer">
						<DropDownSubMenu>
							<img src={imgTeste} />
						</DropDownSubMenu>
						<Text>
							<span>Lincoln Ferrira</span>
						</Text>
					</Box>
					<Switch onClick={toggleTheme} />
				</ContainerHeaderConsumer>
			</ContainerHeader>
		</>
	);
};

export default HeaderConsumer;

const ContainerHeaderConsumer = styled.div`
	display: grid;
	grid-template-columns: 0fr 1fr 0fr 0fr;
	align-items: center;
	padding: 0 50px;
	grid-column-gap: 10px;
	width: -webkit-fill-available;

	.container-user-info-header-consumer {
		display: flex;
		justify-content: flex-start;
		gap: 10px;
		align-items: center;
		justify-content: center;
		padding-right: 50px;

		> p {
			width: max-content;
		}

		img {
			height: 46px;
			width: 46px;
			cursor: pointer;
			border-radius: 50px;
		}

		@media (max-width: 600px) {
			display: none;
		}
	}
`;
