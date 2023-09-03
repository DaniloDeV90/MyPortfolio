import  { useContext } from 'react'
import { ClosedContext } from '../../../Context/ClosedCardContext';

const LandingPageCard = () => {

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
        <p>Card da landingPage</p>
     </div>
        </div>


    </div>
  )
}

export default LandingPageCard