import React from 'react'

export default function ListaDesplegable() {
  return (
    <div className='w-full flex flex-col' >
        <section className='w-full flex justify-between' >
            <span>
                Campo
            </span>
            
            { /* flecha desplegable */}
            <article>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                </svg>


            </article>

        </section>
    </div>
  )
}
