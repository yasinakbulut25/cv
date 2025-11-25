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
    jobDetail: "Frontend Developer (React | Next.js | TypeScript)",
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
        I develop modern, high-performance, and scalable interfaces using 
        <strong>React.js, Next.js, TypeScript, JavaScript, and jQuery</strong>. 
        I build strong UI foundations with 
        <strong>HTML, CSS/SAAS, Styled Components, TailwindCSS</strong> and various 
        <strong>UI libraries</strong>.
        <br/>
        <br/>
        I manage global state with 
        <strong>Redux Toolkit, Saga, Zustand, and Context API</strong>. 
        I have experience with 
        <strong>RESTful API</strong> integrations, 
        <strong>JWT</strong> authentication, 
        <strong>Git</strong> version control, 
        <strong>CI/CD</strong> pipelines, 
        <strong>PWA</strong> development, 
        <strong>monorepo</strong> structures, 
        <strong>UI/UX</strong> improvements, 
        <strong>pixel-perfect UI</strong> and 
        <strong>reusable component</strong> architecture.
        <br/>
        <br/>
        I am experienced in teamwork, agile methodologies, sprint cycles, and task management. 
        In addition to my professional work, I build 
        <strong>personal SaaS projects that generate passive income</strong>, giving me 
        end-to-end product development experience.
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
              I worked in the <strong>Product</strong> team at Jotform, a company serving over 
              25 million users. I contributed to projects such as 
              <strong>No Code App Builder</strong>, <strong>Push Notification</strong>, 
              <strong>Copilot</strong>, and <strong>User Management</strong> within a 
              shared <strong>monorepo</strong> architecture across multiple teams.
              <span class="block mt-2">I developed user-focused, pixel-perfect interfaces and worked on UI/UX improvements, bug fixing and component architecture.</span>
              `,
              company: "Jotform",
              companyLink: "https://jotform.com/",
              startDate: "11/2022",
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
            // {
            //   job: "Frontend Developer (Part Time)",
            //   jobDesc:
            //     "I worked on improving user experience in Jotform products by fixing UI bugs using React.js, JavaScript, HTML, CSS.",
            //   company: "Jotform",
            //   companyLink: "https://jotform.com/",
            //   startDate: "11/2022",
            //   endDate: "07/2023",
            //   technologies: [
            //     "React",
            //     "HTML",
            //     "CSS/SCSS",
            //     "JavaScript",
            //     "Git / GitHub",
            //     "RDS",
            //     "Axios",
            //   ],
            // },
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
            "I worked on developing and improving corporate websites and contributed to SEO optimization tasks.",
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
            You can review all my experiences, projects, skills, and blog articles on my website.
          `,
          links: [
            {
              linkText: "yasinakbulut.dev",
              linkUrl: "https://yasinakbulut.dev",
            },
          ],
          // technologies: ["React", "HTML", "CSS", "JavaScript", "PHP", "MySql"],
        },
        {
          title: "Diyet Takibim",
          desc: "A SaaS platform that provides client management and progress tracking for dietitians.",
          links: [
            {
              linkText: "diyettakibim.com",
              linkUrl: "https://diyettakibim.com",
            },
          ],
          technologies: [
            "Sertifica: ICONDATA'22",
            /* "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySql", 
            "Shopier",*/
          ],
        },
        {
          title: "Wordora",
          desc: "A modern and fast PWA application for learning English vocabulary.",
          links: [
            {
              linkText: "wordora.yasinakbulut.dev",
              linkUrl: "https://wordora.yasinakbulut.dev",
            },
          ],
        },
        {
          title: "CV Creation and Customization",
          desc: "A CV creation platform that offers many customization options such as templates, colors, fonts, language, and theme.",
          links: [
            {
              linkText: "cv.yasinakbulut.dev",
              linkUrl: "https://cv.yasinakbulut.dev",
            },
          ],
          // technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
        },
        {
          title: "Software Developers Community",
          desc: "A full-stack blog platform I developed for sharing software-related content.",
          links: [
            {
              linkText: "kodsatirim.yasinakbulut.dev",
              linkUrl: "https://kodsatirim.yasinakbulut.dev",
            },
          ],
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
          title: "Business Directory Site",
          desc: "A full-stack business directory featuring 140+ categories and over 250 companies.",
          links: [
            {
              linkText: "esnafvitrinim.com",
              linkUrl: "https://esnafvitrinim.com",
            },
          ],
          // technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySql"],
        },
        {
          title: "Consulting Site With Virtual Pos",
          desc: "A website offering E-commerce, Social Media, and Dropshipping services with iyzico payment support.",
          links: [
            {
              linkText: "danismanlik.yasinakbulut.dev",
              linkUrl: "https://danismanlik.yasinakbulut.dev",
            },
          ],
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
          title: "Portfolio Websites",
          desc: "",
          links: [
            {
              title: "Nutrition Specialist:",
              linkText: "diyetisyengizemakbulut.com",
              linkUrl: "https://diyetisyengizemakbulut.com/",
            },
            {
              title: "Nutrition Specialist:",
              linkText: "alminamesin.com",
              linkUrl: "https://alminamesin.com/",
            },
            {
              title: "Associate Professor:",
              linkText: "arzuyurci.com",
              linkUrl: "https://arzuyurci.com/",
            },
          ],
          // technologies: ["HTML", "PHP", "MySql", "CSS", "JavaScript"],
        },
        {
          title: "Projects I Build as a Hobby",
          desc: "",
          fullWidth: true,
          links: [
            {
              title: "Movie & TV Show Info Website",
              linkText: "",
              linkUrl:
                "https://yasinakbulut.dev/en/works/movie-and-series-promotion-app-with-tmdb-api",
            },
            {
              title: "Dynamic Personal Calendar",
              linkText: "",
              linkUrl: "https://yasinakbulut.dev/en/works/calendar-app",
            },
            {
              title: "Translation Notebook",
              linkText: "",
              linkUrl: "https://yasinakbulut.dev/en/works/translation-notebook",
            },
            {
              title: "English Vocabulary Quiz",
              linkText: "",
              linkUrl:
                "https://yasinakbulut.dev/en/works/english-vocabulary-quiz-app",
            },
            {
              title: "Restaurant QR Menu",
              linkText: "",
              linkUrl:
                "https://yasinakbulut.dev/en/works/restaurant-qr-menu-app-design",
            },
          ],
        },
        /* {
          title: "Calendar App",
          desc: "A dynamic calendar app developed with React, allowing users to take, edit, and customize notes on specific dates.",
          linkText: "calendar.yasinakbulut.dev",
          linkUrl: "https://calendar.yasinakbulut.dev/",
          // technologies: ["React", "HTML", "CSS"],
        }, */
        // {
        //   title: "Personal Portfolio for IVF Specialist",
        //   desc: "A personal website specially designed and developed for a medical doctor specialized in IVF, to promote their expertise, share medical content.",
        //   linkText: "arzuyurci.com",
        //   linkUrl: "https://arzuyurci.com/",
        //   // technologies: ["HTML", "PHP", "MySql", "CSS", "JavaScript"],
        // },
      ],
    },
    skills: {
      title: "Skills",
      data: [
        {
          title: "Frontend",
          items: [
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "jQuery",
            "HTML5",
            "CSS/SCSS",
            "TailwindCSS",
            "Bootstrap",
            "Styled Components",
            "UI Libraries",
            "React DevTools",
            "Lighthouse",
          ],
        },
        {
          title: "State Management",
          items: ["Redux", "Redux Saga", "Zustand", "Context API"],
        },
        {
          title: "Backend & API",
          items: [
            "RESTful API Integration",
            "Supabase",
            "Axios",
            "JWT",
            "JSON",
            "Postman",
            "MySQL",
            "PHP (PDO)",
            "PhpMyAdmin",
          ],
        },
        {
          title: "Build & Deployment",
          items: [
            "Git / GitHub",
            "GitHub Actions",
            "CI / CD",
            "Unit Test",
            "Monorepo",
            "PWA",
            "NPM",
            "RDS",
            "cPanel",
            "Vercel",
          ],
        },
        {
          title: "Soft Skills",
          items: [
            "Agile / Scrum Methodology",
            "Problem Solving",
            "Team Working",
            "Trello / Jira / Notion",
          ],
        },
        {
          title: "Currently Learning",
          items: ["Vue.js", "AngularJS"],
        },
      ],
    },
    references: {
      title: "References",
      data: [
        {
          name: "Ayhan Dönmez",
          title: "System Architect at Türkiye İş Bankası",
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
    jobDetail: "Frontend Developer (React | Next.js | TypeScript)",
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
      <strong>React.js, Next.js, TypeScript, JavaScript, jQuery</strong> ile modern, performanslı ve ölçeklenebilir arayüzler geliştiriyorum. 
      <strong>HTML, CSS/SAAS, Styled Components, TailwindCSS</strong> ve çeşitli 
      <strong>UI Kütüphaneleri</strong> ile güçlü bir UI altyapısı oluşturuyorum.
      <br/>
      <br/>
      <strong>Redux Toolkit</strong>, <strong>Saga</strong>, <strong>Zustand</strong> ve 
      <strong>Context API</strong> kullanarak global state yönetimi sağlıyorum. 
      <strong>RESTful API</strong> entegrasyonları, <strong>JWT</strong> kimlik doğrulama, 
      <strong>Git</strong> versiyon kontrolü, <strong>CI/CD</strong> süreçleri, 
      <strong>PWA</strong> (Progressive Web App) geliştirme ve <strong>monorepo</strong> yapıları ile 
      <strong>UI/UX</strong>, <strong>pixel perfect UI</strong> ve 
      <strong>reusable component</strong> mimarileri üzerinde deneyimliyim.
      <br/>
      <br/>
      Takım çalışması, agile çalışma metodolojisi, sprint süreçleri ve task management konularında deneyim sahibiyim. 
      Profesyonel işlerimin yanı sıra, <strong>pasif gelir sağlayan kişisel SaaS projeler</strong> geliştirerek 
      uçtan uca web geliştirme deneyimi edindim.
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
              25 milyondan fazla kullanıcıya hizmet veren bir şirket olan Jotform'da, 
              <strong>Product</strong> ekibinde çalıştım ve ekipler arasında paylaşılan bir 
              <strong>monorepo</strong> mimarisi içinde 
              <strong>No Code App Builder</strong>, <strong>Push Notification</strong>, 
              <strong>Copilot</strong> ve <strong>User Management</strong> gibi projelerde 
              aktif olarak görevler aldım.
              <span class="block mt-2">Kullanıcı odaklı pixel perfect arayüzler geliştirdim. UI/UX iyileştirme, hata çözümü ve component mimarisi üzerinde çalıştım. </span>
          `,
              company: "Jotform",
              companyLink: "https://jotform.com/",
              startDate: "11/2022",
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
            // {
            //   job: "Frontend Developer (Part Time)",
            //   jobDesc:
            //     "Jotform ürünlerinde HTML, CSS, JavaScript ve React.js ile arayüz hatalarını gidererek kullanıcı deneyimini iyileştirmeye yönelik çalışmalar yaptım.",
            //   company: "Jotform",
            //   companyLink: "https://jotform.com/",
            //   startDate: "11/2022",
            //   endDate: "07/2023",
            //   technologies: [
            //     "React",
            //     "HTML",
            //     "CSS/SCSS",
            //     "JavaScript",
            //     "Git / GitHub",
            //     "RDS",
            //     "Axios",
            //   ],
            // },
            {
              job: "Stajyer Developer ",
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
          job: "Frontend Developer",
          jobDesc:
            "Kurumsal web sitelerinin geliştirilmesi, iyileştirilmesi, SEO optimizasyonları gibi görevler aldım.",
          company: "Gali Medya",
          companyLink: "https://www.galimedya.com/",
          startDate: "08/2021",
          endDate: "10/2021",
          technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          job: "Freelance Full Stack Geliştirici",
          jobDesc: `
          React.js, Next.js, Redux, Redux-Saga, TypeScript, JavaScript, HTML, CSS, PHP ve MySQL kullanarak birçok web sitesi geliştirdim. 
          Bu projelerde RESTful API entegrasyonları, UI/UX geliştirme, veritabanı yönetimi, proje planlama ve müşteri iletişimi konularında 
          deneyimler edindim.
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
          links: [
            {
              linkText: "yasinakbulut.dev",
              linkUrl: "https://yasinakbulut.dev",
            },
          ],
        },
        {
          title: "Diyet Takibim",
          desc: "Diyetisyenlere özel danışan yönetimi ve ölçüm takibi sunan SaaS platformu.",
          links: [
            {
              linkText: "diyettakibim.com",
              linkUrl: "https://diyettakibim.com",
            },
          ],
          technologies: ["Sertifika: ICONDATA'22"],
        },
        {
          title: "Wordora",
          desc: "İngilizce kelime öğrenmeye yönelik modern ve hızlı bir PWA uygulaması.",
          links: [
            {
              linkText: "wordora.yasinakbulut.dev",
              linkUrl: "https://wordora.yasinakbulut.dev",
            },
          ],
        },
        {
          title: "CV Oluşturma Aracı",
          desc: "Şablon, renk, yazı tipi, dil ve tema gibi birçok özelleştirme seçeneği sunan CV oluşturma platformu.",
          links: [
            {
              linkText: "cv.yasinakbulut.dev",
              linkUrl: "https://cv.yasinakbulut.dev",
            },
          ],
        },
        {
          title: "Yazılımcı Topluluğu",
          desc: "Yazılım içeriklerinin paylaşıldığı, Full Stack olarak geliştirdiğim blog sitesidir.",
          links: [
            {
              linkText: "kodsatirim.yasinakbulut.dev",
              linkUrl: "https://kodsatirim.yasinakbulut.dev",
            },
          ],
        },
        {
          title: "Firma Rehberi",
          desc: "140+ kategori ve 250+ işletme içeren ve Full Stack olarak geliştirdiğim firma rehberi.",
          links: [
            {
              linkText: "esnafvitrinim.com",
              linkUrl: "https://esnafvitrinim.com",
            },
          ],
        },
        {
          title: "Danışmanlık Sitesi (Sanal Poslu)",
          desc: "E-Ticaret, Sosyal Medya ve Dropshipping gibi hizmet sunan ve iyzico altyapısıyla ödeme alan site.",
          links: [
            {
              linkText: "danismanlik.yasinakbulut.dev",
              linkUrl: "https://danismanlik.yasinakbulut.dev",
            },
          ],
        },
        {
          title: "Portföy Siteleri",
          desc: "",
          links: [
            {
              title: "Beslenme Uzmanı:",
              linkText: "diyetisyengizemakbulut.com",
              linkUrl: "https://diyetisyengizemakbulut.com/",
            },
            {
              title: "Beslenme Uzmanı:",
              linkText: "alminamesin.com",
              linkUrl: "https://alminamesin.com/",
            },
            {
              title: "Doç. Doktor:",
              linkText: "arzuyurci.com",
              linkUrl: "https://arzuyurci.com/",
            },
          ],
        },
        {
          title: "Hobi Olarak Yaptığım Çalışmalar",
          desc: "",
          fullWidth: true,
          links: [
            {
              title: "Film ve Dizi Tanıtım Sitesi",
              linkText: "",
              linkUrl:
                "https://yasinakbulut.dev/tr/works/film-ve-dizi-tanitim-uygulamasi-tmdb-api",
            },
            {
              title: "Dinamik Kişisel Takvim",
              linkText: "",
              linkUrl:
                "https://yasinakbulut.dev/tr/works/dinamik-kisisel-takvim",
            },
            {
              title: "Çeviri Not Defteri",
              linkText: "",
              linkUrl: "https://yasinakbulut.dev/tr/works/ceviri-not-defteri",
            },
            {
              title: "İngilizce Quiz",
              linkText: "",
              linkUrl:
                "https://yasinakbulut.dev/tr/works/ingilizce-kelime-testi-uygulamasi",
            },
            {
              title: "Restoran QR Menü",
              linkText: "",
              linkUrl:
                "https://yasinakbulut.dev/tr/works/restoran-qr-menu-projesi",
            },
          ],
        },
        // {
        //   title: "Tüp Bebek Uzmanı Portfolyo",
        //   desc: "Tüp bebek alanında uzman bir doktor için hazırlanan kişisel tanıtım ve tıbbi içerik paylaşma sitesi.",
        //   linkText: "arzuyurci.com",
        //   linkUrl: "https://arzuyurci.com/",
        // },
      ],
    },
    skills: {
      title: "Yetenekler",
      data: [
        {
          title: "Frontend",
          items: [
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "jQuery",
            "HTML5",
            "CSS/SCSS",
            "TailwindCSS",
            "Bootstrap",
            "Styled Components",
            "UI Libraries",
            "React DevTools",
            "Lighthouse",
          ],
        },
        {
          title: "State Management",
          items: ["Redux", "Redux Saga", "Zustand", "Context API"],
        },
        {
          title: "Backend & API",
          items: [
            "RESTful API Integration",
            "Supabase",
            "Axios",
            "JWT",
            "JSON",
            "Postman",
            "MySQL",
            "PHP (PDO)",
            "PhpMyAdmin",
          ],
        },
        {
          title: "Build & Deployment",
          items: [
            "Git / GitHub",
            "GitHub Actions",
            "CI / CD",
            "Unit Test",
            "Monorepo",
            "PWA",
            "NPM",
            "RDS",
            "cPanel",
            "Vercel",
          ],
        },
        {
          title: "Soft Skills",
          items: [
            "Agile / Scrum Metodoloji",
            "Problem Çözme",
            "Takım Çalışması",
            "Trello / Jira / Notion",
          ],
        },
        {
          title: "Mevcut Öğrenimlerim",
          items: ["Vue.js", "AngularJS"],
        },
      ],
    },
    references: {
      title: "Referanslar",
      data: [
        {
          name: "Ayhan Dönmez",
          title: "System Architect at Türkiye İş Bankası",
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
