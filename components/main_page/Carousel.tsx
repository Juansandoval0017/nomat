'use client'
import React, { useState, useRef, useEffect } from "react";
import Dot from "./Dot";

const newIndex = (index: number, length: number, direction: number) => {
  const newIndex = index + direction;
  if (newIndex < 0) {
    return length - 1;
  } else if (newIndex >= length) {
    return 0;
  } else {
    return newIndex;
  }
}

const Carrusel = ({children}:{
    children: React.ReactNode[]
}) => {

   const [index, setIndex] = useState(0);
   const [transition, setTransition] = useState(false);
   const len = children.length;
   const numofSlides = 4;
  
   const handlePrev = () => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
      setIndex(newIndex(index, len, -1));
    }, 500);
    
   }

    const handleNext = () => {
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
        setIndex(newIndex(index, len, 1));
      }, 500);
    
    }

    const handleDot = (i: number) => {
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
        
      }, 1000);
      setIndex(i);
    }
  


   return (
    <div className="w-full flex flex-col" >
     <section className="w-full flex justify-between items-center mb-10" >
        <button className=" h-6 w-6 rounded-full text-xl  flex justify-center items-center text-secondary font-bold" 
        onClick={handlePrev}
        >
     
                {"<"}
         
        </button>
        <article className={transition?"w-11/12 flex justify-between animate-pulse":"w-11/12 flex justify-between"} >
            
            {
                Array.from({length: numofSlides}, (_, i) => {

                  return (
                    <div key={i} className="w-1/4 flex justify-center items-center" >
                      {children[newIndex(index, len, i)]}
                    </div>
                  )
                })
            }

        </article>
        <button className=" h-6 w-6 rounded-full text-xl  flex justify-center items-center text-secondary font-bold"
        onClick={handleNext}
        >
          
                {">"}
         
        </button>
     </section>

      <section className="w-full flex gap-2 justify-center">
        {
          children.map((_, i) => i===index ? <Dot active={true} key={i} /> : <Dot active={false} key={i} onClick={
            () => handleDot(i)
          } />)
        }
      </section>

    </div>

   )
};

export default Carrusel;