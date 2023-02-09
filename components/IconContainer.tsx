
const Container = ({children}:{children:React.ReactNode}) => {

    return(
        <article className='bg-white w-10 h-10 rounded-full p-2 flex justify-center items-center'>
            {children}
        </article>
    )

}


export default Container