"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedText({
  text,
  className,
  Wrapper = "p",
  duration,
}) {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const defaultAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden 
      >
        {textArray.map((line, i) => (
          <span key={i} className="block">
            {line.split(" ").map((word,idx) => (
              <motion.span 
              key={idx}
              className="inline-block"
              variants={defaultAnimations}
              >
                {word}
            <span className="inline-block">&nbsp;</span>

              </motion.span>

            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
