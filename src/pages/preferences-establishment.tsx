import { Cache } from "@/app/domain/protocols/Cache";
import { Preferences } from "@/components/templates/preferences-template";
import { useState } from "react";

export type PreferencesProps = {
	cache: Cache;
};
const onClickSave = async () => {};
function PreferencesPage({ cache }: PreferencesProps) {
	const [isActiveButton, setIsActiveButton] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isEditable, setIsEditable] = useState<boolean>(false);

	return (
		<Preferences
			cache={cache}
			isSaveButtonActive={false}
			isLoading={false}
			onClickSaveButton={() => setIsEditable(true)}
			onClickEditable={() => setIsEditable(false)}
			isEditable={isEditable}
			onClickSave={onClickSave}
		/>
	);
}

export default PreferencesPage;
