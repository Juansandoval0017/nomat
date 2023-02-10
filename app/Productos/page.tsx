'use client'
import React,{useState,useEffect} from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import ListaDesplegable from '@/components/Productos/ListaDesplegable'
import Range from '@/components/Productos/Range'
import SearchIcon from '@/components/SearchIcon'
import CardProduct from '@/components/Productos/CardProduct'

const fakeApi = async () => {
  
  const newProductos = [0,0,0,0,0,0,0,0]
  
  return newProductos

}

export default function page() {

  const [productos, setProductos] = useState([0,0,0,0,0,0,0,0])

  const fetchMoreData = async () => {
    const newProductos = await fakeApi()
    setProductos([...productos, ...newProductos])
  }
  

  return (
    <div className='w-full h-screen  flex justify-center items-center text-secondary mb-20'>
      
      <section className='w-10/12 flex gap-10 mt-10 h-full justify-center items-center'>

        <article className='w-1/4 flex flex-col gap-5'>

          <div className='flex gap-2 items-center border-2 border-secondary p-1 '>
            <span className='w-5 h-5'>
              <SearchIcon />
            </span>
          <input type='text' className='outline-none' placeholder='Buscar' />

          </div>

          <ListaDesplegable />

          <ListaDesplegable />

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

        <article id='scrollableDiv' className='w-full h-120 overflow-x-auto overflow-y-scroll'>
          <InfiniteScroll
            dataLength={productos.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            className=' w-full grid grid-cols-4 gap-y-5'
            scrollableTarget="scrollableDiv"
          >
            {productos.map((producto, index) => (
              <CardProduct key={index} />
            ))}
          </InfiniteScroll>

          
        </article>


      </section>

     




    </div>
  )
}
