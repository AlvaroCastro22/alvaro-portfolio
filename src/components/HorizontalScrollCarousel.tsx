import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";
import {Parallax } from 'react-scroll-parallax';
 const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    
    
    const x = useTransform(scrollYProgress, [0, 1], ["40%", "-60%"]);
  
    return (
        <div className="w-full ">
        <div  className="relative bg-black-300 w-full">
          <section ref={targetRef}  className="relative  h-[200vh] md:h-[300vh]  w-full">
            
                <div className="sticky top-[6%] md:top-[0px] flex flex-col  h-[75vh] min-h-[400px] min-[335px]:min-h-[500px] min-[500px]:min-h-[620px] sm:h-[80vh]  md:h-screen items-center overflow-hidden  py-8 ">
                    <Parallax className="w-full" speed={-50} translateY={['-80px', '0px']} easing={"easeInOut"}>
                      <h2 className="text-white text-[clamp(0px,14vw,76px)] leading-[clamp(0px,12vw,64px)] md:leading-[94px] md:text-[6.4rem] ">Mis <span className="text-primary-300">habilidades <br /> </span> como FrontEnd</h2>
                    </Parallax>
                    <Parallax className="absolute bottom-0" speed={-20} translateY={['-10px', '0px']} easing={"easeInOut"}>
                    
                      <motion.div  style={{ x }} className="flex gap-4 z-10 pb-5">
                        {/* {cards.map((card) => {
                          return <Card card={card} key={card.id} />;
                        })} */}
                        <Card/>
                        <Card/>
                        <Card/>
                      </motion.div>
                    
                   </Parallax> 
                    
                </div>
            
        
                {/* <div className="h-[800px] md:h-[1200px]  w-full sticky top-[0px]  ">            
                </div>
                <div className=" w-full bg-primary-100 h-[200px] sticky top-[0px]">
                  <h2 className="text-center">Proyectos realizados</h2>        
                </div> */}
                {/* <div className=" w-full  h-[75vh] md:h-[155vh] "></div> */}
                {/* <div className="w-full sticky bg-primary-200 top-0 ">
                  <div className=" bg-primary-100 w-full h-[1000px]">
                    <div className="w-full h-full py-10">
                      <div className="flex flex-col items-center">
                        <h2>Proyectos Realizados</h2>
                        <p>Desde wireframes hasta diseños de paginas totalmente programadas</p>
                      </div>
                    </div>
                    
                  </div>
                </div> */}
        
      </section>
        </div>
        </div>
    );
  };

  export default HorizontalScrollCarousel