"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

type Hobby = {
  title: string;
  emoji: string;
  left: string;
  top: string;
};

const HobbyBox = ({ hobbies }: { hobbies: Hobby[] }) => {
  const constraintRef = useRef(null);
  return (
    <div className="relative flex-1" ref={constraintRef}>
      {hobbies.map((hobby) => (
        <motion.div
          className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
          drag
          dragConstraints={constraintRef}
          style={{
            left: hobby.left,
            top: hobby.top,
          }}
          key={hobby.title}
        >
          <span className="font-medium text-gray-950">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default HobbyBox;
