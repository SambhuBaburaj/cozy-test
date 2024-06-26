"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function SlidingDivs() {
  const parentRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth);
    }
  }, [parentRef]);

  const handleMouseMove = (event) => {
    const clientX = event.clientX;

    const normalizedValue = ((clientX - 1) / (parentWidth - 1)) * 25;
    setValue(normalizedValue);
  };

  return (
    <div className=" relative max-w-full">
 <motion.div
      ref={parentRef}
      onMouseMove={handleMouseMove}
      className="relative mt-10 lg:text-7xl md:text-5xl sm:text-4xl text-2xl text-nowrap uppercase text-center font-black rounded-lg"
    >
      <motion.div
        className="w-4/5 rounded-t-lg "
        initial={{
          x: 0,
        }}
        animate={{
          x: `${value}%`,
        }}
        transition={{ duration: 0.5 }}
      >
        Redefine the potential
      </motion.div>
      <motion.div
        className="w-4/5 rounded-b-lg"
        initial={{
          x: "25%",
        }}
        animate={{
          x: `${25 - value}%`,
        }}
        transition={{ duration: 0.5 }}
      >
        of your enterprise
      </motion.div>
    </motion.div>
    </div>
   
  );
}

export default SlidingDivs;
