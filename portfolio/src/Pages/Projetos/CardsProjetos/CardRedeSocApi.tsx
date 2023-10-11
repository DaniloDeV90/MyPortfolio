
import "./StyleCard/StyleCard.css"
import imageRedeSoc from "../allProjects/imgs/ImgRedeSoc.jpeg"

import Card from './Card';

const CardRedeSoc= () => {

   const CardRedeSoc =  {
      Title: "Api de  Rede Social",
      imagem: imageRedeSoc,
      desc: "Esse Projeto ainda está em construção, porém com certeza é  meu maior projeto onde sigo os padrões S.O.L.I.D e faço uso de testes unitários para criar uma api  escalável que forneça dados para uma rede social que eu ainda vou criar no front end. Esta api utiliza de várias tecnologias como WebSocket para chat em tempo real e posts em em tempo real",
      tecnologias: ["node", "redis", "typescript", "websocket","postgreSQL", "vitest"],
      link: "https://github.com/DaniloDeV90/Rede_Social_API/tree/main"
   }




   return <Card elementos={CardRedeSoc}/>
}

export default CardRedeSoc