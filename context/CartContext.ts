import { Carrito } from "@/additional";
import React  from "react";

const CartContext = React.createContext({
    cart: [] as Carrito[],
    setCart: (cart: Carrito[]) => {},
    open: false,
    setOpen: (open: boolean) => {},


})

export default CartContext