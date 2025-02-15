import React, { useState, useEffect } from "react";
import { Fireworks } from "fireworks-js";

const PasswordScreen = ({ onUnlock }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const correctPassword = "stinkybutt"; // Change this to your actual password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setShowFireworks(true); // Show fireworks
      setTimeout(() => {
        setShowFireworks(false);
        onUnlock(); // Unlock after fireworks finish
      }, 3000); // Stop fireworks after 3 seconds
    } else {
      setError(true);
      setInput(""); // Clear input on error
    }
  };

  useEffect(() => {
    if (showFireworks) {
      const container = document.createElement("div");
      container.style.position = "fixed";
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "100vw";
      container.style.height = "100vh";
      container.style.zIndex = "9999";
      document.body.appendChild(container);

      const fireworks = new Fireworks(container, {
        speed: 4,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
      });

      fireworks.start();

      setTimeout(() => {
        fireworks.stop();
        document.body.removeChild(container);
      }, 3000);
    }
  }, [showFireworks]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-100 text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm">
        <h2 className="text-2xl font-bold text-red-500">Enter the Secret Password 🔒</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter password..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
          />
          {error && <p className="text-red-500 text-sm mt-2">Incorrect password, try again!</p>}
          <button
            type="submit"
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-all"
          >
            Unlock ❤️
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordScreen;
