import { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-gray-100 text-bm-dark text-center py-2 text-sm">
        <p>Tot 70% goedkoper dan nieuw | Minimaal 1 jaar garantie</p>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo className="h-8 w-auto" />
            </a>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Zoek een product, merk of categorie..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:flex items-center space-x-1 text-bm-dark hover:text-gray-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm">Account</span>
            </button>
            <button className="flex items-center space-x-1 text-bm-dark hover:text-gray-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="relative flex items-center space-x-1 text-bm-dark hover:text-gray-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-bm-dark text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-bm-light-gray py-3">
          <ul className="flex space-x-8 text-sm">
            <li>
              <a href="#smartphones" className="text-bm-dark hover:text-gray-600 font-medium transition">
                Smartphones
              </a>
            </li>
            <li>
              <a href="#laptops" className="text-bm-dark hover:text-gray-600 font-medium transition">
                Laptops
              </a>
            </li>
            <li>
              <a href="#tablets" className="text-bm-dark hover:text-gray-600 font-medium transition">
                Tablets
              </a>
            </li>
            <li>
              <a href="#audio" className="text-bm-dark hover:text-gray-600 font-medium transition">
                Audio
              </a>
            </li>
            <li>
              <a href="#gaming" className="text-bm-dark hover:text-gray-600 font-medium transition">
                Gaming
              </a>
            </li>
            <li>
              <a href="#smart-home" className="text-bm-dark hover:text-gray-600 font-medium transition">
                Smart Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
