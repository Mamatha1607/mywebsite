import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div
      className="fixed bottom-8 left-8 z-50 flex flex-col items-center gap-3"
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
    >
      {/* Tooltip Label ABOVE the button */}
      {showLabel && (
        <div className="mb-2 bg-sky-400 text-black px-6 py-2 rounded-full text-lg font-bold shadow-lg animate-fade-in">
          {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
        </div>
      )}

      {/* Neon Sky Blue Button */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="bg-sky-400 text-black text-5xl w-24 h-24 rounded-full shadow-[0_0_40px_rgba(56,189,248,0.8)] hover:scale-110 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </div>
  );
}

export default ThemeToggle;
