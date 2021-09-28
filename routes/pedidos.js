const express = require('express');
const router = express.Router();

// Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Retorna os pedidos"
    });
});

// Insere um pedido
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "O pedido foi criado"
    });
});

// Retorna o pedido conforme parametro
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    res.status(200).send({
        mensagem: "Detalhes do pedido",
        id_pedido: id
    });
});


// Deleta um pedido
router.delete('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(201).send({
        mensagem: "O pedido foi excluido"
    });
});

module.exports = router;