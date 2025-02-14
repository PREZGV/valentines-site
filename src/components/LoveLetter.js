import React, { useState } from "react";
import { motion } from "framer-motion";

function LoveLetter() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Envelope Animation */}
      {!isOpened && (
        <motion.div
          className="w-32 h-32 bg-red-500 flex items-center justify-center rounded-md shadow-lg cursor-pointer"
          initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          onClick={() => setIsOpened(true)}
        >
          💌 {/* Envelope Emoji as a Placeholder */}
        </motion.div>
      )}

      {/* Letter Reveal Animation */}
      {isOpened && (
        <motion.div
          className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center"
          initial={{ opacity: 0, y: -30, scaleY: 0.5 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-bold text-red-600 glow-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Aysel Appreciation 💕
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Ms. Aysel Rizvi,  
            The first word that come to mind when I think about you is HEART, in my life I have never met someone with as big a heart as you and this goes back to before we were even dating. I remember even when we were just friends you would always come hang out with me at coffee shops and on campus and they would be some of the most memorable times and I barely even knew you. I thought we were just gonna be aqquaintances who studied together but to this day I think we have barely done any studying but thanks to you I have some of the best college memories I don't think I will ever forget! Just making this website took me on a walk through memory lane and oh my goodness, I couldn't even tell you all the things we ahd done together even if I wanted to. When this love thing started you were just this like thing I could not get out of my head and 2 years later I can tell you it is the exact same, 24/7 I'm thinking what is aysel doing and how the hell can I go hang out with her, cause when I'm with you I just feel safe, I feel like I can say anything tot you and you wouldn't ever judge me cause you don't ever judge anyone no matter how weird everyone else may think they are and this goes all the way back to highschool. You are just someone who tries to literally find the best in everyone even if the person you are trying to connect with is your worst enemy. I wish i could possess that trait of yours and also the million other amazing ones that come with you. Like how you light up a room, you are that one person who finds a way to make a joke about anything and everything and to this day it still woos me how quickly those gears must be turning in your head. On top of this you are someone who is so so smart, you are so smart and you always impress me and challenge me with how aware you are on topics like politics and love and im just there like huh wtf are you talking about. But yeah seriously thank you for always being so inviting and kind and sticking with me throuhg thick an thin, I wish we could clone you and make 10 more cause everyone needs their own Aysel. I love you with my whole heart and there isn't one thing in this world I wouldn't do for you I LOVE YOU STINKYBUTTTTT❤️
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}

export default LoveLetter;
