const Card = () => {
    return (
      <div
        
        className="group relative  w-[80vw] max-w-[408px] rounded-lg md:rounded-2xl aspect-[23/24]  md:w-[450px] overflow-hidden bg-black-200 flex flex-col"
      >
        <div className="w-full grow">

        </div>
        <div className="w-full bg-white h-[40%]">
          <div className="h-full flex flex-col justify-between pl-[2.5vw] md:pl-5 pt-[2vw] pb-[3vw] md:pt-5 md:pb-6">
            <div className="gap-[clamp(0px,2.5vw,12.5px)] flex-col flex">
              <h3 className="font-bold text-[clamp(0px,3.2vw,16px)]">Titulo de Ejemplo</h3>
              <p className="text-[clamp(0px,3.2vw,16px)] font-light pr-[clamp(0px,9vw,67px)] leading-[clamp(0px,4vw,20px)]">This is a example text, so i dont know what to write down on this section yet</p>
            </div>
            <div className="flex gap-2">
                  <p className="py-1 px-[clamp(0px,1.8vw,16px)] bg-black-200 bg-opacity-25 rounded-md md:rounded-lg text-[clamp(0px,3.2vw,16px)]">Hola</p>
                  <p className="py-1 px-[clamp(0px,1.8vw,16px)] bg-black-200 bg-opacity-25 rounded-md md:rounded-lg text-[clamp(0px,3.2vw,16px)]">Hola</p>
                  
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card