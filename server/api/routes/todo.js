const express = require('express');
const { container } = require('../../di-setup');

const todoController = container.resolve('todoController');

const router = express.Router();

router.get('/', todoController.getTodo);

module.exports = router;
