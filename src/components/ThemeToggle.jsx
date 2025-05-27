import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="w-14 h-14 flex items-center justify-center rounded-full text-white bg-accent shadow-lg hover:scale-110 transition-all duration-300 text-2xl"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </div>
  );
}

export default ThemeToggle;
