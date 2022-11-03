const express = require("express");

// recordRoutes controls requests starting with /books
const booksRoute = express.Router();

const booksController = require('../controllers/books.controller');

/*app.get('/record/books', (req, res) => {
    res.send({ application: 'title: ' + req.query.titles });
});*/

module.exports = booksRoute