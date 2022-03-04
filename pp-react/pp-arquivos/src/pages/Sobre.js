import { Link } from 'react-router-dom';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';

import './Sobre.css';
import './Caixas.css';

function Sobre() {
    return (
        <div className="bigBox">
                <h2 className="sobreTitle">Sobre mim</h2>
                <p className="descricao">Meu nome é Guilherme Ramos. Sou estudante de Sistemas de Informação na Universidade Federal da Paraíba (UFPB). Fiz esse site usando as tecnologias: HTML e CSS, JavaScript, React e MongoDB. Comecei a estudar programação no início de 2021, com ênfase em desenvolvimento web.</p>

                <h2 className="sobreTitle" id="caixa2">Fale comigo</h2>

                <div className="faleComigo">

                    <p className="contato">
                        
                        <div className="redes">
                            <SiWhatsapp />
                        </div>

                        +55 (83) 99955-0042
                        
                    </p>

                    <p className="contato">
                        
                        <div className="redes">
                            <SiInstagram />
                        </div>
                        
                        <a href="https://www.instagram.com/guirmsilva" target="_blank" rel="noreferrer">@guirmsilva</a>
                        
                    </p>

                </div>

            <div className="voltarButton">
                <Link to="/" className="voltarText">Voltar</Link>
            </div>
                
        </div>
    );
};

export default Sobre;