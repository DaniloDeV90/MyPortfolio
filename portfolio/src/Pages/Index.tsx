
import Navbar from "../components/Navbar/Navbar"
import Home from "./Home/Home"
import Curriculo from "./Servicos/Curriculo"
import Sobre from "./Sobre/Sobre"
import  {useContext} from "react"
import { ThemeContext } from "../Context/ThemeContext"
import Projetos from "./Projetos/Projetos"




const Index = () => {
    const themas = useContext (ThemeContext)

    
    


    
    const themeBlack:string [] = ["Container_Home_Black", "Container_Sobre_Black", "Container_Curriculo_Black", "Container_Projetos_Black"]

    const themeLight:string [] = ["Container_Home_Light","Container_Sobre_Light", "Container_Curriculo_Light", "Container_Projetos_Light"]


    return (
<>
 
 <Navbar/>

<div className={`Container_Home  ${ themas?.theme != "light" ? themeLight[0] : themeBlack[0]}`} id="home" ><Home/></div>
<div className={ `Container_Sobre  ${ themas?.theme != "light" ? themeLight[1] : themeBlack[1]}`}   id="sobre"><Sobre/></div>
<div className={`Container_Curriculo ${ themas?.theme != "light" ? themeLight[2] : themeBlack[2]} `}  id="curriculo"> <Curriculo/></div>
<div className={`Container_Projetos ${ themas?.theme != "light" ? themeLight[3] : themeBlack[3]} `}  id="projetos"> <Projetos/></div>
 </>
    )
}

export default Index


