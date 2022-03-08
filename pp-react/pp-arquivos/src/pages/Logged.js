import { Link } from 'react-router-dom';
import api from '../services/api';

import './Caixas.css';
import './Logged.css';

function Logged(user) {

    api.get(`/login/${user}`);

    return (
        <div className="bigBox">
            <h2 className="tituloCaixa">Acessso autorizado</h2>

            <h3>Nome do usuário</h3>

            <p className="finalMsg">Obrigado por usar o meu site!</p>

            <div className="voltarButton">
                <Link to="/" className="voltarText">Voltar</Link>
            </div>

        </div>
    );
};

export default Logged;