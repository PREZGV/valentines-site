import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar
import LoveLetter from "./components/LoveLetter";
// import PhotoGallery from "./components/PhotoGallery";
import MemoryTimeline from "./components/MemoryTimeline";
import BackgroundMusic from "./components/BackgroundMusic";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-red-100 text-center pt-16">
      <Navbar /> {/* Fixed Navbar */}
      <FloatingHearts />
      <BackgroundMusic />

      <h1 className="text-5xl font-bold text-red-600 mt-6 glow-text">
        Happy Valentine's Day, Aysel! ❤️
      </h1>

      {/* Sections with IDs for smooth scrolling */}
      <section id="love-letter" className="py-10">
        <LoveLetter />
      </section>

      {/* <section id="gallery" className="py-10">
        <PhotoGallery />
      </section> */}

      <section id="timeline" className="py-10">
        <MemoryTimeline />
      </section>
    </div>
  );
}

export default App;
