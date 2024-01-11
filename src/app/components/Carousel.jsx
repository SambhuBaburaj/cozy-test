"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Carousel() {
  const controls = useAnimation();

  const data = [
    {
      image: "/images/innovation.jpg",
      heading: "Mondelēz International’s Data and AI Transformation",
      text: "The global snacking giant is laying a tasty foundation for reinvention and growth. Accenture is helping Mondelēz International to embrace the power of data and AI, build a strong digital core and implement interoperable cloud-enabled technology.",
    },
    {
      image: "/images/moon.png",
      heading: "Heading TWO",
      text: "Text TWO",
    },
    {
      image: "/images/innovation.jpg",
      heading: "Heading THREE",
      text: "Text THREE",
    },
  ];

  const sliderVariants = {
    incoming: (direction) => ({
      opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "-100%",
      scale: 1,
      opacity: 0.2,
    }),
  };

  const sliderTransition = {
    duration: 5,
    ease: [0.56, 0.03, 0.12, 1.04],
  };

  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, data.length, imageCount);

  const swipeToImage = async (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId) => {
    let changeDirection;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };











  
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full mb-10">
        <div className="relative">
          <motion.div
            style={{ width: "45vw", height: "50vh", overflow: "hidden" }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={imageCount}
                style={{
                  backgroundImage: `url(${data[activeImageIndex]["image"]})`,
                }}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className="image"
              >
                <Image
                  src={data[activeImageIndex]["image"]}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div className="rounded-md overflow-hidden relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              className="w-full h-full flex items-center justify-end"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 2.5 }}
            >
              <div className="rounded-md w-1/2 mx-auto">
                <h2 className="text-3xl mb-2">
                  {data[activeImageIndex]["heading"]}
                </h2>
                <p>{data[activeImageIndex]["text"]}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="mx-10 space-x-10 flex justify-center">
        <button onClick={() => swipeToImage(-1)}><ArrowBackIcon/></button>
        <button onClick={() => swipeToImage(1)}><ArrowForwardIcon/></button> 
      </div>
    </div>
  );
}
