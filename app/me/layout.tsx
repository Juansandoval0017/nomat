
import Aside from "@/components/me/aside"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (


          <section className="w-full flex p-20 justify-center" >
              
              <div className=" w-10/12 flex-col h-120 ">
                <Aside />
                <div className="w-full  border border-secondary" >
                {children}

                </div>

              </div>
              

          </section>
          
     
    )
  }