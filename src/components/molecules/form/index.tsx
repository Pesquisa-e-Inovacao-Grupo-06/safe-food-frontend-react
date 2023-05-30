import { StyledButton } from '@/components/atoms/button/styles';
import { Subtitle } from '@/styles/components/text/Subtitle';
import { Input, InputPropsComponent } from '@/components/atoms/input';

export type FormProps = {
	listOfComponent: InputPropsComponent[];
};

export const Form: React.FC<FormProps> = ({ listOfComponent }) => {
	return (
		<>
			<Subtitle>Informações de cadastro</Subtitle>
			{listOfComponent.map(item => (
				<ul key={`${item.name}`}>
					<li>
						<span>{item.name}</span>
						<Input
							value={item.value}
							setUseState={item.setUseState}
							disabled={item.disabled}
						/>
					</li>
				</ul>
			))}
		</>
	);
};
