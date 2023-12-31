
import { useEffect, useRef, useState, useContext } from "react"

import "./FrontEnd.css"
import CardFilme from "../CardsProjetos/CardFilme"
import { ClosedContext } from "../../../Context/ClosedCardContext"
import LandingPageCard from "../CardsProjetos/LandingPageCard"
import All_FrontEnd_Projects from "../allProjects/Front_End_Projects/All_Front_End"
import All_Back_End_Projects from "../allProjects/Back_End_Projects/All_Back_End_Projects"
import CardApiAlunos from "../CardsProjetos/CardApiAlunos"
import ALLprojects from "../allProjects/MostrarTodos/ALLprojects"

import CardApiBlog from "../CardsProjetos/CardApiBlog"
import CardRedeSoc from "../CardsProjetos/CardRedeSocApi"
import CardSeaChallenge from "../CardsProjetos/CardSeaChallenge"
import CardFrontSistemas from "../CardsProjetos/CardFrontSistemas"
type ArrayComponent = {
    Id: string,
    Component: JSX.Element
}

const FrontEndProjetos = ({ filtro }: { filtro: string }) => {
    const Closed = useContext(ClosedContext)


    const ref = useRef<HTMLDivElement | null>(null)
    const [cardProjects, SetCardProjects] = useState<string | null>(null)


    const CardComponents: ArrayComponent[] = [{ Id: "ApiFilme", Component: <CardFilme /> }, { Id: "landingPage", Component: <LandingPageCard /> }, { Id: "ApiAluno", Component: <CardApiAlunos /> }, {Id: "ApiBlog", Component: <CardApiBlog/>}, {Id: "redeSocApi", Component: <CardRedeSoc/>}, {Id:"sistemasAPI", Component: <CardSeaChallenge/>}, {Id: "FrontSistemas", Component: <CardFrontSistemas/>} ]

    const [Component, setComponent] = useState<JSX.Element>(<p>carregando..</p>)

    const Teste = (): JSX.Element => {
        return Component

    }

    useEffect(() => {

        ref.current?.addEventListener(("click"), (e) => {
            if (ref.current) {
                if (e.target instanceof Element) {

                    if (e.target.parentElement) {
                        const parent = e.target.parentElement.id;

                        SetCardProjects(e.target.parentElement.id)
            

                       
                        CardComponents.forEach( (objeto ) => {
                            if (objeto.Id === parent) setComponent(objeto.Component)
                        })

                        Closed?.toggleClosed(false)


                    }
                }


            }
        })
    }, [cardProjects])



    useEffect(() => {

        if (Closed?.closed) {
            Closed?.toggleClosed(true)
            SetCardProjects(null)

        }
    }, [Closed?.closed])

    return (
     
        <div className="containerProjetosFrontEnd "  >


            {!cardProjects ? <div className="Projetos_Container" ref={ref}>

                {filtro === "all" ? <ALLprojects /> : ""}
                {filtro == "Front_End" ? <All_FrontEnd_Projects /> : ""}
                {filtro == "Back_End" ? <All_Back_End_Projects /> : ""}

            </div> : <Teste />}
        

        </div>
    )
}

export default FrontEndProjetos