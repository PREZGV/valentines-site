import React from "react";
import { motion } from "framer-motion";

const memories = [
  { label: "The First Day We Met", image: `${process.env.PUBLIC_URL}/memories/memory1.png` },
  { label: "Austin Takeover", image: `${process.env.PUBLIC_URL}/memories/memory2.png` },
  { label: "Cutie Patootie", image: `${process.env.PUBLIC_URL}/memories/memory3.png` },
  { label: "Campus Fun", image: `${process.env.PUBLIC_URL}/memories/memory4.png` },
  { label: "Never Paid Attention In Class", image: `${process.env.PUBLIC_URL}/memories/memory5.png` },
  { label: "Hijab Gang", image: `${process.env.PUBLIC_URL}/memories/memory6.png` },
  { label: "Tennis Pros", image: `${process.env.PUBLIC_URL}/memories/memory7.png` },
  { label: "Elegant Art", image: `${process.env.PUBLIC_URL}/memories/memory8.png` },
  { label: "Can't Stop Flirting", image: `${process.env.PUBLIC_URL}/memories/memory9.png` },
  { label: "Wedding Flick", image: `${process.env.PUBLIC_URL}/memories/memory10.png` },
  { label: "OG Boba Run", image: `${process.env.PUBLIC_URL}/memories/memory11.png` },
  { label: "CG!", image: `${process.env.PUBLIC_URL}/memories/memory12.png` },
  { label: "In n Out", image: `${process.env.PUBLIC_URL}/memories/memory13.png` },
  { label: "Ice Skating", image: `${process.env.PUBLIC_URL}/memories/memory14.png` },
  { label: "The First Day We Met", image: `${process.env.PUBLIC_URL}/memories/memory15.png` },
  { label: "Hijab Gang", image: `${process.env.PUBLIC_URL}/memories/memory16.png` },
  { label: "Tennis Pros", image: `${process.env.PUBLIC_URL}/memories/memory17.png` },
  { label: "Elegant Art", image: `${process.env.PUBLIC_URL}/memories/memory18.png` },
  { label: "Can't Stop Flirting", image: `${process.env.PUBLIC_URL}/memories/memory19.png` },
  { label: "Wedding Flick", image: `${process.env.PUBLIC_URL}/memories/memory20.png` },
];

function MemoryTimeline() {
  return (
    <div id="timeline" className="py-10 bg-red-100">
      <motion.h2 
        className="text-4xl font-bold text-red-600 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Memories ❤️
      </motion.h2>
      
      <div className="flex flex-col items-center space-y-8">
        {memories.map((memory, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-lg p-4 rounded-lg w-full max-w-lg text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 0, 0, 0.3)" }}
          >
            {/* Image Container */}
            <motion.div className="relative w-full h-auto overflow-hidden">
              <motion.img 
                src={memory.image} 
                alt={memory.label} 
                className="w-full h-auto object-cover rounded-md cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Label */}
            <p className="mt-4 text-lg font-semibold text-red-500">{memory.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MemoryTimeline;
