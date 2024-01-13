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
      heading: "Effective Synergy",
      text: "Communication is to hear what isn't being said. We appear at times to over-communicate. While it sounds overwhelming, it works wonders for our clients and our company ultimately. With communication alone we solve real-world problems. Our Development team remains in contact with customers through channels and media that allow performance, transparency and accuracy, feasible with all time zones across the World.",
    },
    {
      image: "/images/innovation.jpg",
      heading: "On Time Delivery",
      text: "We do not over promise we over-deliver our promise.We have a great collection of internal frameworks with best-in-class infrastructure with a decade of experience in the IT software development industry that helps us to deliver solutions with superior quality at all times. We have learned how to avoid mistakes and repeat success all these years. We don't brag about consistency alone. In time, we describe and produce it. Our Products are here to notify the same.",
    },

    {
      image: "/images/innovation.jpg",
      heading: "Strong Expertise",
      text: "With our core field of expertise being Ruby on Rails, Angular, React, our coding experts remain on the cutting edge of the newest and most successful technology trends and popular applications on the market. So you can expect a greater level of ownership, commitments & deliveries in less time with higher quality while following all the best practices for the development. Thereby providing the best values for our customers. It is always that we believe in Quality > Quantity & “Value” is what is valued.",
    },
    {
      image: "/images/innovation.jpg",
      heading: "Total Ownership & Feedback Based",
      text: "We do not follow the criteria or requirements just like that. Right from the beginning we have a direct influence on the project. We take spontaneous feedback from our clients, their customers, and other stakeholders that have an impact on the product. And we take your product and its feedback seriously. With this we make sure that we all are heading towards the right direction. Which saves really everything that matters.",
    },
    {
      image: "/images/innovation.jpg",
      heading: "Results Focused",
      text: "We create digitally adaptable products, not just features. These are the real world problems and the solutions are futuristic.And we make sure we deliver them regardless of any factors that may hinder the development or progress. Everything is in control. You know your destination? We know how to take you there. In the long term, our priority is on making your company succeed.",
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
