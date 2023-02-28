'use client'
import { Carrito } from '@/additional'
import CartContext from '@/context/CartContext'
import React, {useState} from 'react'
import CartButton from './CartButton'

export default function ClientContent({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [cart, setCart] = useState<Carrito[]>([])
    const [open, setOpen] = useState(false);
  return (
    <CartContext.Provider value={{cart,setCart,open,setOpen}}>

          <CartButton />
          {children}

    </CartContext.Provider>
  )
}
