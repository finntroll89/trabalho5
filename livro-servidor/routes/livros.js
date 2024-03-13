const express = require('express');
const router = express.Router();
const controleLivros = require('../modelo/livro-dao')


router.get('/', async (req, res) => {
    try {
        const livros = await controleLivros.obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ mensagem: 'Falha ao Listar.' });
    }
});


router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await controleLivros.incluir(livro);
        res.json({ mensagem: 'Livro Cadastrado!' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Falha ao cadastrar .' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const codigo = req.params.id;
        await controleLivros.excluir(codigo);
        res.json({ mensagem: ' Excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Falha ao excluir.' });
    }
});

module.exports = router;