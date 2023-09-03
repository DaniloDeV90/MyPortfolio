import  { useContext } from 'react'
import "./StyleCard/StyleCard.css"

import { ClosedContext } from '../../../Context/ClosedCardContext';

const CardFilme = () => {

    const Closed = useContext (ClosedContext);

    const closeCard =  () => {

        Closed?.toggleClosed (true)
console.log (Closed?.closed)
    
    }




  return (
    <div className='Card_Container'>

        <div className="Card">
     <div className="Close_Card" >
      <p onClick={closeCard} className='x'>X</p>  
     </div>

     <div className="Title_Card">
        <h1>Eai</h1>
     </div>
     <div className="Card_Descricao">
        <p>card da Api de filmes</p>
     </div>
        </div>


    </div>
  )
}

export default CardFilme