import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-black p-4 font-edusa relative">
      <nav className="flex justify-between items-center">
        <Link to="/" className="hover:underline font-bold text-xl">
          It's Just Trousers
        </Link>

        {/* Hamburger button - visible only below sm (mobile) */}
        <button
          className="sm:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>

        {/* Desktop menu - visible on sm and up */}
        <ul className="hidden sm:flex gap-8 font-bold">
          <li>
            <Link to="/resources" className="hover:underline">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/liams-story" className="hover:underline">
              Liam's Story
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.google.com"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safe Exit
            </a>
          </li>
        </ul>
      </nav>

      {/* Side drawer - mobile only */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-300 text-black p-6 transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="mb-8"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          Close ✕
        </button>
        <ul className="flex flex-col gap-6 font-bold">
          <li>
            <Link
              to="/"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/liams-story"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Liam's Story
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.google.com"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-center block"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Safe Exit
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay behind drawer when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
