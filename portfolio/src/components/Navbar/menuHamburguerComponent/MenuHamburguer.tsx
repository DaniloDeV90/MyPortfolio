
import "./StyleHmbuurguer.css"


  
const MenuHamburguer = ({funcClick}: {funcClick: () => void}) => {


  return (
<>
<label className="burger" htmlFor="burger" >
  <input type="checkbox" id="burger" onClick={funcClick}/>
  <span></span>
  <span></span>
  <span></span>
</label>


</>
  )
}

export default MenuHamburguer