import React, { useEffect, useRef, useState } from 'react'
import './StylesProjeto/Projeto.css'
import FrontEndProjetos from './FrontEndProjetos/FrontEndProjetos'
const Projetos = () => {
    const [divButtons, setDivButtons] = useState<React.FormEvent<HTMLDivElement> | null>(null)
    const ref = useRef<HTMLDivElement | null>(null)

    const [Category, setCategory] = useState<string>("all")




    const Filter = (ev: Element): void => {
        ev.addEventListener("click", (e) => {
            const target: EventTarget = e.target as EventTarget
            if (target instanceof Element) {
                setCategory(target.id)
            }
        })


    }


    useEffect(() => {

        const button = () => {

            if (ref.current) {
                const colecao = [...ref.current.children]
                colecao.forEach(ev => {
                    Filter(ev)
                })
            }
        }

        button()
    }, [])
    console.log(Category)

    return (
        <section>
            <div className="Title_Projetos">
                <h1>Projetos</h1>

                <div className='buttonsProjetos' ref={ref} onChange={e => setDivButtons(e)}>
                    <button id='all'>Todos</button>
                    <button id='Back_End'>Back-end</button>
                    <button id='Front_End'>Front-End</button>
                </div>

                <div className="Projetos_Container">
                    {Category === "all" ? <p>oi</p> : ""}

                    {Category === "Back_End" ? <p>oi Vascudo</p> : ""}
                    {Category === "Front_End" ? <FrontEndProjetos/> : ""}  
                </div>
            </div>
        </section>
    )
}

export default Projetos