// src/components/Layout.tsx
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import bgImage from "../assets/white-hearts-colorful-paper.jpg";
import lineImage from "../assets/line.png"; // Import your line image

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
    className="min-h-screen flex flex-col bg-scroll sm:bg-fixed bg-center bg-cover bg-no-repeat bg-gray-100"
    style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <header className="sticky top-0 bg-green-300 text-white p-4 z-50 shadow-md">
        <Navbar />
      </header>
      {/* Line Image Across All Pages */}
      <div className="flex justify-center py-2 mt-4">
        <img
          src={lineImage}
          alt="Decorative Line"
          className="w-[300px] sm:w-[400px]"
        />
      </div>

      <main className="flex-grow p-4">{children}</main>

      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} its-just-trousers | Icons and images by
        Freepik
      </footer>
    </div>
  );
};

export default Layout;
