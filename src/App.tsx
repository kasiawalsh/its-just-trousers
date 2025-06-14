import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Submit from "./pages/Submit";
import LiamsStory from "./pages/LiamsStory";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="hover:underline">It's Just Trousers</Link>
            <Link to="/resources" className="hover:underline">Resources</Link>
            <Link to="/submit" className="hover:underline">Submit</Link>
            <Link to="/liams-story" className="hover:underline">Liam's Story</Link>
            <a
              href="https://www.google.com" // Use a safe exit redirect of your choice
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >Safe Exit</a>
          </nav>
        </header>
        <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/liams-story" element={<LiamsStory />} />
        </Routes>
        </main>
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} its-just-trousers
        </footer>
      </div>
    </Router>
  );
}

export default App;
