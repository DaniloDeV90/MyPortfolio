
import Card from './Card'
import imgAluno from "../allProjects/imgs/ImgAluno.jpeg"
const CardApiAlunos = () => {

    const CardFilme =  {
        Title: "Api de Alunos",
        imagem: imgAluno,
        desc: "Projeto que eu criei em API REST utilizando o padrão MVC para criar uma api de cadastro de alunos com rotas privadas",
        tecnologias: ["Node", "Express", "Postgresql", "Sequelize", "JWT", "CORS", "Helmet"],
        link: "https://github.com/DaniloDeV90/Api_Aluno2"
     }
  
  
  
  
     return <Card elementos={CardFilme}/>

}

export default CardApiAlunos