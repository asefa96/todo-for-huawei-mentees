const express = require('express');
const todo = require('./routes/todo');

const router = express.Router();
router.use('/todo', todo);

module.exports = router;
