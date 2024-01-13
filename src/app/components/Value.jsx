import React from "react";
import AnimatedText from "./AnimatedText";
import { motion, useAnimation } from "framer-motion";

export default function Value() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="container mx-auto mt-48">
      <AnimatedText
        text="360&deg; VALUE"
        className="text-5xl lg:text-8xl font-black uppercase text-center"
        duration={0.4}
      />
      <p
        text="Every day, we embrace change and create value for all our stakeholders, in every part of the world."
        className="text-2xl lg:text-5xl font-medium text-center"
        duration={0}
      />
    </motion.div>
  );
}
