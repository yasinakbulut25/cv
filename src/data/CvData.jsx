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
  en: {
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
      As a Frontend Developer, I build performance-focused and scalable user interfaces using
      <b>React.js, Next.js, TypeScript, Redux, Redux-Saga</b>, and <b>Styled Components</b>. I have
      experience in <b>RESTful API</b> integration, component-based architecture, and turning design
      systems into user-friendly interfaces.
      <br/> <br/>
      At Jotform, a company serving over 25 million users, I worked as part of the <b>Product team</b>.
      Within a shared <b>monorepo</b> architecture, I contributed to core features of the <b>No Code App
      Builder</b> platform, such as <b>Push Notification, Copilot</b>, and <b>User Management</b>. I was also
      involved in the development of <b>Jotform AI Agents</b> and created dynamic email templates.
      <br/> <br/>
      In addition to my professional work, I developed personal side projects that <b>generate
      passive income</b> and helped me improve my full-stack web development skills.
      `,
    },
    experiences: {
      title: "Experiences",
      data: [
        {
          job: "Frontend Developer",
          jobDesc: `
          Actively involved in projects for global WPP brands, focusing on the development of responsive, UI/UX-driven, 
          and SEO-compliant web interfaces, localization workflows, and collaborative project coordination with cross-functional teams.
          `,
          company: "Hogarth",
          companyLink: "https://www.hogarth.com/",
          startDate: "07/2025",
          endDate: "still",
          technologies: [
            "React",
            "Redux",
            "Saga",
            "HTML",
            "CSS/SCSS",
            "JavaScript",
            "Styled Components",
            "SVN",
            "Radar",
          ],
        },
        {
          hasMulti: true,
          jobs: [
            {
              job: "Frontend Developer",
              jobDesc: `
          At Jotform, I worked in the Product team, where I developed new features and improved
          existing functionalities on the main platforms using RDS infrastructure. I also played an active
          role in the Growth team, contributing to the development of landing pages focused on
          localization and performance optimization for global users.
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
            {
              job: "Frontend Developer (Part Time)",
              jobDesc:
                "I worked on improving user experience in Jotform products by fixing UI bugs using React.js, JavaScript, HTML, CSS.",
              company: "Jotform",
              companyLink: "https://jotform.com/",
              startDate: "11/2022",
              endDate: "07/2023",
              technologies: [
                "React",
                "HTML",
                "CSS/SCSS",
                "JavaScript",
                "Git / GitHub",
                "RDS",
                "Axios",
              ],
            },
            {
              job: "Intern Developer",
              jobDesc:
                "I worked on Frontend Development and component-based structure in various web projects using React.js, HTML, CSS, and JavaScript.",
              company: "Jotform",
              companyLink: "https://jotform.com/",
              startDate: "08/2022",
              endDate: "09/2022",
              technologies: [
                "React",
                "HTML",
                "CSS/SCSS",
                "JavaScript",
                "Git / GitHub",
              ],
            },
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
          job: "Frontend Developer",
          jobDesc:
            "I developed corporate websites based on WordPress and customized themes and CSS styles.",
          company: "Gali Medya",
          companyLink: "https://www.galimedya.com/",
          startDate: "08/2021",
          endDate: "10/2021",
          technologies: ["Wordpress", "HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          job: "Freelance Full Stack Developer",
          jobDesc: `
            I developed many websites using React.js, Next.js, Redux, Redux-Saga, TypeScript, JavaScript, 
            HTML, CSS, PHP, and MySQL. In these projects, I gained experience in RESTful API integration, 
            UI/UX development, database management, project planning and client communication.
            `,
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
            You can review all my experiences, projects, works, skills and blog posts.
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
          desc: "A personal website specially designed and developed for a medical doctor specialized in IVF, to promote their expertise, share medical content.",
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
            "React.js",
            "Next.js",
            "Redux",
            "Saga",
            "Context API",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS/SCSS",
            "Styled Components",
            "TailwindCSS",
            "Bootstrap",
            "UI Libraries",
            "PWA",
            "Lighthouse",
            "React DevTools",
            "Redux DevTools",
            "PHP (PDO)",
          ],
        },
        {
          title: "API & Database",
          items: [
            "RESTful API Integration",
            "Axios",
            "JSON",
            "Postman",
            "MySQL",
            "PhpMyAdmin",
          ],
        },
        {
          title: "Tools & Deployment",
          items: [
            "Git / GitHub",
            "CI / CD",
            "GitHub Actions",
            "Unit Test",
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
            "Team Collaboration",
          ],
        },
        {
          title: "Currently Learning",
          items: ["TypeScript", "Vue.js"],
        },
      ],
    },
    references: {
      title: "References",
      data: [
        {
          name: "Ayhan Dönmez",
          title:
            "Senior Infrastructure & Cloud System Engineer at Türkiye İş Bankası",
          link: "https://www.linkedin.com/in/ayhandonmez/",
        },
        {
          name: "Onur Sencer",
          title: "Director of Product at Jotform",
          link: "https://www.linkedin.com/in/onur-sencer-917989a/",
        },
        {
          name: "Erdem Erol",
          title: "Team Lead / Senior Backend Developer at Jotform",
          link: "https://www.linkedin.com/in/virtuezza/",
        },
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
  },
  tr: {
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
      Frontend Developer olarak <b>React.js, Next.js, TypeScript, Redux, Redux-Saga</b> ve <b>Styled
      Components</b> ile performans odaklı, ölçeklenebilir arayüzler geliştiriyorum. <b>RESTful API</b>
      entegrasyonları, component mimarisi ve tasarım sistemlerini kullanıcı dostu arayüzlere
      dönüştürme konularında deneyimliyim.
      <br/><br/>
      25 milyondan fazla kullanıcıya hizmet veren bir şirket olan Jotform'da, <b>Product</b> ekibinin bir
      parçası olarak çalıştım ve ekipler arasında paylaşılan bir <b>monorepo</b> mimarisi içinde <b>No
      Code App Builder</b> platformu için <b>Push Notification, Copilot</b> ve <b>User Management</b> gibi
      temel özelliklere katkıda bulundum. Ayrıca <b>Jotform AI Agents</b>'ın geliştirilmesinde yer aldım
      ve dinamik e-posta şablonları oluşturdum.
      <br/><br/>
      Profesyonel işlerimin yanı sıra, <b>pasif gelir sağlayan kişisel projeler</b> geliştirerek uçtan uca web geliştirme becerilerimi pekiştirdim.
      `,
    },
    experiences: {
      title: "Deneyimler",
      data: [
        {
          job: "Frontend Developer",
          jobDesc: `
          Global WPP markalarına ait projelerde, responsive, UI/UX ve SEO odaklı web arayüzlerinin geliştirilmesi, lokalizasyonu 
          ve ekiplerle koordineli proje yönetimi süreçlerinde aktif rol alıyorum.
          `,
          company: "Hogarth",
          companyLink: "https://www.hogarth.com/",
          startDate: "07/2025",
          endDate: "devam",
          technologies: [
            "React",
            "Redux",
            "Saga",
            "HTML",
            "CSS/SCSS",
            "JavaScript",
            "Styled Components",
            "SVN",
            "Radar",
          ],
        },
        {
          hasMulti: true,
          jobs: [
            {
              job: "Frontend Developer",
              jobDesc: `
          Jotform'da Product ekibinde, ana platformlar üzerinde RDS altyapısını kullanarak yeni özellikler
          geliştirdim ve mevcut işlevlerin iyileştirilmesine katkı sağladım. Ayrıca Growth ekibinde, global
          kullanıcıları hedefleyen yerelleştirme ve performans optimizasyonuna yönelik açılış sayfalarının
          geliştirilmesinde aktif rol aldım.
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
            {
              job: "UI Developer (Part Time)",
              jobDesc:
                "Jotform ürünlerinde HTML, CSS, JavaScript ve React.js ile arayüz hatalarını gidererek kullanıcı deneyimini iyileştirmeye yönelik çalışmalar yaptım.",
              company: "Jotform",
              companyLink: "https://jotform.com/",
              startDate: "11/2022",
              endDate: "07/2023",
              technologies: [
                "React",
                "HTML",
                "CSS/SCSS",
                "JavaScript",
                "Git / GitHub",
                "RDS",
                "Axios",
              ],
            },
            {
              job: "UI Developer Stajyeri",
              jobDesc:
                "React.js, HTML, CSS ve JavaScript kullanarak çeşitli web projelerinde arayüz geliştirme ve component bazlı yapı kurma konularında görev aldım.",
              company: "Jotform",
              companyLink: "https://jotform.com/",
              startDate: "08/2022",
              endDate: "09/2022",
              technologies: [
                "React",
                "HTML",
                "CSS/SCSS",
                "JavaScript",
                "Git / GitHub",
              ],
            },
          ],
        },
        {
          job: "Web Developer",
          jobDesc:
            "WordPress tabanlı kurumsal web siteleri geliştirerek tema ve CSS özelleştirmeleri yaptım.",
          company: "Gali Medya",
          companyLink: "https://www.galimedya.com/",
          startDate: "08/2021",
          endDate: "10/2021",
          technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          job: "Freelance Full Stack Geliştirici",
          jobDesc: `
          React.js, Next.js, Redux, Redux-Saga, TypeScript, JavaScript, HTML, CSS, PHP ve MySQL kullanarak 
          birçok kurumsal web sitesi geliştirdim. Bu projelerde RESTful API entegrasyonları, UI/UX geliştirme, 
          veritabanı yönetimi, proje planlama ve müşteri iletişimi konularında deneyimler edindim.
          `,
          company: "Freelance Full Stack Developer",
          startDate: "Üniversite",
          endDate: "Devam",
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
          desc: "Tüm deneyimlerimi, projelerimi, çalışmalarımı, becerilerimi ve blog yazılarımı inceleyebilirsiniz.",
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
            "React.js",
            "Next.js",
            "Redux",
            "Saga",
            "Context API",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS/SCSS",
            "Styled Components",
            "TailwindCSS",
            "Bootstrap",
            "UI Libraries",
            "PWA",
            "Lighthouse",
            "React DevTools",
            "Redux DevTools",
            "PHP (PDO)",
          ],
        },
        {
          title: "API & Veritabanı",
          items: [
            "RESTful API",
            "Axios",
            "JSON",
            "Postman",
            "MySQL",
            "PhpMyAdmin",
          ],
        },
        {
          title: "Yayınlama ve Geliştirme",
          items: [
            "Git / GitHub",
            "CI / CD",
            "GitHub Actions",
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
          items: [
            "Agile / Scrum Metodoloji",
            "Problem Çözme",
            "Takım Çalışması",
          ],
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
          title:
            "Senior Infrastructure & Cloud System Engineer at Türkiye İş Bankası",
          link: "https://www.linkedin.com/in/ayhandonmez/",
        },
        {
          name: "Onur Sencer",
          title: "Director of Product at Jotform",
          link: "https://www.linkedin.com/in/onur-sencer-917989a/",
        },
        {
          name: "Erdem Erol",
          title: "Team Lead / Senior Backend Developer at Jotform",
          link: "https://www.linkedin.com/in/virtuezza/",
        },
      ],
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
  },
};
