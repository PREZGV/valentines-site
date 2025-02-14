import React, { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  // Function to toggle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-red-500 text-white shadow-md transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex justify-center space-x-6 py-3 text-lg font-semibold">
        <li>
          <button onClick={() => scrollToSection("love-letter")} className="hover:text-pink-200 transition">
            Love Letter 💌
          </button>
        </li>
        {/* <li>
          <button onClick={() => scrollToSection("gallery")} className="hover:text-pink-200 transition">
            Gallery 📸
          </button>
        </li> */}
        <li>
          <button onClick={() => scrollToSection("timeline")} className="hover:text-pink-200 transition">
            Memories ❤️
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
