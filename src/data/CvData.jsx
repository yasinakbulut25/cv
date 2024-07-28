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
    text: `
      I'm a developer working to specialize in the frontend field with experience in UI development.
      I'm involved in projects that improve user experience and develop new features at Jotform.
      <br/> <br/>
      I have created my own websites and developed systems that generate passive income.
      My problem-solving skills and project management abilities allow me to contribute effectively to team projects.
      I aim to develop software that reaches a wide audience and gain more experience in this field.
    `,
  },
  experiences: {
    title: "Work Experiences",
    data: [
      {
        job: "Junior UI Developer",
        jobDesc: `
        I work on the Product team. Our main focus is to ensure smooth user experiences and continuously improve our products by enhancing existing features and adding new ones.
        I also worked on the Growth team. I develop and improve our international web pages.`,
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
          "Using HTML, CSS, JavaScript, and React, I helped identify and fix issues in Jotform products, improving the user experience.",
        company: "Jotform",
        companyLink: "https://jotform.com/",
        startDate: "01.11.2022",
        endDate: "03.07.2023",
        technologies: ["HTML", "CSS/SCSS", "JavaScript", "React"],
      },
      {
        job: "UI Developer Intern",
        jobDesc:
          "I developed several web projects using HTML, CSS, JavaScript, and React.",
        company: "Jotform",
        companyLink: "https://jotform.com/",
        startDate: "01.08.2022",
        endDate: "26.08.2022",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
      },
      {
        job: "Web Developer (voluntary)",
        jobDesc:
          "During my voluntary internship, I created corporate websites using WordPress and made CSS modifications to improve the themes.",
        company: "Gali Medya",
        companyLink: "https://www.galimedya.com/",
        startDate: "02.08.2021",
        endDate: "10.09.2021",
        technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "PHP"],
      },
      {
        job: "Freelance Full Stack Developer",
        jobDesc:
          "I developed many corporate websites using HTML, CSS, JavaScript, PHP, and MySQL, generating income from these projects. I improved my project management and communication skills.",
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
  projects: {
    title: "Projects",
    data: [
      {
        title: "Personal Portfolio",
        desc: "You can review all my experiences, projects, works, and skills on the website I developed for myself.",
        linkText: "yasinakbulut.dev",
        linkUrl: "https://yasinakbulut.dev",
        technologies: ["React", "HTML", "CSS", "JavaScript", "PHP", "MySql"],
      },
      {
        title: "Customer Tracking System",
        desc: "A system with many features that allow dietitians to manage their customers more easily and quickly, write diets, and perform graphic analysis.",
        linkText: "diyettakibim.com",
        linkUrl: "https://diyettakibim.com",
        technologies: [
          "Sertifica: ICONDATA'22",
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "MySql",
          "Shopier",
        ],
      },
      {
        title: "CV Creation and Customization",
        desc: "A CV creation system that offers many customization options such as templates, colors, fonts, languages, and themes.",
        linkText: "cv.yasinakbulut.dev",
        linkUrl: "https://cv.yasinakbulut.dev",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
      },
      {
        title: "Business Directory Site",
        desc: "A website hosting 250+ business in 140+ categories, for which I did full stack coding.",
        linkText: "esnafvitrinim.com",
        linkUrl: "https://esnafvitrinim.com",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
      },
      {
        title: "Software Developers Community",
        desc: "@kod_satirim is the blog site that I once used and shared about the software, which I developed as Full Stack for my instagram page.",
        linkText: "kodsatirim.yasinakbulut.dev",
        linkUrl: "https://kodsatirim.yasinakbulut.dev",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "MySql",
          "Bootstrap",
        ],
      },
      {
        title: "Consulting Site With Virtual Pos",
        desc: "A website offering services in E-Commerce, Social Media, and dropshipping. It uses iyzico infrastructure to sell packages and receive payments.",
        linkText: "danismanlik.yasinakbulut.dev",
        linkUrl: "https://danismanlik.yasinakbulut.dev",
        technologies: [
          "Iyzico",
          "PHP",
          "MySql",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
        ],
      },
      {
        title: "Personal Portfolio for Dietitian",
        desc: "A personal website specially designed and developed for a dietitian, who provides online diet services.",
        linkText: "diyetisyengizemakbulut.com",
        linkUrl: "https://diyetisyengizemakbulut.com/",
        technologies: ["HTML", "PHP", "MySql", "CSS", "JavaScript"],
      },
      {
        title: "Calendar App",
        desc: "A dynamic calendar app developed with React, allowing users to take, edit, and customize notes on specific dates.",
        linkText: "calendar.yasinakbulut.dev",
        linkUrl: "https://calendar.yasinakbulut.dev/",
        technologies: ["React", "HTML", "CSS"],
      },
    ],
  },
  skills: {
    title: "Skills",
    data: [
      "React",
      "Redux / Context",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Styled Components",
      "TailwindCSS",
      "Bootstrap",
      "Figma for dev",
      "GitHub",
      "PHP (PDO)",
      "MySql",
      "PhpMyAdmin",
    ],
  },
  educations: {
    title: "Education",
    data: [
      {
        title: "Bilecik Şeyh Edebali University",
        desc: "Bachelor's Degree in Computer Engineering.",
        startDate: "2018",
        endDate: "2023",
      },
    ],
  },
};
