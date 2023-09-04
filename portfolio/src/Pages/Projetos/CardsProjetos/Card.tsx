import  { useContext, useEffect, useState } from 'react'
import { ClosedContext } from '../../../Context/ClosedCardContext';

import { ThemeContext } from '../../../Context/ThemeContext';

type JSXEelements = {
    Title: string,
    imagem: string,
    desc: string,
    tecnologias: string[]
}


const Card = ({ elementos }: { elementos: JSXEelements }) => {
    const Closed = useContext(ClosedContext);
    const Theme = useContext(ThemeContext)
    const [LightOrDarkTheme, setLightOrDarkTheme] = useState<string>("light")

    const closeCard = () => {

        Closed?.toggleClosed(true)
        console.log(Closed?.closed)

    }

    useEffect(() => {

        setLightOrDarkTheme(Theme?.theme as string)
    })


    return (
        <div className={`Card_Container  ${LightOrDarkTheme} `}>

            <div className="Card">   
                <div className="Close_Card" >
                    <h1>{elementos.Title}</h1>
                    <p onClick={closeCard} className='x'>X</p>
                </div>
                <hr />

                <div className="Card_Descricao">

                    <div>
                        <img src={elementos.imagem} id='imgCard' alt="imagem de um print da página da api" />
                    </div>

                    <div className="desc_do_projeto">

                        <div className="descricaoTec">
                            <p>{elementos.desc}</p>
                        </div>


                        <div className="LinkProjeto">
                            <a href="">Acessar projeto</a>
                        </div>



                        <div className="tecnologias_Usadas">

                            { elementos.tecnologias.map (tec => (
                                <span> {tec}</span>
                            ))}                    
       
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card