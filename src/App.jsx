import Header from "./components/header";
import Hero from "./components/hero";
import Education from "./components/education";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import About from "./components/about";
import Skills from "./components/skills";
import Interests from "./components/interests";

const App = () => {
  return (
   <div>
    <Header/>
    <main className="pt-4">
    <Hero/>
    <section className="max-w-6xl mx-auto px-4">
      <Skills/>
      <About/>
      <Education/>
      <Projects/>
      <Interests/>
      <Contact/>
    </section> 
    </main> 
    <Footer/>
   </div>
  );
};
export default App;



