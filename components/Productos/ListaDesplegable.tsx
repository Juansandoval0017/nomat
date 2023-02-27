'use client'
import { Categorias } from '@/additional'
import React, {useState} from 'react'
const data = [
    "Campo 1",
    "Campo 2",
    "Campo 3",
    "Campo 4",
    "Campo 5",
    "Campo 6",
    "Campo 7",
    "Campo 8",
    "Campo 9",
    "Campo 10",
]


const styles = {
    open: 'w-full flex flex-col gap-2 p-2 max-h-120 transition-all duration-500 ease-in-out overflow-y-auto',
    close: 'w-full flex flex-col gap-2 p-2 hidden max-h-0 transition-all duration-500 ease-in-out overflow-y-auto'
}

export default function ListaDesplegable({data} : {data: Categorias[]}) {

    const [open, setOpen] = useState(false)
  return (
    <div className='w-full flex flex-col border border-secondary' >
        <section className='w-full flex justify-between items-center p-1 cursor-pointer relative' onClick={()=> setOpen(!open) } >
            <span>
                Categorias
            </span>
            
            { /* flecha desplegable */}
            <article>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                </svg>


            </article>

        </section>

        <section className= {  open? styles["open"] : styles["close"]  } >
            {
                data.map((item, index) => {
                    return (
                        <label className='flex gap-2' key={index} >
                            <input type="checkbox" name='orden' value={index} className=' accent-violet-900' />
                            <span  >{item.Categoria}</span>
                        </label>
                    )
                })
            }
        </section>
    </div>
  )
}
