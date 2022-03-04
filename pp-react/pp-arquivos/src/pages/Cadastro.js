import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import api from '../services/api';

import ControlButtons from '../components/ControlButtons';

import './Caixas.css';

const validUser = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O email é um campo obrigatório'),
    password: yup.string().required('A senha é um campo obrigatório').min(6, 'Senha muito fraca'),
    passwordConfirm: yup.string().required('Confirme sua senha')
});

function Cadastro() { 

    const [ password, setPassword ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validUser)
    });

    const addUser = data => {
            if (password === passwordConfirm) {
                api.post('/user', data);
                navigate('/');
            } else {
                alert('Confirme sua senha!')
            };
    };

    return (
        <>
            <form className="bigBox" onSubmit={handleSubmit(addUser)}>
                <h2 className="tituloCaixa">Faça seu cadastro</h2>


                <div className="field">

                    <label>Nome</label>
                    <input type="text" name="name" {...register("name")} />

                    <p className="errorMessage">{errors.name?.message}</p>

                </div>


                <div className="field">
                    <div><label>Email</label></div>

                    <input type="text" name="email" {...register("email")} />

                    <p className="errorMessage">{errors.email?.message}</p>

                </div>


                <div className="field">

                    <div><label>Senha</label></div>
                    <input type="password" name="password" id="pw" {...register("password")} onChange={(e) => setPassword(e.target.value)} />

                    <p className="errorMessage">{errors.password?.message}</p>

                </div>

                <div className="field">

                    <div><label>Confirmar Senha</label></div>
                    <input type="password" name="passwordConfirm" id="pwc" {...register("passwordConfirm")} onChange={(e) => setPasswordConfirm(e.target.value)} />

                    <p className="errorMessage">{errors.passwordConfirm?.message}</p>

                </div>

                <ControlButtons retorno="login" />

            </form>
        </>
    );
};

export default Cadastro;