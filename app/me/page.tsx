import React from 'react'
import InfoLabel from '@/components/me/InfoLabel'
import FormInput from '@/components/FormInput'
export default function page() {
  return (
    <div className='w-full justify-between flex p-5 items-center' >

        <section className='w-1/2 flex flex-col gap-5 ' >
            
            <InfoLabel label='nombre' txt="juan camilo sandoval" />
            <InfoLabel label='email' txt="sandovaljuancamilo02@gmail.com" />
            <InfoLabel label='Celular' txt="+573057223586" />



        </section>

        <section className='flex flex-col gap-5 w-1/3' >
            
            <FormInput type="text" texto="Contraseña Actual" name="oldPassword" />
            <FormInput type="text" texto="Nueva Contraseña" name="newPassword" />
            <button  className='bg-primary w-3/4 self-center text-secondary p-2 mt-5 rounded-md border-secondary border-2' >Cambiar contraseña</button>
        </section>

    </div>
  )
}
