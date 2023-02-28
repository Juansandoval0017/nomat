import { Producto } from '@/additional'
import React , {useContext} from 'react'
import CartContext from '@/context/CartContext'


export default function Panel({data}: {data: Producto}) {
  
    const {cart, setCart} = useContext(CartContext)

    const addToCart = () => {
        const item = {
          
          name: data.Name ,
        precio: data.precio ,
        slug: data.slug ,
        image: data.Imagenes[0] ,
        partNum: data.PartNum ,
      quantity: 1
        
        }
    
        setCart([...cart, item])
      }
  
  
  
    return (
    <section className='w-2/6   '>
        <div className='w-2/6 top-1/4  fixed border-secondary border-2 p-10 flex flex-col z-10 ' >
          <h1 className='text-4xl font-bold'>{data.Name}</h1>

          <div className='w-full flex justify-evenly mt-10 border p-2 border-secondary'>
          <h2 className='text-2xl font-bold '>${data.precio.toLocaleString()}
          <span className='text-primary' > COP</span>
          </h2>

          <h2 className='text-2xl font-bold'>{data.Quantity}
          <span className='text-primary' > Disponibles</span>
          </h2>


          </div>
          

          {/* boton de comprar */}

          <div className='w-full flex gap-2'>

          <button className='w-2/4 bg-primary text-white p-2 mt-10 rounded-md self-center' >Comprar</button>
          
          <button className='w-2/4 bg-secondary text-white p-2 mt-10 rounded-md self-center'
          onClick={addToCart}
          >Agregar al carrito</button>

          </div>
          

        </div>
      </section>
  )
}
