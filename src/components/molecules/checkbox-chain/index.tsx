import Checkbox from "@/components/atoms/checkbox";
import React, { useState } from "react";
export type CheckBoxAuxProps = {
	id: string;
	value: string;
	key: string;
};
export class CheckBoxEntity {
	constructor(public params: Partial<CheckBoxAuxProps>) {}
}
type CheckboxChainProps = {
	checkboxes: CheckBoxEntity[];
};

const CheckboxChain: React.FC<CheckboxChainProps> = ({ checkboxes }) => {
	const [checkedCheckboxes, setCheckedCheckboxes] = useState<string[]>([]);

	const handleCheckboxChange = (id: string, checked: boolean) => {
		if (checked) {
			setCheckedCheckboxes(prevState => [...prevState, id]);
		} else {
			setCheckedCheckboxes(prevState =>
				prevState.filter(checkboxId => checkboxId !== id)
			);
		}
	};

	return (
		<div id="checkbox-chain">
			{checkboxes.map(checkbox => (
				<Checkbox
					key={checkbox.params.id}
					value={checkbox.params.value!}
					callback={checked => handleCheckboxChange(checkbox.params.value!, checked)}
					messageAlert={false}
				/>
			))}
			<p>
				Checkboxes marcados:{" "}
				{checkedCheckboxes.map(checkbox => (
					<span key={checkbox}>{checkbox}, </span>
				))}
			</p>
		</div>
	);
};

export default CheckboxChain;
