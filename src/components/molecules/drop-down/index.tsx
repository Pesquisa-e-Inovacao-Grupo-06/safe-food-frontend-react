import Checkbox from "@/components/atoms/checkbox";
import { Text } from "@/components/atoms/text";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContainerDropDown } from "./styles";

export type alignSubMenu = "center" | "start" | "end";

type Props = {
	titleDropDown?: string;
	activeCheckBox?: boolean;
	checkBoxWithAlertMessage?: boolean;
	textSubMenuWithoutCheckBox?: { to: string; textSubMenu: string }[];
	textSubMenuWithCheckBox?: Array<string>;
	alignTitleText?: boolean;
	alignSubText?: alignSubMenu;
};

const DropDown: React.FC<Props> = ({
	titleDropDown = "Title",
	activeCheckBox = false,
	checkBoxWithAlertMessage = false,
	textSubMenuWithoutCheckBox = [
		{
			to: "/",
			textSubMenu: "textsubmenu",
		},
	],
	textSubMenuWithCheckBox = ["textsubmenu"],
	alignTitleText = true,
	alignSubText = "center",
}) => {
	const [termAccepted, setTermAccepted] = useState(false);
	const [isDropDown, setDropDown] = useState(false);

	return (
		<>
			<ContainerDropDown
				isDropDown={isDropDown}
				alignTitleText={alignTitleText}
				alignSubText={alignSubText}
			>
				<li>
					<div className="dropdown-filter">
						<Text>{titleDropDown}</Text>
						<FaChevronDown onClick={() => setDropDown(!isDropDown)} />
					</div>
					{isDropDown && (
						<ul>
							{activeCheckBox &&
								textSubMenuWithCheckBox.map(p => (
									<li>
										<Checkbox
											messageAlert={checkBoxWithAlertMessage}
											callback={checked => {
												setTermAccepted(checked);
											}}
											value={p}
										></Checkbox>
									</li>
								))}
							{!activeCheckBox &&
								textSubMenuWithoutCheckBox.map(({ to, textSubMenu }) => (
									<li>
										<Link to={to}>
											<Text>{textSubMenu}</Text>
										</Link>
									</li>
								))}
						</ul>
					)}
				</li>
			</ContainerDropDown>
		</>
	);
};

export default DropDown;
