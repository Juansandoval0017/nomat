import React from 'react';
import CartIcon from '@/components/CartIcon';
const WhatsAppButton = () => {
  const WhatsAppLink = "https://wa.me/+573057223586";

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