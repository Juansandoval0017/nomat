import './globals.css'
import Navbar from '@/components/common/navbar'
import Instagram from '@/components/Icons/InstagramIcon'
import Faceboock from '@/components/Icons/FaceboockIcon'
import Twitter from '@/components/Icons/TwitterIcon'
import Container from '@/components/Icons/IconContainer'
import Foot from './Foot'
import WhatsAppButton from './WppButton'
import CartButton from './CartButton'
import InicioSession from '@/components/common/InicioSession'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <WhatsAppButton />
        <CartButton />
        {children}
        
        <Foot />

       
        
        </body>
    </html>
  )
}
