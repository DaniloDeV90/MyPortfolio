
import "./StyleCard/StyleCard.css"
import imageSitemas from "../allProjects/imgs/imgSistemas.jpeg"

import Card from './Card';

const CardSeaChallenge = () => {

    const CardSeaChallenge = {
        Title: "Api de setores",
        imagem: imageSitemas,
        desc: "Essa api é um desafio que eu fiz para uma empresa, onde eu tive que criar uma aplicação que envolve criação de setores de uma empresa onde cada setor tem que ter um cargo e trabalhador",
        tecnologias: ["spring boot", "Java", "PostgreSQL", "hibernate"],
        link: "https://github.com/DaniloDeV90/Sea_Solutions_challenge"
    }




    return <Card elementos={CardSeaChallenge} />
}

export default CardSeaChallenge 