import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";


import CardProduct from '@/components/Productos/CardProduct'
import { NuevosProductos } from '@/additional';
export default function ListasProductos({productos,fetchMoreData}
    
    :{productos:any,fetchMoreData:VoidFunction}
    
    ) {
  return (
    <article id='scrollableDiv' className='w-full h-180 overflow-x-auto overflow-y-scroll'>
          <InfiniteScroll
            dataLength={productos.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            className=' w-full grid grid-cols-4 gap-y-5'
            scrollableTarget="scrollableDiv"
            scrollThreshold={0.80}
          >
            {productos.map((producto: NuevosProductos, index:number) => (
              <CardProduct key={index} data={producto} />
            ))}
          </InfiniteScroll>

          
        </article>
  )
}
