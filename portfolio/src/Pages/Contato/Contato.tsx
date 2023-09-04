/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { useEffect, useRef } from "react"
import "./StylesContato/StylesContato.css"
import Github from "./svgs/Github"
import Gmail from "./svgs/Gmail"
import Linkedin from "./svgs/Linkedin"
import Whatsapp from "./svgs/Whatsapp"

const Contato = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    const Filter = async (eve: EventTarget) => {

        if (eve instanceof Element) {


            let conteudo = "";
            if (eve.className === "Email") conteudo = "danilodocarmo38@gmail.com"

            console.log(conteudo)

            if (eve.className == "Email") {


                await navigator.clipboard.writeText(conteudo)


                eve.children[0].children[1].textContent = "Copiado!"

                setTimeout(() => {
                    eve.children[0].children[1].textContent = eve.className;
                }, 3000)


            }

        }
    }


    useEffect(() => {

        const arr = [...ref.current?.children as HTMLCollection]

        arr.forEach((e) => {
            e.addEventListener("click", e => {
                Filter(e.currentTarget as EventTarget)
            })
        })

    }, [])


    return (
        <>

            <h1>Contato</h1>
            <section className="contato" ref={ref}>




                <div className="Email" >
                    <a >
                        <span>{<Gmail />}</span>
                        <span>Email</span>
                    </a>
                </div>
                <div className="Linkedin" >
                    <a href="https://www.linkedin.com/in/danilo-do-carmo-gonçalves-903879231/" target="_blank" >
                        <span>  {<Linkedin />}</span>
                        <span>Linkedin</span>
                    </a>
                </div>
                <div className="Whatsapp" >
                    <a href="whatsapp://send?phone=61994263260" target="_blank">
                        <span>  {<Whatsapp />} </span>
                        <span> Whatsapp</span>
                    </a>
                </div>
                <div className="Github" >
                    <a href="https://github.com/DaniloDeV90" target="_blank" >
                        <span>  {<Github />} </span>
                        <span> Github</span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contato