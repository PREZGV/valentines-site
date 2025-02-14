import React from "react";
import "./FloatingHearts.css"; // Import the updated CSS




function FloatingHearts() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="heart absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`, // Keep hearts within the section
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 6 + 4}s`, // Longer floating duration
            fontSize: `${Math.random() * 25 + 15}px`, // Random sizes between 15px - 40px
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;





// import React from "react";
// import "./FloatingHearts.css"; // Import CSS for animation

// function FloatingHearts() {
//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       {Array.from({ length: 20 }).map((_, i) => (
//         <div
//           key={i}
//           className="heart absolute"
//           style={{
//             left: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 5}s`,
//             animationDuration: `${Math.random() * 4 + 3}s`, // Longer floating duration
//             fontSize: `${Math.random() * 20 + 20}px`, // Random sizes between 20px - 40px
//           }}
//         >
//           ❤️
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FloatingHearts;

