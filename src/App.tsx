import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import LiamsStory from "./pages/LiamsStory";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import bgImage from "./assets/white-hearts-colorful-paper.jpg";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen flex flex-col bg-fixed bg-center bg-cover bg-no-repeat bg-gray-100"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <header className="bg-green-300 text-white p-4">
          <Navbar />
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/liams-story" element={<LiamsStory />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} its-just-trousers | Icons and images by Freepik


        </footer>
      </div>
    </Router>
  );
}

export default App;
