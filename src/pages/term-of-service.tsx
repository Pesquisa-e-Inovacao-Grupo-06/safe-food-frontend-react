import { Modal } from "@/components/molecules/modal";
import { TextQuestionsOrganism } from "@/components/organisms/text-questions/text-quetions";
import { useState } from "react";
import styled from "styled-components";


function TermOfService() {
	const [termAccepted, setTermAccepted] = useState(false);

	return (
		<TextQuestionsOrganism></TextQuestionsOrganism>
	);
}

export default TermOfService;



export const StyledModal = styled(Modal)`
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background-color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[600]};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[800]
			: p.theme.colors.dark_gray[1000]};
		border-radius: 50px;
		border: 3px solid
			${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[200]
			: p.theme.colors.dark_gray[600]};

		::-webkit-scrollbar-thumb:hover {
			background-color: ${p =>
		p.theme.name == "light"
			? p.theme.colors.light_gray[800]
			: p.theme.colors.black};
		}
	}
`;
