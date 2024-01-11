"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideCards1 from "./SlidingCards/SlideCards1";

const Card = () => {

const android ='images/android.jpeg'
const web="images/web.jpg"
const  cyber ='images/cyber.jpeg'
const digital="images/digital_market.jpg"
const design="images/designUi.jpg"
const logo="images/logo_card.jpeg"
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto p-5">
      <div className="">
        <SlideCards1 title="IOS & Android Application" 
        image={android}
        color="to-black via-dark-blue-800 from-blue-950"
        />
      </div>
      <div>
        <SlideCards1 title="Web Development " 
        image={web}
        color="to-black via-cyan-600 from-gray-900"

        />
      </div>
      <div>
        <SlideCards1 title="Digital Marketing" 
       image={digital}
       color="to-black via-dark-blue-800 from-cyan-800 "

        />
      </div>
      <div>
        <SlideCards1 title="Cyber Security" 
         image={cyber}
        color="to-black via-dark-blue-800 from-cyan-800"

        />
      </div>
      <div>
        <SlideCards1 title="Design & UI Development "
        image={design}
        color="to-cyan-800 via-amber-800 from-black"

        />
      </div>
      <div>
        <SlideCards1 title="Logo Animation" 
        image={logo}
        color="to-black via-fuchsia-800 from-fuchsia-950"

        />
      </div>
    </div>
  );
};

export default Card;
