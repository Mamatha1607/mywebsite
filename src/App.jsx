import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Theme from './components/Theme';


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0B0C10] dark:text-white">
      <Navbar />
      <Theme />
      
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      
    </div>
  );
}


export default App;
