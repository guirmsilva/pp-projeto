const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = require('express').Router();
const User = require('../models/User');

// Validação de login
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(422).json({ msg: 'O email é obrigatório' });
    };

    if (!password) {
        return res.status(422).json({ msg: 'A senha é obrigatória' });
    };

    // ver se o usuário existe
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado' });
    };

    // ver se as senhas batem
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
        return res.status(422).json({ msg: 'Senha inválida' });
    };

    try {

        const secret = process.env.SECRET;

        const token = jwt.sign({ id: user._id }, secret, {
            expiresIn: 86400
        });

        res.status(200).json({ msg: 'Autenticação realizada com sucesso', token });

    } catch {
        res.status(500).json({ msg: 'Erro no servidor. Tente novamente mais tarde.' });
    };

});

// Rota Privada
router.get('/:id', checkToken, async (req, res) => {
    const id = req.params.id;

    // ver se o usuário existe
    const user = await User.findById(id, '-password');

    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado' });
    };

    res.status(200).json({ user });
});

function checkToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'Usuário não autenticado' });
    };

    try {
        const secret = process.env.SECRET;

        jwt.verify(token, secret);

        next()
    } catch {
        res.status(400).json({ msg: 'Token inválido' });
    };
};

module.exports = router;