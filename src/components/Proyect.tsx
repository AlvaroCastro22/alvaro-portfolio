type PositionProps = {
    props: ProyectType
}
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ProyectType } from "../types";
const Proyect =  ({props}:PositionProps) => {
    useEffect(()=>{
        AOS.init();
    },[])
    
    const position2 = props.id%2==1 ? `izq` : `der`
    return (
        <div data-aos={position2=="der" ? "fade-left" : "fade-right" } className=" w-full  flex flex-col sm:flex-row  md:px-[clamp(0px,10vw,144px)] max-w-[1408px] ">
                          <div className={`sm:w-1/2  ${position2=="der" && "sm:order-last"}  `}>
                          <div className="w-[95%] sm:w-[90%] mx-auto sm:mr-auto aspect-square  border-4 border-black-200 rounded-3xl bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url('${props.imagen}')`}}>
                            
                          </div>
                          </div>
                          <div className=" sm:w-1/2 sm:pl-5 pt-3 sm:pt-1 px-[3.2vw] sm:px-0 flex flex-col gap-9">
                            <div className="flex flex-col gap-2 sm:gap-4">
                              <div>
                              <p className="text-primary-300 text-[12px] sm:text-[clamp(0px,1.6vw,12px)] xl:text-[16px]">{props.categoria}</p>
                              <h3 className="text-[24px] leading-[40px] sm:text-[clamp(0px,4vw,30px)] xl:text-[38px] font-semibold">{props.titulo}</h3>
                              </div>
                            
                            <p className={`sm:text-[clamp(0px,2.1vw,16px)] xl:text-[18px] xl:leading-8 sm:pr-6`}>{props.descripcion}</p>
                            </div>
                            <div className="flex gap-4">
                            <a className="sm:text-[clamp(0px,2.1vw,16px)] xl:text-[18px] px-3 py-1 rounded-md bg-primary-300 w-fit text-white flex items-center" href={props.link}>Ir al sitio web</a>
                            {props.secondLink !== "" && <a className="sm:text-[clamp(0px,2.1vw,16px)] xl:text-[18px] px-3 py-1 rounded-md border-primary-300 w-fit border flex items-center text-primary-300" href={props.secondLink}>Diseño en Figma</a> }
                            </div>
                            
                          </div>
                        </div>
    )
}

export default Proyect