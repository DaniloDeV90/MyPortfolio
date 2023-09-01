





import { useEffect, useState } from "react"
import { ThemeProvider } from "./Context/ThemeContext"
import Index from "./Pages/Index"
function App() {

  const  [date, setDate] = useState <boolean> (false);


  useEffect (() =>  {

  
 if (!localStorage.getItem ("Theme")) localStorage.setItem ("Theme", "light")
  setDate (true)

  
},[])
  return (
    <>


 {date &&  <ThemeProvider>
      <Index />
 </ThemeProvider>}

 {!date &&   <p>carregando...</p> }
    </>
  )
}

export default App
