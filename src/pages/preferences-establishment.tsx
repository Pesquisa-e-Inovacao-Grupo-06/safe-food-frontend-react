import { Cache } from "@/app/domain/protocols/Cache";
import { Preferences } from "@/components/templates/preferences-template";

export type PreferencesProps = {
	cache: Cache;
};

function PreferencesPage({ cache }: PreferencesProps) {
	return <Preferences cache={cache} />;
}

export default PreferencesPage;
