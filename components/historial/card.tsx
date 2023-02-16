import React from 'react'

export default function card() {
    const size = 100
  return (
    <section  className='w-full flex justify-between items-center text-secondary border-2 border-secondary p-2 rounded-md shadow-xl' >

        <article className='flex items-center w-1/2 gap-3' >
        
            <img src="/images.jpeg" alt=""  width={size}  height={size} className='rounded-full border border-secondary  '  />
            <div className='w-full flex flex-col gap-5' >

                <span className='text-2xl font-semibold' >Nombre del producto</span>
                <div className='flex gap-1 items-center text-lg' >
                    <span className='text-violet-900 font-semibold ' >Fecha:</span>
                    <span>14/04/1999</span>
                </div>
                <div className='flex gap-1 items-center text-lg' >
                    <span className='text-violet-900 font-semibold ' >Guia:</span>
                    <span>1123123</span>
                </div>

            </div>

        </article>


        <article className='flex flex-col  gap-3' >

        <div className='flex gap-1 items-center text-lg' >
                    <span className='font-semibold text-2xl' >57.000</span>
                    <span className='text-violet-900 font-semibold '>COP</span>
        </div>
            
        <span className='text-violet-900 font-semibold text-xl ' >Enviado</span>
        
        </article>


    </section>
  )
}
