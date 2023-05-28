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
	onCheckboxChainChange: (checkedCheckboxes: string[]) => void;
};

const CheckboxChain: React.FC<CheckboxChainProps> = ({
	checkboxes,
	onCheckboxChainChange,
}) => {
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

	// Chama a função de callback para atualizar o componente pai com os checkboxes marcados
	React.useEffect(() => {
		onCheckboxChainChange(checkedCheckboxes);
	}, [checkedCheckboxes, onCheckboxChainChange]);

	return (
		<div id="checkbox-chain">
			{checkboxes.map(checkbox => (
				<Checkbox
					key={checkbox.params.id}
					value={checkbox.params.value!}
					callback={checked => handleCheckboxChange(checkbox.params.id!, checked)}
					messageAlert={false}
				/>
			))}

		</div>
	);
};

export default CheckboxChain;
