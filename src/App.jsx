import { Button, Link } from "@nextui-org/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CV_PDF from "../public/Yasin_Akbulut_CV.pdf";

function App() {
  return (
    <main className="relative mx-auto overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <section className="flex items-center justify-between">
          <Contact />
          <Profile />
        </section>
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Educations />
      </section>
      <Button
        className="fixed right-6 bottom-6 z-10 bg-black w-max text-gray-100 print:hidden"
        as={Link}
        href={CV_PDF}
        isExternal
      >
        View CV
      </Button>
    </main>
  );
}

export default App;
