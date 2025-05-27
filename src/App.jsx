import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import Experience from './components/Experience';


function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0B0C10] dark:text-white">
      <Navbar />
      <ThemeToggle />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience/>
        <Contact />
        
           
      </main>
    </div>
  );
}

export default App;
