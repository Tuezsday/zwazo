import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Camera className="h-8 w-8" />
            <span className="text-xl font-light">Tizwazo Photography</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </Link>
            {isHome && (
              <a
                href="#portfolio"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Portfolio
              </a>
            )}
            <Link
              to="/blog"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 border-t border-gray-800">
          <div className="px-4 py-2">
            <Link
              to="/"
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {isHome && (
              <a
                href="#portfolio"
                className="block py-2 text-white hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
            )}
            <Link
              to="/blog"
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}