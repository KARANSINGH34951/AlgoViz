import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="sticky top-0 bg-gray-800 dark:bg-gray-800 shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-400">
          Visualizer
        </a>
        <div className="flex items-center space-x-6">
          <a href="/" className="text-gray-300 hover:text-blue-400 transition">
            Home
          </a>
          <a href="/visualizer" className="text-gray-300 hover:text-blue-400 transition">
            Visualizer
          </a>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="text-gray-300 hover:text-blue-400 border-gray-300 dark:border-gray-600"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;