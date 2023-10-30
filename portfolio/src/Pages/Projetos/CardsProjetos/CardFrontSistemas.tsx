
import "./StyleCard/StyleCard.css"
import imageSistemas from "../allProjects/imgs/imgSistemas.jpeg"

import Card from './Card';

const CardFrontSistemas = () => {

    const CardFrontSistemas = {
        Title: "Front end da api de sistemas",
        imagem: imageSistemas,
        desc: "Uma interface em react que eu criei para complementar a api em Java do desafio de criação de setores de uma  empresa.",
        tecnologias: ["typescript", "React", "Axios", "Styled Components"],
        link: "https://sea-solutions-react.vercel.app"
    }




    return <Card elementos={CardFrontSistemas} />
}

export default CardFrontSistemas