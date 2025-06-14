import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="hover:underline font-bold text-xl">
          It's Just Trousers
        </Link>

        {/* Hamburger button - visible only below sm (mobile) */}
        <button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Simple hamburger icon (3 bars) */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Menu */}
        <ul
          className={`flex-col sm:flex-row sm:flex gap-4 sm:gap-8 absolute sm:static left-0 top-16 w-full sm:w-auto bg-blue-600 sm:bg-transparent transition-all duration-300 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/resources"
              className="block px-4 py-2 hover:underline font-bold"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
          </li>
          
          <li>
            <Link
              to="/liams-story"
              className="block px-4 py-2 hover:underline font-bold"
              onClick={() => setIsOpen(false)}
            >
              Liam's Story
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:underline font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.google.com"
              className="block px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-center flex items-center justify-center font-bold"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Safe Exit
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
