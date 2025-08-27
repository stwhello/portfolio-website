import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Scrambler from "./components/scrambler/Scrambler";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Scrambler />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
