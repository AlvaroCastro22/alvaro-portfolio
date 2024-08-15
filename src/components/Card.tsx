import { Info } from "../types";

type CardProps = {
  props: Info
}
const Card = ({props}:CardProps) => {
    const aspect = props.id % 2 == 1 ;
    
    
    return (
      <div
        
        className="group relative  w-[80vw] max-w-[408px] rounded-lg md:rounded-2xl aspect-[23/24]  md:w-[470px] overflow-hidden bg-black-300 flex flex-col"
      >
        <div className="w-full grow bg-cover" style={{backgroundImage:`url('${props.imagen}')`}}>

        </div>
        <div className={`w-full ${ aspect ?"bg-primary-300" : "bg-white"} h-[45%]`}>
          <div className="h-full flex flex-col justify-between pl-[2.5vw] md:pl-5 pt-[2vw] pb-[3vw] md:pt-5 md:pb-6">
            <div className="gap-[clamp(0px,2.5vw,12.5px)] flex-col flex">
              <h3 className={`font-bold text-[clamp(0px,3.2vw,16px)] ${ aspect ?"text-white" : "text-black-300"} `}>{props.titulo}</h3>
              <p className={`text-[clamp(0px,3.2vw,16px)] font-light pr-[clamp(0px,9vw,67px)] leading-[clamp(0px,4vw,20px)]  ${ aspect ?"text-white" : "text-black-300"}`}>{props.descripcion}</p>
            </div>
            <div className="flex gap-2 overflow-x-auto elemento-personalizado py-[5px] ">
              {props.tags.map(x=><p className={`py-1 px-[clamp(0px,1.8vw,16px)]  bg-opacity-25 rounded-md md:rounded-lg text-[clamp(0px,3.2vw,16px)] hover:bg-opacity-45 ${ aspect ?"text-white bg-black-300" : "text-black-300 bg-black-200"}`}>{x}</p>)}
                  
                  
                  
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card