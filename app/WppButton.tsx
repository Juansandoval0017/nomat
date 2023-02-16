import React from 'react';
import WhatsAppIcon from '@/components/Icons/WppIcon';
const WhatsAppButton = () => {
  const WhatsAppLink = "https://wa.me/+573057223586";

  return (
    <a href="https://wa.me/TU NUMERO DETELEFONO"
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 
    rounded-full fixed bottom-0 right-0 m-5
    h-16 w-16 flex items-center justify-center
    " 
    target="_blank" 
    rel="noopener noreferrer">
        <WhatsAppIcon />
</a>
  );
};

export default WhatsAppButton;