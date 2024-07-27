import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

function App() {
  return (
    <main className="relative mx-auto overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <section className="flex items-center justify-between">
          <Contact />
          <Profile />
        </section>
        <About />
      </section>
    </main>
  );
}

export default App;
