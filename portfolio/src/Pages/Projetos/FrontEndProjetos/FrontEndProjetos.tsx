
import { useEffect, useRef, useState, useContext } from "react"

import "./FrontEnd.css"
import CardFilme from "../CardsProjetos/CardFilme"
import { ClosedContext } from "../../../Context/ClosedCardContext"
import LandingPageCard from "../CardsProjetos/LandingPageCard"

type ArrayComponent = {
    Id: string,
    Component: JSX.Element
}

const FrontEndProjetos = () => {
    const Closed = useContext(ClosedContext)


    const ref = useRef<HTMLDivElement | null>(null)
    const [cardProjects, SetCardProjects] = useState<string | null>(null)
    const CardComponents: ArrayComponent[] = [{Id: "ApiFilme" , Component: <CardFilme />}, {Id: "landingPage", Component: <LandingPageCard />}]

    const [Component, setComponent] = useState <JSX.Element  > ( <p>testando..</p> )

    const Teste  = (): JSX.Element => {
        return Component

    }

    useEffect(() => {

     
        ref.current?.addEventListener(("click"), () => {
            if (ref.current) {
                SetCardProjects(ref.current.id)

                console.log (ref.current.id)
              


            }
        })
    }, [])



    useEffect(() => {

        if (Closed?.closed) {
            Closed?.toggleClosed(true)
            SetCardProjects(null)

        }
    }, [Closed?.closed])

    return (
        <div className="containerProjetosFrontEnd"  >


            {!cardProjects ? <div className="Projetos_Container">
                <div className="ConfigProjeto_Container" id="landingPage" ref={ref}  >
                    <div className="container_imagens" id="landingPage" >
                        <div className="imagem" id="landingPage" >
                            <p className='sobreimg' id="landingPage" >Clique para ver detalhes</p>
                        </div>

                    </div>
                    <div className="TitleProjeto" id="landingPage" >
                        <h1>Landing Page</h1>
                    </div>
                    <p id="landingPage" >Página Landing Page q eu fiz como desafio da rocketSeat.</p>
                </div>
                <div className="ConfigProjeto_Container" id="ApiFilme" ref={ref}  >
                    <div className="container_imagens" id="ApiFilme">
                        <div className="imagem" id="ApiFilme">
                            <p className='sobreimg' id="ApiFilme" >Clique para ver detalhes</p>
                        </div>


                    </div>
                    <div className="TitleProjeto" id="ApiFilme">
                        <h1>Landing Page</h1>
                    </div>
                    <p>Página Landing Page q eu fiz como desafio da rocketSeat.</p>
                </div>
            </div> : <Teste />}


        </div>
    )
}

export default FrontEndProjetos