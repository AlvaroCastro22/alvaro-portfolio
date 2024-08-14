type PositionProps = {
    position:string
}
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Proyect =  ({position}:PositionProps) => {
    useEffect(()=>{
        AOS.init();
    },[])
    
    return (
        <div data-aos={position=="der" ? "fade-left" : "fade-right" } className=" w-full  flex flex-col sm:flex-row  md:px-[clamp(0px,10vw,144px)] max-w-[1408px] ">
                          <div className={`sm:w-1/2  ${position=="der" && "sm:order-last"}  `}>
                          <div className="w-[95%] mx-auto sm:mx-0 aspect-square  border-4 border-black-200 rounded-3xl">
                            
                          </div>
                          </div>
                          <div className=" sm:w-1/2 sm:pl-5 pt-3 sm:pt-0 px-[3.2vw] sm:px-0 flex flex-col gap-8">
                            <div className="flex flex-col gap-2 sm:gap-1">
                              <div>
                              <p className="text-primary-300 text-[12px] sm:text-[clamp(0px,1.6vw,12px)] xl:text-[16px]">Categoria</p>
                              <h3 className="text-[20px] sm:text-[clamp(0px,4vw,30px)] xl:text-[38px] font-semibold">Titulo de Proyecto</h3>
                              </div>
                            
                            <p className="sm:text-[clamp(0px,2.1vw,16px)] xl:text-[20px]">Descripcion</p>
                            </div>
                            
                            <a className="sm:text-[clamp(0px,2.1vw,16px)] xl:text-[20px] px-3 py-1 rounded-md bg-primary-300 w-fit text-white" href="">Link</a>
                          </div>
                        </div>
    )
}

export default Proyect