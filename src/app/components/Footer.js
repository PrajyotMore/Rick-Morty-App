export default function Footer() {
    return (
      <footer className="w-full bg-gray-800 text-gray-300 py-4 px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Rick and Morty Explorer. All rights reserved.</p>
          <div className="space-x-4 mt-2 sm:mt-0">
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Rick and Morty API
            </a>
          </div>
        </div>
      </footer>
    );
  }
  