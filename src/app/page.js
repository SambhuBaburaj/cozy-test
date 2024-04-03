"use client";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import ContactForm from "./components/ContactForm";
import DynamicTransition from "./components/DynamicTransition";
import Navbar from "./components/Navbar";
import ParalaxCards from "./components/ParalaxCards";
import Fullpage from "./components/Fullpage";
import locomotiveScroll from 'locomotive-scroll';
import Value from "./components/Value";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

export default function Home() {

  
  const scrollRef = useRef(0);

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true, // Enable smooth scrolling
  //     // You can add more options here as needed
  //   });

  //   // Clean up on unmount
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);
  return (
    <>
      <Navbar />
      <DynamicTransition />
      <div className="container flex justify-center items-center mx-auto mt-10">
        <Card />
      </div>
      <Value />
      <ParalaxCards />
      <Carousel/>
      <Fullpage/>
      <ContactForm/>
      <Footer/>
    </>


  );
}
