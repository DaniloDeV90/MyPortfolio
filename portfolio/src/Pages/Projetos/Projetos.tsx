import { useEffect, useRef, useState } from 'react'
import './StylesProjeto/Projeto.css'
import FrontEndProjetos from './FrontEndProjetos/FrontEndProjetos'


const Projetos = () => {

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
        <section className='section_Projetos'>
            <div className="Title_Projetos">
                <h1>Projetos</h1>

                <div className='buttonsProjetos' ref={ref}>
                    <button id='all'>Todos</button>
                    <button id='Back_End'>Back-end</button>
                    <button id='Front_End'>Front-End</button>
                </div>

                <div className="Projetos_Container">
                    {Category === "all" ? <FrontEndProjetos filtro='all' /> : ""}
                    {Category === "Back_End" ? <FrontEndProjetos filtro='Back_End' /> : ""}
                    {Category === "Front_End" ? <FrontEndProjetos filtro='Front_End' /> : ""}
                </div>
            </div>
        </section>
    )
}

export default Projetos