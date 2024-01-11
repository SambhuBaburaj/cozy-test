import React, { useState } from "react";
import "./style.css";

import { motion, useAnimation } from "framer-motion";
export default function SlideCards1(props) {
  console.log(props,"title");
  const controls = useAnimation();
  const slideText = useAnimation();
  const controls1 = useAnimation(); 
  const [clicked, setClicked] = useState(false)
  const handleHover = () => {
    controls.start({
      y: "100%",
      x: "50%",
      scale: 2.2,
      filter: "blur(8px)",

      
      opacity: 0,
    });
    slideText.start({ x: 0, opacity: 1 });
  };

  const handleLeave = () => {
    controls.start({ y: 0, x: 0, scale: 1.1, filter: "blur(0)", opacity: 1 });
    slideText.start({ x: 100, opacity: 0 });
  };

const handleClick=()=>
{
  

  if(clicked){
    handleLeave()

    setClicked(!clicked)
  }
  else{
    handleHover()

    setClicked(!clicked)

  }
}

  return (
    <div className="">
      <motion.div
      onClick={handleClick}
        onHoverStart={handleHover}
        onHoverEnd={handleLeave}
        className=" "
      >
        <div
          className={`relative bg-gradient-to-b ${props?.color}  -z-10`}
          style={{
            position: "",
            overflow: "hidden",
            height: "70vh",
          }}
        >
          <motion.div
            className=""
            initial={{ y: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${props.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="">
            <motion.div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",

                padding: "20px",
              }}
            >
              {/* <h2 className="uppercase font-bold">Research Report</h2> */}
              <h2 className="uppercase text-xl font-bold p-2">
             {props?.title}
              </h2>

              <motion.p
                initial={{ x: 300, opacity: 0 }}
                animate={slideText}
                transition={{ duration: 0.5 }}
                className="p-3"
              >
                Decarbonization requires collaboration. So what if all net zero
                investments were synchronized? We outline key actions each
                industry needs to take to ensure an equitable, affordable and
                sustainable energy transition.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
