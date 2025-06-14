import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Submit from "./pages/Submit";
import LiamsStory from "./pages/LiamsStory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-teal-400 text-white p-4">
          <Navbar />
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
