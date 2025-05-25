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
  "en": {
    name: "Yasin Akbulut",
    jobDetail: "Frontend Developer",
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
          job: "Frontend / UI Developer",
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
          job: "Web Developer",
          jobDesc:
            "I created corporate websites using WordPress and made CSS modifications to improve the themes.",
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
          company: "Freelance Full Stack Developer",
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
            "CI / CD",
            "Unit Test",
            "Microservices",
            "Monorepo",
            "RDS",
            "ESLint",
            "cPanel",
            "Vercel",
            "Netlify",
          ],
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
  },
  "tr": {
    name: "Yasin Akbulut",
    jobDetail: "Frontend Developer",
    profileImg: ProfileImg,
    contact: [
      {
        text: "İstanbul, Türkiye",
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
      title: "Hakkımda",
      text: `
      Frontend Developer olarak, <b>React, Next.js, Redux, Saga, TypeScript</b> ve <b>Styled Components</b> gibi teknolojileri kullanarak ölçeklenebilir ve 
      sürdürülebilir kullanıcı arayüzleri oluşturma konusunda deneyimliyim. 
      Tasarım sistemlerini temiz ve kullanılabilir arayüzlere dönüştürme ve platformlar arasında tutarlı 
      kullanıcı deneyimleri sunma konusunda yetenekliyim.
  <br/><br/>
  25 milyondan fazla kullanıcıya hizmet veren bir şirket olan Jotform'da, <b>Product ekibinin</b> bir parçası olarak çalıştım 
  ve ekipler arasında paylaşılan bir <b>monorepo mimarisi</b> içinde <b>No Code App Builder</b> platformu için <b>Push Notification, Copilot</b> 
  ve <b>User Management</b> gibi temel özelliklere katkıda bulundum. Ayrıca Jotform AI Agents'ın geliştirilmesinde 
  yer aldım ve <b>dinamik e-posta şablonları</b> oluşturdum.
  <br/><br/>
  Profesyonel işlerimin dışında, pasif gelir sağlayan kişisel projeler geliştirerek uçtan uca web geliştirme becerilerimi pekiştirdim.
  <br/><br/>
  Frontend Developer olarak hem katkı sağlayabileceğim hem de kendimi daha ileri taşıyabileceğim ekiplerde yer almak için yeni fırsatlar arıyorum.
      `,
    },
    experiences: {
      title: "İş Deneyimleri",
      data: [
        {
          job: "Frontend / UI Developer",
          jobDesc: `
Product ekibinde, Jotform’un ana platformlarında RDS altyapısıyla yeni özellikler geliştirdim ve mevcut işlevleri iyileştirdim.
  <br/>
  Ayrıca Growth ekibinde, global kullanıcılar için yerelleştirme ve optimizasyon odaklı açılış sayfalarının geliştirilmesine katkı sağladım.`,
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
        {
          job: "UI Developer (Part Time)",
          jobDesc:
            "Jotform ürünlerindeki kullanıcı deneyimini artırmak için HTML, CSS, JavaScript ve React ile hata giderme ve düzeltme çalışmaları yaptım.",
          company: "Jotform",
          companyLink: "https://jotform.com/",
          startDate: "11/2022",
          endDate: "07/2023",
          technologies: ["React", "HTML", "CSS/SCSS", "JavaScript", "Git / GitHub", "RDS", "Axios"],
        },
        {
          job: "UI Developer Stajyeri",
          jobDesc: "HTML, CSS, JavaScript ve React kullanarak çeşitli web projeleri geliştirdim.",
          company: "Jotform",
          companyLink: "https://jotform.com/",
          startDate: "08/2022",
          endDate: "09/2022",
          technologies: ["React", "HTML", "CSS/SCSS", "JavaScript", "Git / GitHub"],
        },
        {
          job: "Web Developer",
          jobDesc:
            "WordPress altyapısıyla kurumsal web siteleri geliştirdim ve tema üzerinde CSS düzenlemeleri yaptım.",
          company: "Gali Medya",
          companyLink: "https://www.galimedya.com/",
          startDate: "08/2021",
          endDate: "10/2021",
          technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          job: "Freelance Full Stack Geliştirici",
          jobDesc:
            "HTML, CSS, JavaScript, PHP ve MySQL kullanarak birçok kurumsal web sitesi geliştirdim. Bu süreçte proje yönetimi ve müşteri iletişimi becerilerimi geliştirdim.",
          company: "Freelance Full Stack Developer",
          startDate: "Üniversite dönemi",
          endDate: "Devam ediyor",
          technologies: [
            "HTML",
            "CSS/SCSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "TailwindCSS",
            "Bootstrap",
            "PhpMyAdmin",
            "cPanel",
          ],
        },
      ],
    },
    projects: {
      title: "Projeler",
      data: [
        {
          title: "Kişisel Portfolyo",
          desc: "Tüm deneyimlerimi, projelerimi ve becerilerimi görebileceğiniz kişisel web sitem.",
          linkText: "yasinakbulut.dev",
          linkUrl: "https://yasinakbulut.dev",
        },
        {
          title: "Diyet Takip Sistemi",
          desc: "Diyetisyenlerin danışanlarını kolayca yönetebileceği, diyet yazabileceği ve grafik analiz yapabileceği sistem.",
          linkText: "diyettakibim.com",
          linkUrl: "https://diyettakibim.com",
          technologies: ["Sertifika: ICONDATA'22", "Shopier"],
        },
        {
          title: "CV Oluşturma Aracı",
          desc: "Şablon, renk, yazı tipi, dil ve tema gibi birçok özelleştirme seçeneği sunan CV oluşturma platformu.",
          linkText: "cv.yasinakbulut.dev",
          linkUrl: "https://cv.yasinakbulut.dev",
        },
        {
          title: "Firma Rehberi",
          desc: "140’tan fazla kategoride 250+ işletmenin yer aldığı, full stack olarak geliştirdiğim rehber sitesi.",
          linkText: "esnafvitrinim.com",
          linkUrl: "https://esnafvitrinim.com",
        },
        {
          title: "Yazılımcı Topluluğu",
          desc: "@kod_satirim, instagram sayfam için Full Stack olarak geliştirdiğim ve daha önce kullandığım blog sitesidir.",
          linkText: "kodsatirim.yasinakbulut.dev",
          linkUrl: "https://kodsatirim.yasinakbulut.dev",
        },
        {
          title: "Danışmanlık Sitesi (Sanal Poslu)",
          desc: "E-Ticaret, Sosyal Medya ve Dropshipping alanlarında paket hizmet sunan ve iyzico altyapısıyla ödeme alan site.",
          linkText: "danismanlik.yasinakbulut.dev",
          linkUrl: "https://danismanlik.yasinakbulut.dev",
        },
        {
          title: "Diyetisyen Portfolyo Siteleri",
          desc: "Online diyet hizmeti sunan diyetisyenler için özel tasarım ve yazılım geliştirdiğim siteler.",
          linkText: "diyetisyengizemakbulut.com",
          linkUrl: "https://diyetisyengizemakbulut.com/",
          linkText2: "alminamesin.com",
          linkUrl2: "https://alminamesin.com/",
        },
        {
          title: "Tüp Bebek Uzmanı Portfolyo",
          desc: "Tüp bebek alanında uzman bir doktor için hazırlanan kişisel tanıtım ve tıbbi içerik paylaşma sitesi.",
          linkText: "arzuyurci.com",
          linkUrl: "https://arzuyurci.com/",
        },
      ],
    },
    skills: {
      title: "Yetenekler",
      data: [
        {
          title: "Teknolojiler",
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
            "UI Libraries",
          ],
        },
        {
          title: "API & Veritabanı",
          items: ["RESTful API", "Axios", "JSON", "Postman", "MySQL", "PhpMyAdmin"],
        },
        {
          title: "Yayınlama ve Geliştirme",
          items: [
            "Git / GitHub",
            "CI / CD",
            "Unit Test",
            "Microservices",
            "Monorepo",
            "RDS",
            "ESLint",
            "cPanel",
            "Vercel",
            "Netlify",
          ],
        },
        {
          title: "Çalışma Biçimi",
          items: ["Agile / Scrum Metodoloji", "Problem Çözme", "Takım Çalışması"],
        },
        {
          title: "Mevcut Öğrenimlerim",
          items: ["TypeScript", "Vue.js"],
        },
      ],
    },
    references: {
      title: "Referanslar",
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
      title: "Eğitim",
      data: [
        {
          title: "Bilecik Şeyh Edebali Üniversitesi",
          desc: "Bilgisayar Mühendisliği Lisans Eğitimi",
          startDate: "2018",
          endDate: "2023",
        },
      ],
    },
  }  
}
