function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; 2025 Visualizer Build with love by <a href="https://github.com" className="text-blue-400 hover:underline">karan</a>.
        </p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com" className="text-gray-400 hover:text-blue-400">GitHub</a>
          <a href="mailto:contact@visualizer.com" className="text-gray-400 hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;