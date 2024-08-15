const HeroSection = () => {
    return (
        <section className="w-full md:h-screen md:min-h-[880px]  flex flex-col sm:flex-row px-[10px] md:px-[6px] ">
          <div className=" flex flex-col sm:flex-row  h-fit sticky top-4 pb-[200px] md:pb-4 pt-13 w-full justify-between gap-8 md:mx-auto md:gap-2 md:max-w-[900px] lg:gap-2 lg:max-w-[1400px]">
            <div className="flex flex-col gap-11 md:gap-12">
            <div className="flex flex-col gap-7 lg:gap-8">
              <div>

              
              <h1 className="	 text-[32px] md:text-[48px] lg:text-[68px] font-semibold text-black-300 leading-10 md:leading-[60px] lg:leading-[90px]">Hola, soy Alvaro, un <br></br> </h1>
              <h1 className="animate__animated animate__fadeInDown animate__delay-2s text-[32px] md:text-[48px] lg:text-[68px] font-semibold text-black-300 leading-10 md:leading-[60px] lg:leading-[90px]"><span className="text-[var(--azul-300)] ">Desarrollador FrontEnd.
              </span></h1>
              </div>
              <p className="text-[20px] md:text-[28px] lg:text-[30px] font-light sm:w-[346px] md:w-[450px] lg:w-[700px]">Programador Web Front-End y estudiante de Ingenieria de Sistemas, apasionado por el diseño y la programacion</p>
              
            </div>
            <div  className="flex items-center gap-4 md:gap-7">
              <a href="#div_id" className="text-[12px] lg:text-[16px] py-2 px-4  border-4 rounded-xl border-[var(--azul-300)] text-[var(--azul-300)] hover:bg-primary-300 hover:text-white">Conoce mas de mi trabajo</a>
              <p><a href="https://github.com/AlvaroCastro22/alvaro-portfolio" className="underline text-[8px] md:text-[12px] text-primary-500 decoration-solid leading-4 hover:font-bold">Como se realizo este portafolio</a></p>
              
            </div>
            </div>
            <div className=" flex justify-center h-fit">
            <img className="w-full max-w-[500px] sm:max-w-[300px] md:min-w-[200px] lg:max-w-[500px] " src="/images/hero-image.png" alt="" />
            </div>
          </div>
          
        </section>
    )
}
export default HeroSection