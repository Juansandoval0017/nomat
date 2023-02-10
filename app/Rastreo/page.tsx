import React from 'react'

export default function page() {
  return (
    <section className=' w-full flex justify-center '>

        <div className='w-1/2  mt-20 mb-20' >
            
            <article className='w-full flex flex-col items-center gap-10'>

                <div className='w-full flex items-center  h-10 gap-2 justify-center' >

                        <button className='w-3/12 bg-secondary text-white h-full' >
                            Numero de guia
                        </button>
                        <input type="text" className='h-full w-5/12 outline-none border-secondary border-2 p-1' />

                        <button className='h-full w-2/12 bg-violet-900 text-white ' >Buscar</button>

                        

                </div>

                <div className='w-full flex pb-10 border-violet-900 border-2 p-5 rounded-md gap-10' >
                
                    <div className='w-1/2 h-40 bg-gray-200 rounded-lg flex justify-center items-center'>
                    <img src="https://images.unsplash.com/photo-1616161610003-8b8f2b2b2f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className='w-3/4 h-3/4 object-contain' />
                    </div>

                    <div className='flex flex-col gap-5' >
                    <span>
                         <span className='text-violet-900'>Nombre del producto:</span>  nombre
                    </span>

                    <span>
                    <span className='text-violet-900'>Estado:</span>  nombre
                    </span>

                    <span>
                    <span className='text-violet-900'>Fecha Orden:</span>  orden
                    </span>

                    <span>
                    <span className='text-violet-900'>Fecha probable entrega:</span>  orden
                    </span>

                    </div>
                
                </div>

                
                

            </article>

        </div>

    </section>
  )
}
