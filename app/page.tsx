import Image from 'next/image'
import Carousel from '@/components/main_page/Carousel'
import CategoryCard from '@/components/main_page/categoryCard'
import NewCard from '@/components/main_page/newCard'
import { Categorias, NuevosProductos } from '@/additional'





const getData = async () => {
    const categorias = await fetch(`${process.env.HOST}/api/categorias`,{
      cache: "no-store"
    })
    const nuevos = await fetch(`${process.env.HOST}/api/nuevosProductos`,{
      cache: "no-store"
    })

    const returnCategorias = await categorias.json()
    const returnNuevos = await nuevos.json()
    return {
      categorias: returnCategorias,
      nuevos: returnNuevos
    } as {
      categorias: Categorias[],
      nuevos: NuevosProductos[]
    }

}

export default async function Home() {

  const {categorias, nuevos} = await getData()
  return (
    <>
    {/* La parte linda */}
    <section className=' w-full  flex flex-col items-center'>

      <div className='w-3/4 h-96 flex  justify-between mt-20'>
          {/* Datos de la empresa */}
        <article className='w-1/2 flex flex-col h-full  justify-center items-start gap-5'>

        <h1 className='text-primary font-semibold text-5xl' >NOMAT</h1>
        <h1>Slogan de la empresa o descricion pequeña</h1>
        <div className='w-3/4 h-0 border-b border-secondary border-2' ></div>
        <span className='w-3/4 text-justify'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ab facilis obcaecati minima, est alias perspiciatis dicta suscipit, et libero consectetur. Enim dolor vel molestiae aperiam doloremque veniam praesentium odit?
        </span>

        <button className='bg-primary rounded-2xl p-2 w-24 text-secondary' >
          Tienda
        </button>

        </article>
        {/* Imagen random */}

        <article className='w-1/2 h-full flex justify-center items-center' >
          <Image src='/images.jpeg' alt='logo' width={300} height={300} />
        </article>

      </div>
      {/* carrusel de categorias */}
      <section className='w-3/4 flex flex-col gap-5 mb-10' >
        <h1 className='text-secondary font-semibold text-2xl mb-2' >Categorias</h1>
        <div className='w-full h-0 border-b border-secondary border-2'></div>
        <Carousel>
          {categorias.map((categoria, index) => (
            <CategoryCard key={index} data={categoria} />
          ))}
        </Carousel>
      </section>
      {/* carrusel de los productos nuevos */}
      <section className='w-3/4 flex flex-col gap-5 mb-20' >
        <h1 className='text-secondary font-semibold text-2xl mb-2' >¡Lo mas nuevo!</h1>
        <div className='w-full h-0 border-b border-secondary border-2'></div>
        <Carousel>
          {nuevos.map((categoria, index) => (
            <NewCard key={index} data={categoria} />
          ))}
        </Carousel>
      </section>

    </section>

    </>
  )
}
