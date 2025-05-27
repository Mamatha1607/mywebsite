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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#0B0C10]/90 backdrop-blur border-b-4 border-teal shadow-[0_0_30px_#45A29E]">
      <div className="w-full flex justify-between items-center px-4 md:px-12 py-6 text-2xl md:text-3xl">
        
        {/* Logo on the absolute left */}
        <div className="flex items-center space-x-4">
          <div className="ml-0 w-12 h-12 transform rotate-45 border-2 border-accent flex items-center justify-center">
            <span className="transform -rotate-45 text-accent font-extrabold text-lg tracking-wide neon-text">
              MI
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide">
           
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 md:space-x-10 font-semibold text-gray-700 dark:text-gray-300">
          <li>
            <a href="#home" className="flex items-center gap-1 hover:text-accent">
              <HomeIcon className="w-6 h-6" /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center gap-1 hover:text-accent">
              <UserIcon className="w-6 h-6" /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center gap-1 hover:text-accent">
              <WrenchScrewdriverIcon className="w-6 h-6" /> Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center gap-1 hover:text-accent">
              <CodeBracketIcon className="w-6 h-6" /> Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="flex items-center gap-1 hover:text-accent">
              <BriefcaseIcon className="w-6 h-6" /> Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-1 hover:text-accent">
              <EnvelopeIcon className="w-6 h-6" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
