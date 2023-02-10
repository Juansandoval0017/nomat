import Container from '@/components/IconContainer'
import React from 'react'
import Faceboock from '@/components/FaceboockIcon'
import Instagram from '@/components/InstagramIcon'
import Twitter from '@/components/TwitterIcon'

export default function Foot() {
  return (
    <footer className='w-full  flex flex-col items-center justify-center bg-secondary overflow-hidden gap-5'>
           
            <section className='w-1/4 flex gap-5  justify-center items-center pt-10' >

                <Container>
                    <Instagram />
                </Container>
                <Container>
                    <Faceboock />
                </Container>
                <Container>
                    <Twitter />
                </Container>
             
              
            </section>

            <section className='flex items-center text-white gap-2' >
                <span  >
                  terminos y condiciones
                </span>
                
                <span className='h-2 w-2 bg-primary rounded-full' ></span>

                <span>
                  politicas de privacidad
                </span>
            </section>

            <section className='pb-10'>
                <p className='text-white text-center' >© 2023. Todos los derechos reservados.</p>

            </section>

        </footer>
  )
}
