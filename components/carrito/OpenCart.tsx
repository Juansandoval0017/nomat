import React, {useContext} from 'react'
import CartContext from '@/context/CartContext'
import { Carrito } from '@/additional'

const MaxCaracteres = (str: string) => {
    const max = 50
    return str.length > max ? str.slice(0, max) + ' ...' : str
}

export default function OpenCart() {
    const {open, setOpen,cart,setCart} = useContext(CartContext)


    //definicion de funciones
    const handleAdd = (id: number) => {
        const newCart = cart.map((item,i) => {
            if(i === id){
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(newCart)
    }

    const handleMinus = (id: number) => {
        const _newCart = cart.map((item,i) => {
            if(i === id){

                if(item.quantity === 1){
                    return null
                }
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })

        const newCart  = _newCart.filter((item) => item !== null) as Carrito[]
        setCart(newCart)
    }

  return (
    <div className='w-2/6 h-screen fixed top-0 right-0 bg-secondary flex flex-col  p-10 justify-around' >
        {/* boton de cerrar */}
        <span className='w-full' >
            <span className='text-primary text-3xl cursor-pointer' 
            onClick={() => setOpen(false)}
            >
                X
            </span>
        </span>

        {/* Seccion de la tabla */}
        <section className='w-full mt-10'>

            <h1>Resumen del carrito</h1>

            <article className='text-white'>

                <table >
                    <thead className='border-white border rounded-lg' >
                        <tr className='bg-primary text-secondary'>
                            <th className='w-3/6 p-2' >Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody className='w-full' >
                        {cart.map((item,i) => (
                            <tr className='text-center' key={i} >
                                <td className='tooltip inline-block p-2 font-semibold w-full  border border-white' 
                                title={item.name}>{MaxCaracteres(item.name)}</td>

                                <td className=' border border-white text-xl '>

                                    <div className='w-full items-center gap-6 justify-center flex'>
                                        <button className='text-primary'
                                        onClick={() => handleMinus(i)}

                                        >-</button>

                                        <span>{item.quantity}</span>

                                        <button className='text-primary' 
                                        onClick={() => handleAdd(i)}
                                        >+</button>
                                    </div>
                                    
                                    
                                </td>

                                <td className=' border border-white'>{(item.precio*item.quantity).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot >
                        <tr className='bg-primary text-secondary font-bold text-lg' >
                            <td className='p-2 ' colSpan={2}>Total</td>
                            <td className='text-center' >
                                {cart.reduce((acc, item) => {
                                    return acc + item.precio*item.quantity
                                }, 0).toLocaleString()}
                                <span> COP</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>

            </article>


        </section>

        {/* Seccion de los botones */}

        <button className='bg-primary text-secondary text-xl 
                           p-2 w-1/2 rounded-md self-center
                           hover:bg-white
                           transition-all
                            duration-300
                            ease-in-out
                           '>
            Comprar
        </button>

       

    </div>
  )
}
