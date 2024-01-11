import React from "react";
import "./style.css";
import { motion, useAnimation } from "framer-motion";

export default function ParalaxCard() {
  const controls1 = useAnimation(); // controls for the first text
  const controls2 = useAnimation(); // controls for the second text
  const controls3 = useAnimation(); // controls for the second text

  const initialHoverStates = Array(3).fill(false);

  const handleHover = () => {
    // Trigger animation when hovering
    controls1.start({ y: -100, opacity: 0 });

    // Show the second text
    controls2.start({ y: -100, opacity: 1 });

    controls3.start({ y: 230, opacity: 1 });
  };

  const handleHoverEnd = () => {
    // Reset animation when not hovering
    controls1.start({ y: 210, opacity: 1 });

    // Hide the second text
    controls2.start({ y: 500, opacity: 0 });
    controls3.start({ y: 500, opacity: 0 });
  };

  const handleClick = (data) => {
    if (initialHoverStates[data]) {
      handleHover();
      initialHoverStates[data] = false;
    } else {
      handleHoverEnd();
      initialHoverStates[data] = true;
    }
    // Trigger animation on click

    // Add your additional click event logic here
    console.log("Div clicked!");
  };

  return (
    <motion.div 
      onClick={() => {
        handleClick(0);
      }}
      onHoverStart={handleHover}
      onHoverEnd={() => {
        handleHoverEnd(0);
      }}
      className="relative m-8  h-96 lg:w-full sm:col-span-2 sm:col-start-1  md:col-span-2 md:col-start-1   lg:max-w-96  lg:col-start-2  bg-violet-900 overflow-hidden "
    >
      <motion.div className=" text-2xl  absolute">
        <motion.p
          className="p-5 font-serif inset-x-0 h-full bottom-1 "
          initial={{ y: 200, opacity: 1 }}
          animate={controls1}
          transition={{ duration: 0.5 }}
        >
          We’re one of Fortune’s World’s Most Admired Companies
        </motion.p>
        <motion.div
          className="p-5"
          initial={{ y: 50, opacity: 0 }}
          animate={controls2}
          transition={{ duration: 1 }}
        >
          <motion.p className="text-xs sm:text-xs md:text-sm" text>
            For 16 consecutive years, we have been recognized for operating with
            integrity in everything we do.
          </motion.p>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={controls3}
            transition={{ duration: 1.4 }}
            className=""
          >
            <p className="text-xs text-end bottom-0 underlintext pb-3">
              Expand {">"}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
