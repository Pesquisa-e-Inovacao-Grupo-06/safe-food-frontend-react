import { Restriction } from "@/app/domain/entities/Restriction";
import { ProfileTemplate } from "../components/templates/profile-consumer-template";

export const ProfileConsumer = () => {
	return (
		<ProfileTemplate
			restrictions={[new Restriction(1, "rest", "")]}
			address={[{ text: "asdas", subtitle: "bbbb" }]}
		></ProfileTemplate>
	);
};

export default ProfileConsumer;
