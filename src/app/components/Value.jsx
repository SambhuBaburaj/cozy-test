"use client"
import React, { useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import "../../../public/style/wavesade.css"

export default function Value() {


  const ref = React.useRef(null);
  const isView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
  
    console.log(isView);
    if (isView) {
      mainControl.start("visible");
    }
  }, [isView]);
  return (
    <>



    <motion.div
    ref={ref}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControl}
    transition={{ duration: 0.5, delay: 0.25 }}
    className=" mx-auto mt-48">
<svg viewbox="0 0 100 20">
  <defs>
    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="#82D5F7"/>
      <stop offset="95%" stop-color="#123752"/>
    </linearGradient>
    <pattern id="wave" x="-60" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
      <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1.5s"
            type="translate"
            from="0,0"
            to="40,0"
            repeatCount="indefinite" />
      </path>
    </pattern>
  </defs>
  <text text-anchor="middle" x="50" y="15" font-size="8" fill="url(#wave)"  fill-opacity="0.8">  360&deg; VALUE</text>
  <text text-anchor="middle" x="50" y="15" font-size="8" fill="url(#gradient)" fill-opacity="0.1">  360&deg; VALUE</text>
</svg>

  
      <p className="text-2xl lg:text-5xl text-center animate-charcter  font-bold">
      Every day, we embrace change and create value for all our stakeholders, in every part of the world.
      </p>


    </motion.div>
    </>
  );
}
