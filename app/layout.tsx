import './globals.css'
import Navbar from '@/components/common/navbar'
import Foot from './Foot'
import WhatsAppButton from './WppButton'
import ClientContent from './ClientContent'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  
  return (
    <html lang="es">
     
      <head />
      <body>
        <Navbar />
        <WhatsAppButton />
        <ClientContent >
          {children}
        </ClientContent>

       
        
        <Foot />

       
        
        </body>
    </html>
  )
}
