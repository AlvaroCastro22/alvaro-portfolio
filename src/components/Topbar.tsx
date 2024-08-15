

export default function Topbar({handleDownload}:{handleDownload:()=>void}) {

    return (
        <div className="fixed z-40 flex w-full  justify-between  items-center px-[14px] md:px-[30px] pt-4 ">
            <div className='flex gap-2 md:gap-5 items-center'>
                <div className=" w-7 h-7 md:w-9 md:h-9 shadow-md rounded-full  bg-cover" style={{backgroundImage:"url('/images/foto.jpeg')"}}> </div>
                <p className=' text-[8px] md:text-[16px] text-black-300'>Alvaro Castro</p>
                
            </div>

            <div className="flex items-center gap-6 md:gap-9">
                <div className='flex gap-4 md:gap-7'>
                <a href="https://github.com/AlvaroCastro22"><img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /></a>
                
                <a href="https://www.linkedin.com/in/alvaro-castro-ramos-517404269/"><img className='w-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" /></a>

                </div>
            
            <button onClick={handleDownload} className='py-2 px-3 bg-[var(--azul-300)] rounded-lg text-[12px] md:text-[16px] md:px-5 md:py-3 md:rounded-[15px] text-white'>Descargar CV</button>
            </div>
        </div>
    )
}