// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import LiamsStory from "./pages/LiamsStory";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/liams-story" element={<LiamsStory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
