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
  about: {
    title: "About",
    text: `I'm developing myself in the field of frontend and I aim to direct my career in this field in the future. 
    I have developed many web projects and I have coded the designs of all the projects I have developed myself. 
    I used PHP PDO as backend in my projects.
    <br/> <br/>
    I have created my own websites and written systems that can generate passive income. 
    In my career, I aim to be involved in a software developed in the web field that appeals to a large audience.`,
  },
  experiences: {
    title: "Experiences",
    data: [
      {
        job: "Junior UI Developer",
        jobDesc: `
        I work as a Jr. UI Developer in the Product team at Jotform, a company with over 20 million users. Our primary focus is to ensure seamless user experiences and continually improve our products. We work as a team focused on improving existing features and constantly improving the user experience by adding new features.
        <br/><br/>
        I also worked as a Junior UI Developer in the Localization Growth team, which is a large Growth team. I worked on the development and improvement of our company's international web pages, such as German and Spanish. Our main goal was to contribute to the growth of the company by increasing the international user base.`,
        company: "Jotform",
        companyLink: "https://jotform.com/",
        startDate: "21.08.2023",
        endDate: "Present",
        technologies: [
          "React",
          "Redux",
          "HTML",
          "CSS/SCSS",
          "JavaScript",
          "Styled Components",
          "Figma for dev",
        ],
      },
      {
        job: "UI Developer (Part Time)",
        jobDesc:
          "After successfully completing an internship, I joined Jotform as a part-time UI Developer. Utilizing HTML, CSS, JavaScript, and React, I actively participated in identifying and resolving issues within Jotform products, thereby contributing to the continuous improvement of user experience.",
        company: "Jotform",
        companyLink: "https://jotform.com/",
        startDate: "01.11.2022",
        endDate: "03.07.2023",
        technologies: ["HTML", "CSS/SCSS", "JavaScript", "React"],
      },
      {
        job: "UI Developer Intern",
        jobDesc:
          "I developed various web projects using HTML, CSS, JavaScript, and React technologies. My internship provided a significant opportunity for both personal and career growth. During this period, I not only enhanced my coding skills but also developed proficiency in project management, problem-solving, and communication.",
        company: "Jotform",
        companyLink: "https://jotform.com/",
        startDate: "01.08.2022",
        endDate: "26.08.2022",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
      },
      {
        job: "Web Developer (voluntary)",
        jobDesc:
          "During my voluntary internship, I created corporate websites using WordPress and implemented various CSS modifications to enhance the theme.",
        company: "Gali Medya",
        companyLink: "https://www.galimedya.com/",
        startDate: "02.08.2021",
        endDate: "10.09.2021",
        technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "PHP"],
      },
      {
        job: "Freelance Full Stack Developer",
        jobDesc:
          "As a freelancer, I have developed numerous corporate websites using HTML, CSS, JavaScript, PHP, and MySQL, generating income from these projects. Throughout this process, I honed my technical skills by crafting customized solutions tailored to meet the unique needs of clients. Simultaneously, I enhanced my project management and communication skills, gaining valuable experience in establishing successful business relationships.",
        company: "Freelancer",
        startDate: "Since university",
        endDate: "Still",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "MySql",
          "Tailwind",
          "Bootstrap",
        ],
      },
    ],
  },
};
