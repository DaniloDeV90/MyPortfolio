
import { useState, useEffect } from "react"
import LightDark from "./LightDark/LightDark"
import "./Navbar.css"
import './menuHamburguerComponent/StyleHmbuurguer.css'

import LinkMobileComponnet from "./LinksComponent/LinkMobileComponnet"
import LinkDesktopComponent from "./LinksComponent/LinkDesktopComponent"
import MenuHamburguer from "./menuHamburguerComponent/MenuHamburguer"


type cssHamburguer = {

  display: string
}


const Navbar = () => {

  const [Hamburguer, setHamburguer] = useState<cssHamburguer>({ display: "none" })



  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 701) {
        setHamburguer({ display: "none" })
      }
    })



  }, [])


  const Hamburgao = () => {

    const hamburguer2 = { ...Hamburguer }


    const value = Hamburguer.display === "flex" ? "none" : "flex"
    hamburguer2.display = value

    setHamburguer(hamburguer2)



  }

  return (
    <header>
      <nav>

        <div className="nome_Nav">
          <p>Danilo do Carmo</p>
        </div>

        <div className="links">
          <LightDark />

          <div className="link_Desktop"   >
            <LinkDesktopComponent />
          </div>

          <div className="menuhamburgao">
            <MenuHamburguer funcClick={Hamburgao} />
          </div>
          <div className="links_Mobile" style={Hamburguer}>
            <LinkMobileComponnet />
          </div>

        </div>



      </nav>
    </header>
  )
}

export default Navbar
