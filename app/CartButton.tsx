'use client'
import React , {useEffect,useState,useContext} from 'react';
import CartIcon from '@/components/Icons/CartIcon';
import CartContext from '@/context/CartContext';
import OpenCart from '@/components/carrito/OpenCart';
const CartButton = () => {
  
  //get email cookie from login page
  
  const [email,setEmail] = useState<string>("")
  
  const {cart,open,setOpen} = useContext(CartContext);

    useEffect(() => {
        setEmail(localStorage.getItem('email') || "")
    }, [])


  if(!email){
    return null;
  }

  return (
    <>
    <section 
    onClick={() => setOpen(!open)}
    className="bg-secondary hover:bg-slate-800 text-white font-bold py-2 px-4 
    rounded-full fixed bottom-20 right-0 m-5
    h-16 w-16 flex items-center justify-center
    ">
        < CartIcon />
   
    </section>
    { open && <OpenCart />}
    </>
  );
};

export default CartButton;