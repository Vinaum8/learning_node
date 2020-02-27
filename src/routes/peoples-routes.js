'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/peoples-controller');
const authService = require('../services/auth-service');

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Advapp Node.js API",
        version: "0.0.2"
    });
});
router.post('/', authorize.authorize,controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;