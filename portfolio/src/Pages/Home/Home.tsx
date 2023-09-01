import  { useEffect, useRef } from 'react'
import "./StyleHome/Home.css"
const Home = () => {

  
  
    const ref = useRef<HTMLSpanElement>(null)


    useEffect(() => {
        const TextWriter = () => {
            if (ref.current) {
                const arr: string[] = ref.current.innerText.split("");
                ref.current.innerText = "";

                arr.forEach((element, i) => {
                    setTimeout(() => {

                        if (ref.current) ref.current.innerHTML += element ;
                    },77 * i)


                })

            }
        }
        TextWriter()
    }, [])

  return (
  <>


            <section className='Section_Home'>
                <div className="HeaderContent_Home">
                    <span className='SobreMim_Home' ref={ref}>Desenvolvedor web Full Stack.</span>
                </div>

            </section>

</>
     
    

    
  )
}

export default Home