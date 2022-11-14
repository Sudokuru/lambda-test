const express = require("express");

// recordRoutes controls requests starting with /books
const booksRoute = express.Router();

const booksController = require('../controllers/books.controller');

/* POST create book */
booksRoute.post('/create', booksController.create);

/* GET search books */
booksRoute.get('/search', booksController.search);

module.exports = booksRoute;