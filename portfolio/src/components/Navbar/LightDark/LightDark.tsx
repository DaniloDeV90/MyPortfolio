
import { useState, useContext } from "react";
import "./LightDark.css"
import { ThemeContext } from "../../../Context/ThemeContext";

const LightDark = () => {

  const Theme = useContext(ThemeContext)

  const cont = Theme?.theme != "dark" ? false : true

  const [isChecked, setIsChecked] = useState(cont);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);

    Theme?.toggleTheme()

  };


  return (
    <>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className="slider"></span>
      </label>
    </>
  )
}

export default LightDark