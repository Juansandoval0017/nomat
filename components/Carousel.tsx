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
   const [inTransition, setInTransition] = useState(false);
   const [outTransition, setOutTransition] = useState(false);
   const len = children.length;
   const numofSlides = 4;
  
  


   return (
    <div className="w-full flex flex-col" >
     <section className="w-full flex justify-between items-center mb-10" >
        <span>{"<"}</span>
        <article className="w-11/12 flex justify-between" >
            
            {
                Array.from({length: numofSlides}, (_, i) => {

                  return (
                    <div className="w-1/4 flex justify-center items-center" >
                      {children[newIndex(index, len, i)]}
                    </div>
                  )
                })
            }

        </article>
        <span>{">"}</span>
     </section>

      <section className="w-full flex gap-2 justify-center">
        {
          children.map((_, i) => i===index ? <Dot active={true} /> : <Dot active={false} />)
        }
      </section>

    </div>

   )
};

export default Carrusel;