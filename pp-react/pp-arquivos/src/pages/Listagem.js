import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import api from '../services/api';

import UserComponent from '../components/UserComponent';

import './Caixas.css';
import './Listagem.css';

function Listagem() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        api.get('/user')
        .then(({ data }) => {
            setUsers(data);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bigBoxListagem">
            <h2 className="tituloCaixa">Listagem de Usuários</h2>

            {(users.length > 0) ? users.map((user) => {
                return <UserComponent 
                key={user._id}
                name={user.name}
                email={user.email}
                />
            }) : <p>Não há usuários!</p>}

            <div className="voltarButton">
                <Link to="/" className="voltarText">Voltar</Link>
            </div>

        </div>
    );
};

export default Listagem;