import "./App.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Scrambler from "./components/scrambler/Scrambler";

function App() {
  return (
    <>
      <Header />
      <Scrambler />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
