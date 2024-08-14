import Topbar from "./components/Topbar"
import React, { useState, useEffect } from 'react';
import 'animate.css';
import { ReactLenis, useLenis } from 'lenis/react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel";
import { ParallaxProvider,Parallax } from 'react-scroll-parallax';
import Proyect from "./components/Proyect";
import AOS from "aos"
import 'aos/dist/aos.css';
import HeroSection from "./components/HeroComponent";
function App() {
  useEffect(()=>{
    AOS.init();
},[])
  const [isFadedIn, setIsFadedIn] = useState(true);
  const [fade, setFade] = useState(true);
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsFadedIn(false);
    }, 1250); 

    
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setFade(false)
    }, 3250);

    
    return () => clearTimeout(timer);
  }, []);
  return (
    <ParallaxProvider>
    
      <div className="relative w-full">
        <div className={`${isFadedIn ? '' : 'animate-fadeOut'} ${fade ? "" : " hidden"} bg-black-300  w-full h-screen fixed z-50 flex justify-center items-center`}>
          <div className=" mb-12 animate__animated animate__fadeOutUp animate__delay-1s  flex flex-col">
          <p className="text-white text-[clamp(0rem,6vw,1.5rem)] md:text-[32px] lg:pl-3 lg:text-[40px] xl:pl-4 xl:text-[48px] 2xl:text-[56px] animate-colorChange  ">DESARROLLADOR</p>
          <p className="text-white text-[clamp(0rem,20vw,5rem)] leading-[70px] md:text-[9rem] md:leading-[0.8] lg:text-[12rem] xl:text-[15rem]  2xl:text-[18rem] animate-colorChange ">FRONTEND</p>
          </div>
          
        </div>
        <Topbar/>
        <HeroSection/> 
        <HorizontalScrollCarousel/>
        <div className="bg-black-100  relative ">
          
          <div className="w-full bg-white h-fit absolute -top-[48vh] md:-top-[40vh] lg:-top-[65vh]">
          <div className="w-full h-full py-9 lg:py-10 overflow-hidden">
                      <div className="flex flex-col items-center gap-2 lg:gap-3 ">
                        <h2 data-aos="zoom-in" className="text-[clamp(16px,3.2vw,18px)] lg:text-[26px] font-bold text-primary-500">Proyectos Realizados</h2>
                        <p className="text-[clamp(14px,5.8vw,32px)] leading-[clamp(0px,5vw,32px)] lg:text-[42px] lg:leading-[45px] text-center">Desde wireframes hasta diseños de <br /> paginas totalmente programadas</p>
                      </div>
                      <div   className="w-full h-full px-[2vw] md:px-[16px] mt-8 flex flex-col items-center pt-10  gap-9 md:gap-12 ">
                        <Proyect position="izq"/>
                        <Proyect position="der"/>
                        <Proyect position="izq"/>
                      </div>
                    </div>
                    

          <footer className=" bg-black-200  shadow  w-full">
              <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center text-white">© 2024 <a href="https://flowbite.com/" className="hover:underline">Alvaro Castro™</a>. Todos los derechos reservados.
              </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-primary-400">About</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-primary-400">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline me-4 md:me-6 text-white hover:text-primary-400">Licensing</a>
                  </li>
                  <li>
                      <a href="#" className="hover:underline text-white hover:text-primary-400">Contact</a>
                  </li>
              </ul>
              </div>
          </footer>

          </div>
        </div>
          
        
        
        
      </div>
      
    </ParallaxProvider>
  )
}

export default App
