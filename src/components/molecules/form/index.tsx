import { StyledButton } from "@/components/atoms/button/styles";
import { Subtitle } from "@/styles/components/text/Subtitle";
import { Input, InputPropsComponent } from "@/components/atoms/input";

export type FormProps = {
	listOfComponent: InputPropsComponent[];
};

export const Form: React.FC<FormProps> = ({ listOfComponent }) => {
	return (
		<>
			<Subtitle>Informações de cadastro</Subtitle>
			{listOfComponent.map(item => (
				<ul>
					<li>
						<span>{item.name}</span>
						<Input
							value={item.value}
							setUseState={item.setUseState}
							key={`'input-'${item}`}
						/>
					</li>
				</ul>
			))}
		</>
	);
};

const FormInputs = [
	{
		span: "Nome:",
	},
	{
		span: "Email:",
		input: <Input value="" />,
	},
	{
		span: "Número:",
		input: <Input value="" />,
	},
	{
		span: "Número telefone:",
		input: <Input value="" />,
	},
	{
		span: "Senha:",
		input: (
			<StyledButton
				height="fit-content"
				width="fit-content"
				buttonStyle="filled"
				style={{
					fontSize: "16px",
					maxHeight: "32px",
					width: "fit-content",
				}}
			>
				Alterar Senha
			</StyledButton>
		),
	},
];
