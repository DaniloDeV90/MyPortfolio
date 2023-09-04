import { useContext } from 'react'
import { ClosedContext } from '../../../Context/ClosedCardContext';
import imgLandingPage from "../imgProjetos/LandingPage-a89ff69c.png"
import Card from './Card';

const LandingPageCard = () => {

   const CardFilme =  {
      Title: "Landing Page",
      imagem:  imgLandingPage,
      desc: "Desafio de css que eu fiz na rocketSeat que era criar uma landing Page, é o meu primeiro projeto front End.",
      tecnologias: [
         "react", "javascript", "css  in modules"
      ]
   }




   return <Card elementos={CardFilme}/>
   
   
}

export default LandingPageCard