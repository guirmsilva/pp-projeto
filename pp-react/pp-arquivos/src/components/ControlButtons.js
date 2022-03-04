import { Link } from 'react-router-dom';

import '../pages/Caixas.css'

function ControlButtons({ retorno }) {
    return (
        <div className="botoes">

            <div className="footerSecundario">
                <Link to={`/${retorno}`} className="botaoVoltar">Voltar</Link>
            </div>

            <div className="footerSecundario">
                <button className="botaoConcluir" type="submit">Concluir</button>
            </div>

        </div>
    );
};

export default ControlButtons;