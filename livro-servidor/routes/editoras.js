const express = require('express');
const router = express.Router();
const controleEditoras = require('../modelo/editora-dao');


router.get('/', async (req, res) => {
    try {
        const editoras = await controleEditoras.getEditoras();
        res.json(editoras);
    } catch (error) {
        res.status(500).json({mensagem: 'Falha ao Listar Editoras.'});
    }
});

router.post('/', async (req, res)=>{
    try {
        const editora = req.body;
        await controleEditoras.incluir(editora);
        res.json({mensagem: "Editora Cadastrada!"});
    } catch (error) {
        res.status(500).json({mensagem: 'Falha ao Cadastrar Editoras.'});
    }
});

module.exports = router;