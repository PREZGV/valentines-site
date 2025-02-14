import React from "react";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
];

function PhotoGallery() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-red-600 text-center glow-text">Our Memories 📸</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Memory ${index + 1}`} className="rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
