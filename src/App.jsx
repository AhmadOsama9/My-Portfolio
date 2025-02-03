import  Header  from "./components/Header";
import  Hero  from "./components/Hero";
import  About  from "./components/About";
import  Project  from "./components/Project";
import Skills from "./components/Skills";
import  Contact  from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";


function App() {

  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Project />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
};

export default App
