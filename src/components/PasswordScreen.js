import React, { useState } from "react";

const PasswordScreen = ({ onUnlock }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const correctPassword = "stinkybutt"; // Change this to your actual password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      onUnlock();
    } else {
      setError(true);
      setInput(""); // Clear input on error
    }
  };

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
