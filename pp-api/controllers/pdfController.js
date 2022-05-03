const pdf = require('html-pdf');
const router = require('express').Router();

// geração de pdf
router.post('/', async (req, res) => {
    const { content } = req.body;

    if (!content) {
        res.status(422).json({ msg: 'O conteúdo não foi encontrado' });
        return
    };

    await pdf.create(content, {}).toFile('./pdf-files/user.pdf', (err) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao gerar arquivo PDF' });
            return
        } else {
            res.status(200).json({ msg: 'Arquivo PDF gerado com sucesso.' });
        };
    });
});

module.exports = router;