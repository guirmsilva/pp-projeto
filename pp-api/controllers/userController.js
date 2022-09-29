const bcrypt = require('bcrypt');
const router = require('express').Router();

const User = require('../models/User');
const settings = require('./userConfig');

// Cadastro de Usuário
router.post('/', async (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;

    const params = [['name', name], ['email', email], ['password', password], ['passwordConfirm', passwordConfirm ]];

    for (var i = 0; i < params.length ; i++) {
        if (settings.requirements[i].required == true && params[i][1] == undefined) {
            return res.status(422).json({ error: `O campo ${params[i][0]} é obrigatório` });
        }

        if (params[i][0] != settings.requirements[i].type) {
            return res.status(500).json({ error: 'Erro do servidor. Tente novamente mais tarde' });
        }

        if (params[i][1].length < settings.requirements[i].minLength) {
            return res.status(400).json({ error: `O limite mínimo de caracteres do campo ${params[i][0]} não foi alcançado` });
        } else if (params[i][1].length > settings.requirements[i].maxLength) {
            return res.status(400).json({ error: `O limite máximo de caracteres do campo ${params[i][0]} foi ultrapassado` });
        }
    };

    if (password !== passwordConfirm) {
        return res.status(422).json({ msg: 'As senhas não conferem' });
    };

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
        return res.status(422).json({ msg: 'Utilize outro email' });
    };

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = {
        name,
        email,
        password: passwordHash
    };

    try {
        await User.create(user);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
    } catch {
        res.status(500).json({ error: 'Não foi possível cadastrar o usuário' });
    };
});

// Leitura de Usuários
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch {
        res.status(500).json({ error: 'Não foi possível encontrar os usuários' });
    };
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findOne({ _id: id });

        if (!user) {
            res.status(422).json({ message: 'Usuário não encontrado' });
            return
        }

        res.status(200).json(user);

    } catch {
        res.status(500).json({ error: 'Erro ao encontrar o usuário' });
    };
});

// Atualização de Usuário
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = {
        name,
        email,
        password: passwordHash
    };

    try {
        const updatedUser = await User.updateOne({ _id: id }, user);

        if (updatedUser.matchedCount == 0) {
            res.status(422).json({ message: 'O usuário não foi encontrado' });
            return
        };

        res.status(200).json(user);
    } catch {
        res.status(500).json({ error: 'Erro ao atualizar o usuário' });
    };
});

// Deleção de Usuário
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const user = await User.findOne({ _id: id });

    if (!user) {
        res.status(422).json({ message: 'O usuário não foi encontrado' });
        return
    };

    try {
        await User.deleteOne({ _id: id });
        res.status(200).json({ message: `Usuário ${user.name} deletado com sucesso` });
    } catch {
        res.status(500).json({ error: 'Erro ao deletar o usuário' });
    };
});

module.exports = router;