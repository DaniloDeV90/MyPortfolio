
import "./StyleCard/StyleCard.css"
import imageApiFilme from "../imgProjetos/imgFilme-c8f5ec8d.jpg"

import Card from './Card';

const CardFilme = () => {

   const CardFilme =  {
      Title: "Api de Filmes",
      imagem: imageApiFilme,
      desc: "Projeto que eu criei consumindo uma api que retorna filmes aletórios, A finalidade desse projeto é gerar filmes para que você possa assistir quando estiver indeciso. Foram utilizados Axios para as requisições da api e React.",
      tecnologias: ["react", "Axios", "javascript"],
      link: "https://encontrar-filmes.vercel.app"
   }




   return <Card elementos={CardFilme}/>
}

export default CardFilme