import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-light">Let's Connect</h3>
            <p className="text-gray-400 mt-2">Follow me on social media</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tizwazo Photography Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}