import ProfileImg from "../assets/profile.png";
import {
  LocationIcon,
  EmailIcon,
  LinkedInIcon,
  PhoneIcon,
  GitHubIcon,
  LinkIcon,
} from "../components/icons";

const iconSize = 14;

export const CV_DATA = {
  name: "Yasin Akbulut",
  jobDetail: "Frontend / UI Developer",
  profileImg: ProfileImg,
  contact: [
    {
      text: "Istanbul, Turkey",
      url: "https://www.google.com/maps/place/Istanbul",
      icon: <LocationIcon width={iconSize} />,
    },
    {
      text: "akbulutyasin07@gmail.com",
      url: "mailto:akbulutyasin07@gmail.com",
      icon: <EmailIcon width={iconSize} />,
    },
    {
      text: "yasinakbulut",
      url: "https://www.linkedin.com/in/yasinakbulut/",
      icon: <LinkedInIcon width={iconSize} />,
    },
    {
      text: "539 648 8206",
      url: "tel:+905396488206",
      icon: <PhoneIcon width={iconSize} />,
    },
    {
      text: "yasinakbulut25",
      url: "https://github.com/yasinakbulut25",
      icon: <GitHubIcon width={iconSize} />,
    },
    {
      text: "yasinakbulut.dev",
      url: "https://yasinakbulut.dev",
      icon: <LinkIcon width={iconSize} />,
    },
  ],
};