const express = require('express');
const router = express.Router();

// Retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Retorna os produtos"
    });
});

// Insere um produtos
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "O produto foi criado"
    });
});

// Retorna o produto conforme parametro
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(200).send({
        mensagem: "Detalhes do produto",
        id_produto: id
    });
});

// Altera um produto
router.patch('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(201).send({
        mensagem: "Produto alterado"
    });
});

// Deleta um produto
router.delete('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(201).send({
        mensagem: "Produto excluido"
    });
});

module.exports = router;