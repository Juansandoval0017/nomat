import React from 'react'
import Range from '@/components/Productos/Range'
import SearchIcon from '@/components/Icons/SearchIcon'
import ListaDesplegable from '@/components/Productos/ListaDesplegable'
import { Categorias } from '@/additional'

export default function Filtros({categorias} : {categorias: Categorias[]}) {
  return (
    <article className='w-1/4 flex flex-col gap-5   '>

          <div className='flex gap-2 items-center border-2 border-secondary p-1 '>
            <span className='w-5 h-5'>
              <SearchIcon />
            </span>
          <input type='text' className='outline-none' placeholder='Buscar' />

          </div>

          <ListaDesplegable data={categorias} />

          

          <div className='flex flex-col gap-2'>
            <span className='text-violet-900 font-semibold' >Orden</span>
      
              <div className='flex items-start flex-col gap-2'>

                <label className='flex gap-2' >

                  <input type="radio" name='orden' value="1" className=' accent-violet-900' />
                  <span  >Menor a mayor</span>
                </label>
                
                <label className='flex gap-2' >

                  <input type="radio" name='orden' value="2" className=' accent-violet-900' />
                  <span  >Menor a Mayor</span>
                </label>

                <label className='flex gap-2' >

                  <input type="radio" name='orden' value="3" className=' accent-violet-900'  defaultChecked/>
                  <span  >Por defecto</span>
                </label>
                </div>
           
                


          </div>
          

          <Range />
          <Range />



          <button
          className='bg-secondary text-white font-semibold p-2  w-1/2 self-center'
          > Filtrar </button>

        </article>

  )
}
