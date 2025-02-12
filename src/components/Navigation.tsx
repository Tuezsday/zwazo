import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B1612] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
   <Link to="/" className="text-3xl md:text-5xl font-semibold tracking-wide brand-title">
     Levidna Gerard
   </Link>




        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 bg-[#0B1612] px-4 py-2 rounded-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-gray-300 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          {isHome && (
            <a
              href="#portfolio"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Portfolio
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0B1612] border-t border-gray-800"
        >        
            <div className="px-4 py-2 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {isHome && (
                <a
                  href="#portfolio"
                  className="block py-2 hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
