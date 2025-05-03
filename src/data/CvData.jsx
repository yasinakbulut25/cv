import ProfileImg from "../../public/profile.png";
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
    Frontend Developer with experience in building <b>scalable</b> and <b>maintainable</b> user interfaces using technologies 
    such as <b>React, Next.js, Redux, Saga,</b> and <b>Styled Components</b>. Skilled in translating <b>design systems</b> into clean, 
    intuitive interfaces and delivering consistent user experiences across platforms.
    <br/> <br/>
    At Jotform, a platform serving over 25 million users, I worked as part of the <b>Product team</b>, contributing to key 
    features like <b>Push Notification, Copilot,</b> and <b>User Management</b> for the <b>No Code App Builder</b>, within a 
    <b>monorepo architecture</b> shared across teams. I also took part in the development of Jotform AI Agents, 
    creating dynamic email templates.
    <br/> <br/>
    Outside of my professional role, I built and deployed personal web projects that generate passive income and 
    strengthened my skills in end-to-end, scalable web development.
    <br/> <br/>
    I’m currently seeking new opportunities as a Frontend Developer, where I can apply my expertise, grow further, 
    and contribute to impactful digital products within collaborative teams.
    `,
  },
  experiences: {
    title: "Work Experiences",
    data: [
      {
        job: "UI Developer",
        jobDesc: `
        Worked within the Product team to improve user experience by refining features and contributing to new 
        functionalities in Jotform’s core platforms, using a Remote Development System (RDS).
        <br/>
        Participated in the development of international landing pages as part of the Growth team, 
        focusing on optimization and localization for global users.
        `,
        company: "Jotform",
        companyLink: "https://jotform.com/",
        startDate: "08/2023",
        endDate: "05/2025",
        technologies: [
          "React",
          "Redux",
          "Saga",
          "HTML",
          "CSS/SCSS",
          "JavaScript",
          "Styled Components",
          "Figma for dev",
          "Git / GitHub",
          "Monorepo",
          "RDS",
          "Notion",
        ],
      },
     /*  {
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
      }, */
      {
        job: "UI Developer (Part Time)",
        jobDesc:
          "Using HTML, CSS, JavaScript, and React, I helped identify and fix issues in Jotform products, improving the user experience.",
        company: "Jotform",
        companyLink: "https://jotform.com/",
        startDate: "11/2022",
        endDate: "07/2023",
        technologies: ["React", "HTML", "CSS/SCSS", "JavaScript", "Git / GitHub", "RDS", "Axios"],
      },
      {
        job: "UI Developer Intern",
        jobDesc:
          "Developed several web projects using HTML, CSS, JavaScript, and React.",
        company: "Jotform",
        companyLink: "https://jotform.com/",
        startDate: "08/2022",
        endDate: "09/2022",
        technologies: ["React", "HTML", "CSS/SCSS", "JavaScript", "Git / GitHub"],
      },
      {
        job: "Web Developer (voluntary)",
        jobDesc:
          "During my voluntary internship, I created corporate websites using WordPress and made CSS modifications to improve the themes.",
        company: "Gali Medya",
        companyLink: "https://www.galimedya.com/",
        startDate: "08/2021",
        endDate: "10/2021",
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
          "CSS/SCSS",
          "JavaScript",
          "PHP",
          "MySql",
          "TailwindCSS",
          "Bootstrap",
          "PhpMyAdmin",
          "cPanel",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    data: [
      {
        title: "Personal Portfolio",
        desc: `
          You can review all my experiences, projects, works, and skills.
        `,
        linkText: "yasinakbulut.dev",
        linkUrl: "https://yasinakbulut.dev",
        // technologies: ["React", "HTML", "CSS", "JavaScript", "PHP", "MySql"],
      },
      {
        title: "Customer Tracking System",
        desc: "A system with many features that allow dietitians to manage their customers more easily and quickly, write diets, and perform graphic analysis.",
        linkText: "diyettakibim.com",
        linkUrl: "https://diyettakibim.com",
        technologies: [
          "Sertifica: ICONDATA'22",
          /* "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "MySql", */
          "Shopier",
        ],
      },
      {
        title: "CV Creation and Customization",
        desc: "A CV creation system that offers many customization options such as templates, colors, fonts, languages, and themes.",
        linkText: "cv.yasinakbulut.dev",
        linkUrl: "https://cv.yasinakbulut.dev",
        // technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
      },
      {
        title: "Business Directory Site",
        desc: "A website hosting 250+ business in 140+ categories, for which I did full stack coding.",
        linkText: "esnafvitrinim.com",
        linkUrl: "https://esnafvitrinim.com",
        // technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
      },
      {
        title: "Software Developers Community",
        desc: "@kod_satirim is the blog site that I once used and shared about the software, which I developed as Full Stack for my instagram page.",
        linkText: "kodsatirim.yasinakbulut.dev",
        linkUrl: "https://kodsatirim.yasinakbulut.dev",
        /* technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "MySql",
          "Bootstrap",
        ], */
      },
      {
        title: "Consulting Site With Virtual Pos",
        desc: "A website offering services in E-Commerce, Social Media, and dropshipping. It uses iyzico infrastructure to sell packages and receive payments.",
        linkText: "danismanlik.yasinakbulut.dev",
        linkUrl: "https://danismanlik.yasinakbulut.dev",
        /* technologies: [
          "Iyzico",
          "PHP",
          "MySql",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
        ], */
      },
      {
        title: "Personal Portfolio for Dietitian",
        desc: "A personal website specially designed and developed for a dietitian, who provides online diet services.",
        linkText: "diyetisyengizemakbulut.com",
        linkUrl: "https://diyetisyengizemakbulut.com/",
        linkText2: "alminamesin.com",
        linkUrl2: "https://alminamesin.com/",
        // technologies: ["HTML", "PHP", "MySql", "CSS", "JavaScript"],
      },
      /* {
        title: "Calendar App",
        desc: "A dynamic calendar app developed with React, allowing users to take, edit, and customize notes on specific dates.",
        linkText: "calendar.yasinakbulut.dev",
        linkUrl: "https://calendar.yasinakbulut.dev/",
        // technologies: ["React", "HTML", "CSS"],
      }, */
      {
        title: "Personal Portfolio for IVF Specialist",
        desc: "A personal website specially designed and developed for a medical doctor specialized in IVF (In Vitro Fertilization), to promote their expertise, share medical content.",
        linkText: "arzuyurci.com",
        linkUrl: "https://arzuyurci.com/",
        // technologies: ["HTML", "PHP", "MySql", "CSS", "JavaScript"],
      },
    ],
  },
  skills: {
    title: "Skills",
    data: [
      {
        title: "Tech Stack",
        items: [
          "React",
          "Next.js",
          "Redux",
          "Saga",
          "Context API",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS/SCSS",
          "Styled Components",
          "PHP (PDO)",
          "TailwindCSS",
          "Bootstrap",
          "UI Libraries"
        ]
      },
      {
        title: "API & Database",
        items: [
          "RESTful API Integration",
          "Axios",
          "JSON",
          "Postman",
          "MySQL",
          "PhpMyAdmin"
        ]
      },
      {
        title: "Tools & Deployment",
        items: [
          "Git / GitHub",
          "Monorepo",
          "RDS",
          "ESLint",
          "Figma for dev",
          "Notion",
          "Slack",
          "CPanel",
          "Vercel",
          "Netlify"
        ]
      },
      {
        title: "Workflow",
        items: [
          "Agile / Scrum Methodology",
          "Problem Solving",
          "Team Collaboration"
        ]
      },
      {
        title: "Currently Learning",
        items: [
          "TypeScript",
          "Vue.js",
        ]
      }
    ]
  },
  references: {
    title: "References",
    data: [
      {
        name: "Ayhan Dönmez",
        title: "Senior Infrastructure & Cloud System Engineer at Türkiye İş Bankası",
        link: "https://www.linkedin.com/in/ayhandonmez/"
      },
      {
        name: "Onur Sencer",
        title: "Director of Product at Jotform",
        link: "https://www.linkedin.com/in/onur-sencer-917989a/"
      },
      {
        name: "Erdem Erol",
        title: "Team Lead / Senior Backend Developer at Jotform",
        link: "https://www.linkedin.com/in/virtuezza/"
      },
    ]
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
