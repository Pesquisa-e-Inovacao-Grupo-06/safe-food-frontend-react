import { ProfilePhotoUploadWithPreview } from "@/components/molecules/upload-profile-photo"

export type MapsTemplateParams = {}
export const MapsTemplate: React.FC<MapsTemplateParams> = ({ }) => {
    return (<>
        <ProfilePhotoUploadWithPreview name={""} id={""} width={""} fileChange={() => { }}></ProfilePhotoUploadWithPreview>
    </>)
}