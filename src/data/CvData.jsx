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
  projects: {
    title: "Projects",
    data: [
      {
        title: "Personal Portfolio",
        desc: "You can review all my experiences, projects, works, and skills through the website that I have personally developed for myself.",
        linkText: "yasinakbulut.dev",
        linkUrl: "https://yasinakbulut.dev",
        technologies: ["React", "HTML", "CSS", "JavaScript", "PHP", "MySql"],
      },
      {
        title: "Customer Tracking System",
        desc: "A system with many features such as allowing dietitians to manage their customers more easily and quickly, writing diets, and graphic analysis.",
        linkText: "diyettakibim.com",
        linkUrl: "https://diyettakibim.com",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Shopier"],
      },
      {
        title: "CV Creation and Customization",
        desc: "CV creation system that offers easy CV creation and many customization options such as template, color, font, language and theme.",
        linkText: "cv.yasinakbulut.dev",
        linkUrl: "https://cv.yasinakbulut.dev",
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
        title: "Business Directory Site",
        desc: "A Business Directory website for Esnaf Vitrinim, which hosts 250+ companies in 140+ categories, for which I have done fullstack coding.",
        linkText: "esnafvitrinim.com",
        linkUrl: "https://esnafvitrinim.com",
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
        desc: "Consulting Site With sanal pos is a dynamic consultancy website that provides consultancy services such as E-Commerce, Social Media, Google ads, marketplaces, dropshopping, and can get paid by selling packages using the iyzico infrastructure.",
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
        desc: "A personal website specially designed and developed for Dietitian Gizem Akbulut, who provides online diet services.",
        linkText: "diyetisyengizemakbulut.com",
        linkUrl: "https://diyetisyengizemakbulut.com/",
        technologies: [
          "HTML",
          "PHP",
          "MySql",
          "CSS",
          "JavaScript",
          "Bootstrap",
        ],
      },
      {
        title: "Calendar App",
        desc: "This project is a dynamic calendar application developed using React. With this application, users can take notes on specific dates, edit notes, and customize them as per their preferences.",
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
      "Figma for dev",
      "GitHub",
      "PHP (PDO)",
      "MySql",
      "PhpMyAdmin",
    ],
  },
};
