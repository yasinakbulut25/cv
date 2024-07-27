import { Image } from "@nextui-org/react";
import { CV_DATA } from "../data/CvData";

function Profile() {
  const { name, profileImg } = CV_DATA;
  return (
    <div className="relative flex shrink-0 overflow-hidden rounded-xl size-36">
      <Image
        className="aspect-square object-cover h-full w-full"
        alt={name}
        src={profileImg}
      />
    </div>
  );
}

export default Profile;
