"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

function Fullpage() {
  const secRef = React.useRef(null);

  // ScrollYProgress is a value between 0 and 1
  const { scrollYProgress } = useScroll({
    // target is the element that we want to track
    target: secRef,
    offset: ["start end", "end start"],
  });

  // Set up animations
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [0, 0, 0, 0]
  );




  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-10 ">
      <div className="w-full h-screen relative" ref={secRef}>
        {/* Image with motion */}
        <motion.div
          className=" image"
          style={{
            scale: scale,
            x: xTransform,
          }}
        >
          <Image
            src="/images/innovation.jpg"
            alt="monkey"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-md border border-color transition-transform duration-300 ease-in-out transform-gpu"
          />
        </motion.div>
      </div>
      <div className=' flex flex-col justify-center items-center relative '>
            <div className='w-screen md:w-1/2 p-8  sm:p-4 md:p-0'>
                <p className='text-2xl md:text-5xl font-semibold'>Our culture</p>
                <p className='mt-4 text-xl text-wrap' style={{fontFamily:"playfair"}}>We combine technology with human ingenuity to solve some of the world&apos;s biggest challenges. When you work with us, the possibilities are endless.</p>
                <div className='mt-8 flex items-end'>
                    <p className='text-white text-xl font-medium'>Join us</p>
                    <div className='flex justify-center items-center h-6 w-6 bg-cozy ml-4'>
                        <KeyboardArrowRightOutlined className='text-black'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Fullpage;
