import { Producto } from '@/additional'
import React from 'react'

export default function Imagenes({
    data,
    index,
    setIndex,

}:
{
    data: Producto,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

) {
  const mainImgSize = 400 //cambiar segun el tamaño
  
  return (
    <article className='w-full flex justify-center items-center flex-col border border-slate-200 p-5' >
        
        <img src={data.Imagenes[index]} alt="foto" className='object-fill border border-secondary' height={mainImgSize} width={mainImgSize} />

        {/** max 4 images */}
        <div className='w-full flex justify-center mt-5 gap-5'>
          {
            data.Imagenes.map((img: string, i) => {
              if(i > 4){
                return null
              }
              
              return (
                <img src={img} alt="foto" key={i}
                className={`object-fill ${i === index ? 'border-2 border-secondary' : 'opacity-60'}`}
                
                height={mainImgSize/4} width={mainImgSize/4} onClick={() => setIndex(i)} />
              )
            })


          }

        </div>
        


      </article>
  )
}
