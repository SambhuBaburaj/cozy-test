"use client";
import React from "react";
import "../components/Cards/style.css";
import { motion, useAnimation } from "framer-motion";
import ParalaxCard from "./Cards/firstCard";
import SecondCard from "./Cards/SecondCard";
import ThirdCard from "./Cards/ThirdCard";

export default function ParalaxCards() {
  const controls1 = useAnimation(); // controls for the first text
  const controls2 = useAnimation(); // controls for the second text
  const controls3 = useAnimation(); // controls for the second text

  const handleHover = () => {
    // Trigger animation when hovering
    controls1.start({ y: -100, opacity: 0 });

    // Show the second text
    controls2.start({ y: -100, opacity: 1 });

    controls3.start({ y: 225, opacity: 1 });
  };

  const handleHoverEnd = () => {
    // Reset animation when not hovering
    controls1.start({ y: 210, opacity: 1 });

    // Hide the second text
    controls2.start({ y: 500, opacity: 0 });
    controls3.start({ y: 500, opacity: 0 });
  };

  const handleClick = () => {
    // Trigger animation on click
    controls1.start({ y: -100, opacity: 0 });
    controls2.start({ y: -100, opacity: 1 });
    controls3.start({ y: 225, opacity: 1 });

    // Add your additional click event logic here
    console.log("Div clicked!");
  };

  return (
  <>
      <div className="flex  justify-center mt-80">
    <div className="container ">
          <section className="parallax__group ">
            <div className="parallax__layer parallax__layer--background"></div>
            <div className="parallax__layer parallax__layer--foreground lg:flex lg:justify-center container">
              <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 container">
                <ParalaxCard />
                <SecondCard />
                <ThirdCard />
              </div>
            </div>
          </section>
        </div>
        </div>
  
  </>
    
    
  );
}
