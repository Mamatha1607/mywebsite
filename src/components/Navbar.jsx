import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0B0C10]/90 backdrop-blur border-b-4 border-teal shadow-[0_0_30px_#45A29E]">
      <div className="w-full flex justify-between items-center px-4 md:px-12 py-6 text-2xl md:text-2xl">
        
        {/* Logo on the absolute left */}
        <div className="flex items-center space-x-4">
          <div className="ml-0 w-12 h-12 transform rotate-45 border-2 border-accent flex items-center justify-center">
            <span className="transform -rotate-45 text-accent font-extrabold text-lg tracking-wide neon-text">
              MI
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide">
           
          </h1>
=======
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0B0C10]/90 backdrop-blur border-b-2 border-teal shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-2 sm:px-4 py-3 text-xs">

        {/* Logo at the extreme left */}
        <div className="flex items-center">
          <div className="w-8 h-8 transform rotate-45 border border-accent flex items-center justify-center">
            <span className="transform -rotate-45 text-accent font-bold text-[10px] tracking-tight neon-text">
              MI
            </span>
          </div>
>>>>>>> cc61877 (Updated Projects section with flashcard functionality)
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap space-x-2 sm:space-x-3 md:space-x-4 font-medium text-gray-700 dark:text-gray-300 text-xs">
          <li>
            <a href="#home" className="flex items-center gap-1 hover:text-accent">
              <HomeIcon className="w-4 h-4" /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-1 hover:text-accent">
              <UserIcon className="w-4 h-4" /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center gap-1 hover:text-accent">
              <WrenchScrewdriverIcon className="w-4 h-4" /> Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center gap-1 hover:text-accent">
              <CodeBracketIcon className="w-4 h-4" /> Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="flex items-center gap-1 hover:text-accent">
              <BriefcaseIcon className="w-4 h-4" /> Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-1 hover:text-accent">
              <EnvelopeIcon className="w-4 h-4" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
