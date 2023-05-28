import { Text } from "@/components/atoms/text";
import { useState } from "react";
import { FaHome, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContainerDropDownSubMenu } from "./styles";
import { Cache } from "@/app/domain/protocols/Cache";
import { BsFillGearFill } from "react-icons/bs";
import { SafeFoodLoginResponse } from "@/app/infra/gateway/safefood/models/SafeFoodUser";
import { SafeFoodConsumerModel } from "@/app/infra/gateway/safefood/models/SafeFoodConsumer";

type Props = {
	children?: any;
	cache: Cache;
	userName: string;
};

const DropDownSubMenu: React.FC<Props> = ({ userName, cache, children }) => {
	const [active, setActive] = useState(false);

	const user: SafeFoodLoginResponse =
		cache.getItem("user") !== null ? JSON.parse(cache.getItem("user")!) : {};

	return (
		<>
			<ContainerDropDownSubMenu
				active={active}
				onClick={() => setActive(!active)}
			>
				<div
					className="container-children-dropdown-submenu"
					style={{ width: "max-content", gap: "10px" }}
				>
					{children}
				</div>
				<div className="big-container-info-dropdown-sunmenu">
					<div className="container-info-dropdown-submenu">
						<Text>{userName}</Text>
						<Text>Safe Food</Text>

						<ul>
							{itemLinkArray.map(({ icon, text, to }) => (
								<li key={text}>
									<Link
										to={to}
										onClick={() => {
											if (text === "Sair") {
												if (window.location.pathname === "/") {
													window.location.reload();
												} else {
													cache.removeItem("token");
													cache.removeItem("consumer");
													cache.removeItem("establishment");
													cache.removeItem("user");
												}
											}

										}}
									>
										{icon}
										<span>{text}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</ContainerDropDownSubMenu>
		</>
	);
};

export default DropDownSubMenu;

const itemLinkArray = [
	{
		icon: <FaHome />,
		text: "Home",
		to: "/home-consumer",
	},
	{
		icon: <FaUserAlt />,
		text: "Meu Perfil",
		to: "/profile",
	},
	{
		icon: <BsFillGearFill />,
		text: "Preferências",
		to: "/preferences-establishment",
	},
	{
		icon: <FaSignOutAlt />,
		text: "Sair",
		to: "/",
	},
];
