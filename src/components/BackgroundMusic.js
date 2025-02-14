import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(`${process.env.PUBLIC_URL}/music.mp3`);
    audioRef.current.loop = true;

    // Try playing after first user interaction
    const enableAutoplay = () => {
      if (!hasInteracted) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((err) => console.error("Autoplay blocked:", err));
      }
    };

    document.addEventListener("click", enableAutoplay);
    document.addEventListener("keydown", enableAutoplay);

    return () => {
      document.removeEventListener("click", enableAutoplay);
      document.removeEventListener("keydown", enableAutoplay);
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.error("Playback error:", err));
    }
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        onClick={toggleMusic}
        className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
}

export default BackgroundMusic;
