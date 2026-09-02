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
    jobDetail: "Frontend Developer (Next.js | TypeScript | React)",
    profileImg: ProfileImg,
    contact: [
      {
        text: "İstanbul, Turkey",
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
        Frontend Developer with 4+ years of experience building products used by millions.
        I specialize in <strong>TypeScript</strong>, <strong>Next.js (SSR/SSG/ISR)</strong> and
        <strong>React</strong>, state management with <strong>Redux Toolkit</strong> &
        <strong>RTK Query</strong>, and UI development with <strong>Tailwind CSS</strong> &
        <strong>Shadcn</strong>.
        <br/>
        <br/>
        I care deeply about Core Web Vitals, accessibility, and shipping pixel-perfect, mobile-first
        interfaces. I have experience with <strong>RESTful API</strong> integrations,
        <strong>JWT</strong> authentication, <strong>Git</strong> version control,
        <strong>CI/CD</strong> pipelines, <strong>PWA</strong> development,
        <strong>monorepo</strong> structures and reusable component architecture.
        <br/>
        <br/>
        I am experienced in teamwork, agile methodologies, sprint cycles, and task management.
        Alongside my professional work, I design, build and ship my own <strong>SaaS</strong> and
        <strong>mobile</strong> products <strong>end-to-end</strong>.
      `,
    },
    experiences: {
      title: "Experiences",
      data: [
        {
          company: "Movasoft",
          companyLink: "https://www.movasoft.com/",
          job: "Frontend Developer",
          startDate: "04/2026",
          endDate: "still",
          jobDesc: `
            I lead Frontend development for the company's CRM & CMS projects, building scalable
            applications with Next.js, TypeScript and React while contributing to technical decisions,
            code reviews, REST API integrations, performance optimization, and user experience.
          `,
        },
        {
          company: "Hogarth",
          companyLink: "https://www.hogarth.com/",
          job: "Frontend Developer",
          startDate: "07/2025",
          endDate: "04/2026",
          jobDesc: `
            Delivered responsive, SEO-optimized, multi-language web experiences for global WPP brands.
            Implemented static generation and i18n, ensured cross-browser compatibility, and worked
            directly from Figma designs to production-ready code.
          `,
        },
        {
          company: "Jotform",
          companyLink: "https://jotform.com/",
          job: "Frontend Developer",
          startDate: "11/2022",
          endDate: "05/2025",
          jobDesc: `
            I worked in the <strong>Product</strong> team at Jotform, a company serving over
            25 million users. I contributed to projects such as
            <strong>No Code App Builder, Push Notification, Copilot</strong> and
            <strong>User Management</strong> within a shared <strong>monorepo</strong> architecture
            across multiple teams.
            <span class="block mt-2">I developed user-focused, pixel-perfect interfaces and worked on UI/UX improvements, bug fixing and component architecture.</span>
          `,
        },
        {
          company: "Jotform",
          companyLink: "https://jotform.com/",
          job: "Intern Developer",
          startDate: "08/2022",
          endDate: "09/2022",
          jobDesc: `
            I worked on Frontend Development and component-based structure in various web projects
            using React.js, HTML, CSS, and JavaScript.
          `,
        },
        {
          company: "Freelance Full Stack Developer",
          job: "",
          startDate: "06/2020",
          endDate: "07/2022",
          jobDesc: `
            I developed many websites using React.js, Next.js, Redux, Redux-Saga, TypeScript, JavaScript,
            HTML, CSS, PHP, and MySQL. In these projects, I gained experience in RESTful API integration,
            UI/UX development, database management, project planning and client communication.
          `,
        },
      ],
    },
    skills: {
      title: "Skills",
      data: [
        {
          title: "Core",
          items:
            "Next.js (App Router, SSR, SSG, ISR), TypeScript, React.js, JavaScript, HTML5, CSS/SCSS",
        },
        {
          title: "UI & UX",
          items:
            "Tailwind CSS, shadcn/ui, Styled Components, Figma, Design Systems, Responsive & Mobile-First Development",
        },
        {
          title: "State Management",
          items: "Redux Toolkit, RTK Query, Redux Saga, Context API",
        },
        {
          title: "Web Performance & Quality",
          items:
            "Core Web Vitals, Accessibility, Cross-Browser Compatibility, SEO, Reusable Component Architecture",
        },
        {
          title: "API & Backend",
          items: "REST APIs, Axios, JWT, MySQL",
        },
        {
          title: "Build & Deployment",
          items:
            "Git / GitHub, GitHub Actions, CI/CD, Unit Testing, Monorepo, PWA, Vercel",
        },
        {
          title: "Collaboration",
          items: "Agile / Scrum, Code Review, Problem Solving, Teamwork, Jira / Notion",
        },
      ],
    },
    projects: {
      title: "Selected Projects",
      data: [
        {
          title: "Diyet Takibim - SaaS Platform",
          desc: `
            Built and maintain a SaaS platform for dietitians that provides client management and
            progress tracking, with a focus on responsive user experience and end-to-end product ownership.
          `,
          links: [
            {
              text: "diyettakibim.com",
              url: "https://diyettakibim.com",
            },
            {
              separator: "|",
              prefix: "Certificate:",
              text: "ICONDATA'22",
            },
          ],
        },
        {
          title: "Outflow - Mobile App (React Native)",
          desc: `
            Designed, developed, and shipped a personal finance mobile app for tracking income,
            expenses, recurring payments, savings, and analytics.
          `,
          links: [
            {
              text: "App Store",
              url: "https://apps.apple.com/tr/app/outflow-gelir-gider-takibi/id6780052479?l=tr",
            },
          ],
        },
        {
          title: "Wordora - PWA Application",
          desc: `
            Built a modern and fast Progressive Web App for learning English vocabulary, with a focus
            on responsive design and mobile-friendly user experience.
          `,
          links: [
            {
              text: "wordora.yasinakbulut.dev",
              url: "https://wordora.yasinakbulut.dev",
            },
          ],
        },
        {
          title: "Portfolio Websites",
          desc: `
            Built SEO-focused websites with Next.js using SSG, dynamic meta tags, Open Graph, and
            structured data.
          `,
          links: [
            {
              text: "diyetisyengizemakbulut.com",
              url: "https://diyetisyengizemakbulut.com/",
            },
            {
              text: "arzuyurci.com",
              url: "https://arzuyurci.com/",
            },
            {
              text: "alminamesin.com",
              url: "https://alminamesin.com/",
            },
          ],
        },
        {
          title: "Other Projects",
          isList: true,
          items: [
            {
              label: "Personal Portfolio",
              text: "yasinakbulut.dev",
              url: "https://yasinakbulut.dev",
            },
            {
              label: "Business Directory Site",
              text: "esnafvitrinim.com",
              url: "https://esnafvitrinim.com",
            },
            {
              label: "Software Developers Community",
              text: "kodsatirim.yasinakbulut.dev",
              url: "https://kodsatirim.yasinakbulut.dev",
            },
            {
              label: "CV Creation and Customization",
              text: "cv.yasinakbulut.dev",
              url: "https://cv.yasinakbulut.dev",
            },
          ],
        },
      ],
    },
    educations: {
      title: "Education",
      data: [
        {
          title: "Bilecik Şeyh Edebali University",
          desc: "Bachelor's Degree in Computer Engineering",
          startDate: "2018",
          endDate: "2023",
        },
      ],
    },
    languages: {
      title: "Languages",
      data: [
        {
          name: "English",
          level: "Intermediate (B1+)",
        },
      ],
    },
    references: {
      title: "References",
      text: "References available upon request.",
    },
  },
  tr: {
    name: "Yasin Akbulut",
    jobDetail: "Frontend Developer (Next.js | TypeScript | React)",
    profileImg: ProfileImg,
    contact: [
      {
        text: "İstanbul",
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
        Milyonlarca kullanıcıya ulaşan ürünler geliştiren, 3+ yıl deneyimli Frontend Developer'ım.
        <strong>TypeScript</strong>, <strong>Next.js (SSR/SSG/ISR)</strong> ve <strong>React</strong>
        konusunda uzmanım. Global state yönetiminde <strong>Redux Toolkit</strong> ve
        <strong>RTK Query</strong>, arayüz geliştirmede <strong>Tailwind CSS</strong> ve
        <strong>shadcn/ui</strong> kullanıyorum.
        <br/>
        <br/>
        Core Web Vitals, erişilebilirlik, pixel-perfect ve mobile-first arayüzler geliştirmeye önem
        veriyorum. <strong>RESTful API</strong> entegrasyonları, <strong>JWT</strong> kimlik doğrulama,
        <strong>Git</strong> versiyon kontrolü, <strong>CI/CD</strong> süreçleri,
        <strong>PWA</strong> geliştirme, <strong>monorepo</strong> yapıları ve
        <strong>reusable</strong> bileşen mimarisi konularında deneyimliyim.
        <br/>
        <br/>
        Takım çalışması, agile metodolojiler, sprint döngüleri ve görev yönetimi konularında
        tecrübeliyim. Profesyonel işlerimin yanı sıra kendi <strong>SaaS</strong> ve
        <strong>mobil</strong> ürünlerimi <strong>uçtan uca</strong> tasarlayıp geliştiriyor ve
        yayına alıyorum.
      `,
    },
    experiences: {
      title: "Deneyimler",
      data: [
        {
          company: "Movasoft",
          companyLink: "https://www.movasoft.com/",
          job: "Frontend Developer",
          startDate: "04/2026",
          endDate: "devam",
          jobDesc: `
            Şirketin CRM ve CMS projelerinde frontend geliştirme sürecini yönetiyorum. Next.js,
            TypeScript ve React ile ölçeklenebilir uygulamalar geliştiriyor; teknik kararlara, kod
            incelemelerine, REST API entegrasyonlarına, performans optimizasyonuna ve kullanıcı
            deneyimine katkı sağlıyorum.
          `,
        },
        {
          company: "Hogarth",
          companyLink: "https://www.hogarth.com/",
          job: "Frontend Developer",
          startDate: "07/2025",
          endDate: "04/2026",
          jobDesc: `
            Global WPP markaları için responsive, SEO uyumlu ve çok dilli web deneyimleri geliştirdim.
            Static generation ve i18n yapılarını kurdum, cross-browser uyumluluğu sağladım ve Figma
            tasarımlarından doğrudan yayına hazır koda geçtim.
          `,
        },
        {
          company: "Jotform",
          companyLink: "https://jotform.com/",
          job: "Frontend Developer",
          startDate: "11/2022",
          endDate: "05/2025",
          jobDesc: `
            25 milyondan fazla kullanıcıya hizmet veren Jotform'un <strong>Product</strong> ekibinde
            çalıştım. Birden fazla ekibin ortak kullandığı <strong>monorepo</strong> mimarisi içinde
            <strong>No Code App Builder, Push Notification, Copilot</strong> ve
            <strong>User Management</strong> projelerine katkı verdim.
            <span class="block mt-2">Kullanıcı odaklı, pixel-perfect arayüzler geliştirdim; UI/UX iyileştirmeleri, hata çözümleri ve bileşen mimarisi üzerinde çalıştım.</span>
          `,
        },
        {
          company: "Jotform",
          companyLink: "https://jotform.com/",
          job: "Intern Developer",
          startDate: "08/2022",
          endDate: "09/2022",
          jobDesc: `
            React.js, HTML, CSS ve JavaScript kullanarak çeşitli web projelerinde frontend geliştirme
            ve bileşen tabanlı yapılar üzerinde çalıştım.
          `,
        },
        {
          company: "Freelance Full Stack Developer",
          job: "",
          startDate: "06/2020",
          endDate: "07/2022",
          jobDesc: `
            React.js, Next.js, Redux, Redux-Saga, TypeScript, JavaScript, HTML, CSS, PHP ve MySQL
            kullanarak çok sayıda web sitesi geliştirdim. Bu projelerde RESTful API entegrasyonu,
            UI/UX geliştirme, veritabanı yönetimi, proje planlama ve müşteri iletişimi konularında
            deneyim kazandım.
          `,
        },
      ],
    },
    skills: {
      title: "Yetenekler",
      data: [
        {
          title: "Teknolojiler",
          items:
            "Next.js (App Router, SSR, SSG, ISR), TypeScript, React.js, JavaScript, HTML5, CSS/SCSS",
        },
        {
          title: "UI & UX",
          items:
            "Tailwind CSS, shadcn/ui, Styled Components, Figma, Design Systems, Responsive & Mobile-First Geliştirme",
        },
        {
          title: "State Management",
          items: "Redux Toolkit, RTK Query, Redux Saga, Context API",
        },
        {
          title: "Web Performansı ve Kalite",
          items:
            "Core Web Vitals, Accessibility, Cross-Browser Compatibility, SEO, Reusable Component Architecture",
        },
        {
          title: "API & Backend",
          items: "REST APIs, Axios, JWT, MySQL",
        },
        {
          title: "Build & Deployment",
          items:
            "Git / GitHub, GitHub Actions, CI/CD, Unit Testing, Monorepo, PWA, Vercel",
        },
        {
          title: "Çalışma Yöntemleri",
          items:
            "Agile / Scrum, Code Review, Problem Çözme, Takım Çalışması, Jira / Notion",
        },
      ],
    },
    projects: {
      title: "Projeler",
      data: [
        {
          title: "Diyet Takibim - SaaS Platformu",
          desc: `
            Diyetisyenler için danışan yönetimi ve ilerleme takibi sağlayan bir SaaS platformu
            geliştirdim ve halen sürdürüyorum. Responsive kullanıcı deneyimine ve uçtan uca ürün
            sahipliğine odaklandım.
          `,
          links: [
            {
              text: "diyettakibim.com",
              url: "https://diyettakibim.com",
            },
            {
              separator: "|",
              prefix: "Sertifika:",
              text: "ICONDATA'22",
            },
          ],
        },
        {
          title: "Outflow - Mobil Uygulama (React Native)",
          desc: `
            Gelir, gider, düzenli ödemeler, birikim ve analiz takibi yapan bir kişisel finans
            uygulamasını tasarladım, geliştirdim ve yayına aldım.
          `,
          links: [
            {
              text: "App Store",
              url: "https://apps.apple.com/tr/app/outflow-gelir-gider-takibi/id6780052479?l=tr",
            },
          ],
        },
        {
          title: "Wordora - PWA Uygulaması",
          desc: `
            İngilizce kelime öğrenmek için modern ve hızlı bir Progressive Web App geliştirdim.
            Responsive tasarıma ve mobil odaklı kullanıcı deneyimine öncelik verdim.
          `,
          links: [
            {
              text: "wordora.yasinakbulut.dev",
              url: "https://wordora.yasinakbulut.dev",
            },
          ],
        },
        {
          title: "Portfolio Web Siteleri",
          desc: `
            Next.js ile SSG kullanarak SEO odaklı web siteleri geliştirdim; dinamik meta etiketleri,
            Open Graph ve structured data entegrasyonlarını uyguladım.
          `,
          links: [
            {
              text: "diyetisyengizemakbulut.com",
              url: "https://diyetisyengizemakbulut.com/",
            },
            {
              text: "arzuyurci.com",
              url: "https://arzuyurci.com/",
            },
            {
              text: "alminamesin.com",
              url: "https://alminamesin.com/",
            },
          ],
        },
        {
          title: "Diğer Projeler",
          isList: true,
          items: [
            {
              label: "Kişisel Portfolyo",
              text: "yasinakbulut.dev",
              url: "https://yasinakbulut.dev",
            },
            {
              label: "Esnaf Rehberi Sitesi",
              text: "esnafvitrinim.com",
              url: "https://esnafvitrinim.com",
            },
            {
              label: "Yazılım Geliştiriciler Topluluğu",
              text: "kodsatirim.yasinakbulut.dev",
              url: "https://kodsatirim.yasinakbulut.dev",
            },
            {
              label: "CV Oluşturma ve Özelleştirme",
              text: "cv.yasinakbulut.dev",
              url: "https://cv.yasinakbulut.dev",
            },
          ],
        },
      ],
    },
    educations: {
      title: "Eğitim",
      data: [
        {
          title: "Bilecik Şeyh Edebali Üniversitesi",
          desc: "Bilgisayar Mühendisliği Lisans",
          startDate: "2018",
          endDate: "2023",
        },
      ],
    },
    languages: {
      title: "Diller",
      data: [
        {
          name: "İngilizce",
          level: "Orta Düzey (B1+)",
        },
      ],
    },
    references: {
      title: "Referanslar",
      text: "Talep halinde referans bilgileri paylaşılabilir.",
    },
  },
};
