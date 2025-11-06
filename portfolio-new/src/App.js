import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './index.css';

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-center gap-8 py-4">
          <a href="#hero" className="hover:text-blue-600 font-semibold">자기소개</a>
          <a href="#about" className="hover:text-blue-600 font-semibold">기술 스택</a>
          <a href="#projects" className="hover:text-blue-600 font-semibold">프로젝트</a>
          <a href="#contact" className="hover:text-blue-600 font-semibold">연락처</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="pt-20">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      <footer className="text-center py-8 text-gray-500 border-t mt-12 bg-gray-100">
        © 2025 Yoon Wonjune. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
