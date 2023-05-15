import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
export type ModalActive = "login" | "consumer" | "establishment" | null;

export type ModalHomeContextParams = {
	modal: ModalActive;
	setModal: Dispatch<SetStateAction<ModalActive>>;
};
export const ModalHomeConsumerContext = createContext<ModalHomeContextParams>(
	{} as ModalHomeContextParams
);

export const useModalHome = () => useContext(ModalHomeConsumerContext);

type ModalHomeProviderProps = {} & PropsWithChildren;
export const ModalHomeProvider: FC<ModalHomeProviderProps> = props => {
	const [modal, setModal] = useState<ModalActive>(null);

	return (
		<ModalHomeConsumerContext.Provider
			value={{
				modal,
				setModal,
			}}
		>
			{props.children}
		</ModalHomeConsumerContext.Provider>
	);
};
