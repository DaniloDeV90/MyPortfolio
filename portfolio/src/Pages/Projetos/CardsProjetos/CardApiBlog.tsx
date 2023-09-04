
import Card from "./Card"
import imgBlog from "./../allProjects/imgs/imgBlog.png"

const CardApiBlog = () => {
    const CardBlog =  {
        Title: "Api de Filmes",
        imagem: imgBlog,
        desc: `Esta api segue o padrão MVC, é um blog criado em Node com express e é uma api com views integrada, onde a partir você do momento em que você der start no servidor, ela cria todo o ambiente visual em localhost. 
        A api possui rotas privadas onde apenas o dono do blog pode acessar.`,
        tecnologias: ["Node", "Express", "Mongodb", "Mongoose", "JWT", "Bcrypt", "Handlebars", "Bootstrap"]
     }
  
  
  
  
     return <Card  elementos={CardBlog}/>
}

export default CardApiBlog