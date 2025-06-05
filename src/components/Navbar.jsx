import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
  const [showMenu, setShowMenu] = useState(true); // Sidebar visible by default

  return (
    <>
      {/* Toggle Button (always visible) */}
      <button
        className="fixed top-4 left-4 z-50 text-white bg-black p-2 rounded-md shadow"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt3 className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      {showMenu && (
        <nav className="fixed top-0 left-0 h-full w-64 bg-black text-white z-40 shadow-lg transition-all">
          <div className="flex flex-col px-4 py-6 space-y-8 h-full overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowMenu(false)}
              className="self-end text-white text-lg hover:text-gray-400"
            >
              <HiX className="w-6 h-6" />
            </button>

            {/* Logo and Name */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                <span className="font-bold text-sm">MI</span>
              </div>
              <span className="text-base font-semibold text-white">Mamatha</span>
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col space-y-5">
              {[
                { href: '#home', icon: HomeIcon, label: 'Home' },
                { href: '#about', icon: UserIcon, label: 'About' },
                { href: '#skills', icon: WrenchScrewdriverIcon, label: 'Skills' },
                { href: '#projects', icon: CodeBracketIcon, label: 'Projects' },
                { href: '#experience', icon: BriefcaseIcon, label: 'Experience' },
                { href: '#contact', icon: EnvelopeIcon, label: 'Contact' },
              ].map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setShowMenu(false)} // Optional: auto-close
                    className="flex items-center gap-3 px-3 py-2 rounded border border-transparent hover:border-white transition"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
