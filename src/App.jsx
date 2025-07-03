import { Button, Link } from "@nextui-org/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import References from "./components/References";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <main className="relative mx-auto overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-4">
        <section className="flex items-center justify-between">
          <Contact lang={lang} />
          <Profile lang={lang} />
        </section>
        <About lang={lang} />
        <Experiences lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <References lang={lang} />
        <Educations lang={lang} />
      </section>
      <Button
        className="fixed right-6 bottom-6 z-10 bg-black w-max text-gray-100 print:hidden"
        as={Link}
        href={`${
          lang === "tr"
            ? "/Yasin_Akbulut_CV_TR.pdf"
            : "/Yasin_Akbulut_CV_EN.pdf"
        }`}
        isExternal
      >
        {lang === "en" ? "View in PDF" : "PDF Olarak Göster"}
      </Button>
      <Button
        className="fixed right-6 bottom-[72px] z-10 bg-black w-max text-gray-100 print:hidden"
        onClick={() => setLang((prev) => (prev === "en" ? "tr" : "en"))}
      >
        {lang === "en" ? "Türkçe Göster" : "Show in English"}
      </Button>
    </main>
  );
}

export default App;
