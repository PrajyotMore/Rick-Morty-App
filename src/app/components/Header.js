export default function Header() {
    return (
      <header className="w-full bg-blue-600 text-white py-4 px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Rick and Morty Character App</h1>
          <nav className="space-x-4">
            <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              API Docs
            </a>
          </nav>
        </div>
      </header>
    );
  }
  