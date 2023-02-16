'use client'
import React from 'react';
import CartIcon from '@/components/Icons/CartIcon';
const WhatsAppButton = () => {
  
  //get email cookie from login page
  const email = localStorage.getItem('email');
  

  if(!email){
    return null;
  }

  return (
    <a href="https://wa.me/TU NUMERO DETELEFONO"
    className="bg-secondary hover:bg-slate-800 text-white font-bold py-2 px-4 
    rounded-full fixed bottom-20 right-0 m-5
    h-16 w-16 flex items-center justify-center
    " 
    target="_blank" 
    rel="noopener noreferrer">
        < CartIcon />
</a>
  );
};

export default WhatsAppButton;