
import "./StyleSobre/StyleSobre.css"
import DownloadIcon from './StyleSobre/icons/downloadIcon'
import Curriculo from "./curriculo/Currículo (5).pdf"
const Sobre = (): JSX.Element => {
    return (
        <>

            <section className='Section_Sobre'>
                <h1>Sobre mim.</h1>
              
                <div className='Eu_Sobre'>

                    <div className="QuemSouEu_Sobre">
                        <h3>Olá, me chamo Danilo</h3>
                        <br />
                        <p> sou Desenvolvedor Full Stack em busca da primeira oportundiade para mostrar meus conhecimentos,porém mesmo sem nenhuma experiência profissional, conto com vários projetos pessoais.</p>
                    </div>

                    <div className="Localizacao_Sobre">

                        <div className="MeuNome_Sobre">
                            <div className='Nome_Sobre'>Nome:</div>
                            <div className='ContentName_Sobre'>Danilo do Carmo Gonçalves</div>
                        </div>

                        <div className='Row'></div>

                        <div className="MeuTelefone_Sobre">
                            <div className='Telefone_Sobre'> Telefone: </div>
                            <div className='ContentTelefone_Sobre'>+55(61)994263260</div>
                        </div>
                        <div className='Row'></div>
                        <div className="MeuEmail_Sobre">
                            <div className="Email_Sobre"> Email:</div>
                            <div className="ContentEmail_Sobre"> danilodocarmo38@gmail.com </div>
                        </div>

                        <div className='Row'></div>

                        <div className="MinhaCidade_Sobre">
                            <div className="Cidade_Sobre"> Localização:</div>
                            <div className="ContentCidade_Sobre">Luziânia,Goías,Brasil</div>

                        </div>
                        <div className="Row"></div>

                        <div className="CurriculoContainer_Sobre">
                            
                        <div className="Curriculo_Sobre">
                        <a href={Curriculo} type='application/pdf'  download ="CurriculoDanilo.pdf"className='DownloadCurriculo_Sobre'>
                          Baixe meu Curriculo <DownloadIcon/></a>
                    </div>
                    </div>
                    </div>

                    


                </div>


            </section>


        </>
    )
}

export default Sobre

