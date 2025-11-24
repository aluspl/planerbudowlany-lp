"use client";

import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-transparent bg-white/10 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600"
      aria-label="Przełącz tryb kolorów"
    >
      <span aria-hidden>{theme === 'dark' ? '🌙' : '☀️'}</span>
      <span>{theme === 'dark' ? 'Tryb jasny' : 'Tryb ciemny'}</span>
    </button>
  );
};

export default ThemeToggle;