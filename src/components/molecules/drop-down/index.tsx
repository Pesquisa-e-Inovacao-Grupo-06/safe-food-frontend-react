import Checkbox from "@/components/atoms/checkbox";
import { Text } from "@/components/atoms/text";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContainerDropDown } from "./styles";
import CheckboxChain, { CheckBoxEntity } from "../checkbox-chain";

export type alignSubMenu = "center" | "start" | "end";

export type DropDownProps = {
	titleDropDown?: string;
	activeCheckBox?: boolean;
	checkBoxWithAlertMessage?: boolean;
	textSubMenuWithoutCheckBox?: { to: string; textSubMenu: string }[];
	textSubMenuWithCheckBox: Array<string>;
	alignTitleText?: boolean;
	alignSubText?: alignSubMenu;
	checkList: CheckBoxEntity[];
};

const DropDown: React.FC<DropDownProps> = ({
	titleDropDown = "Title",
	activeCheckBox = false,
	checkBoxWithAlertMessage = false,
	textSubMenuWithoutCheckBox = [
		{
			to: "/",
			textSubMenu: "textsubmenu",
		},
	],
	textSubMenuWithCheckBox = [],
	alignTitleText = true,
	alignSubText = "center",
	checkList,
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
							{activeCheckBox && (
								<li>
									<CheckboxChain checkboxes={checkList} />

									{/* <Checkbox
											messageAlert={checkBoxWithAlertMessage}
											callback={checked => {
												setTermAccepted(checked);
											}}
											value={p}
										></Checkbox> */}
								</li>
							)}
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
