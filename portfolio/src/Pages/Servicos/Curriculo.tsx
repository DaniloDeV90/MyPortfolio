
import "./StyleCurriculo/Curriculo.css"
const Curriculo = () => {
  return (
    <>
      <section className='Section_Curriculo'>
        <h1>Meu Currículo</h1>


        <div className="curriculo_curriculo">

          <div className="Formacao">


            <div className="DataFormacao">
              <div className="TitleForm">
                <h2>Formação</h2>
              </div>
              <div className="tempo">
                <p>De: 02/2022</p>
                <p>até: 04/2024</p>
              </div>

              <div className="instituicao">
                <p>UNIDESC</p>
              </div>
            </div>
            <div className="line-container">
              <div className="line"></div>
              <div className="circle"></div>
            </div>

            <div className="SobreFormacao">
              <div className="titleFormacao">
                <h3>Análise e desenvolvimento de sistemas</h3>
              </div>


              <div className="DecFormacao">
                <p>cursando ADS para expandir meus conhecimentos  e ter uma visão maior da TI para além da programação</p>
              </div>
            </div>


          </div>
          <div className="RowSeparator"></div>

          <div className="Tecnologias_Servicos">
            <div className="Tecnologia">
              <div className="titleTec">
                <h2>Tecnologias</h2>
              </div>

              <div className="BackEndColumn">
                <div className="TitleTecBack">
                  <div className="TitleBack">
                    <h3>Back end</h3>
                  </div>
                </div>
                <div className="ListTecBack">

                  <span>Typescript</span>
                  <span>Node</span>
                  <span>C#</span>
                  <span>.NET</span>
                  <span>Nest</span>
                  <span>Express</span>

                  <span>Java</span>
                  <span> Spring Boot </span>
                </div>
              </div>

              <div className="FrontEndColumn">
                <div className="TitleTecFront">
                  <div className="TitleFront">
                    <h3>Front end</h3>
                  </div>
                </div>
                <div className="ListTecFront">

                  <span>Javascript</span>
                  <span>React</span>
                  <span>Axios</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>Styled Components</span>
                  <span>Tawilnd</span>
                </div>
              </div>
              <div className="DatabaseColumn">
                <div className="TitleTecDatabase">
                  <div className="TitleDatabase">
                    <h3>Databases</h3>
                  </div>
                </div>
                <div className="ListTecDatabase">

                  <span>Mongodb</span>
                  <span>PostgreSQL</span>
                  <span>Redis</span>


                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

    </>
  )
}

export default Curriculo