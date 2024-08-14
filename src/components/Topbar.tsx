import { FaBeer } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Topbar() {

    return (
        <div className="fixed z-40 flex w-full  justify-between  items-center px-[14px] md:px-[30px] pt-4">
            <div className='flex gap-2 md:gap-5 items-center'>
                <div className=' w-7 h-7 md:w-9 md:h-9 shadow-md rounded-full'></div>
                <p className=' text-[8px] md:text-[16px] text-black-300'>Alvaro Castro</p>
                
            </div>

            <div className="flex items-center gap-6 md:gap-9">
                <div className='flex gap-4 md:gap-7'>
                <p className='text-[8px]'>Github</p>
                <p className='text-[8px]'>LinkedIn</p>
                </div>
            
            <button className='py-2 px-3 bg-[var(--azul-300)] rounded-lg text-[12px] md:text-[16px] md:px-5 md:py-3 md:rounded-[15px] text-white'>Descargar CV</button>
            </div>
        </div>
    )
}