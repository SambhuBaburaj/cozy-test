"use client";

import React from "react";
import "./style.css";
import { motion, useAnimation } from "framer-motion";
import SlideCards1 from "@/app/components/SlidingCards/SlideCards1";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        <div className="">
          <SlideCards1 title="IOS & Android Application" />
        </div>
        <div>
          <SlideCards1 title={"Heloooooo"} />
        </div>
        <div>
          <SlideCards1 />
        </div>
        <div>
          <SlideCards1 />
        </div>
        <div>
          <SlideCards1 />
        </div>
        <div>
          <SlideCards1 />
        </div>
        <div>
          <SlideCards1 />
        </div>
        <div>
          <SlideCards1 />
        </div>
      </div>
    </>
  );
}
