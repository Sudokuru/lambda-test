const express = require("express");

// recordRoutes controls requests starting with /books
const booksRoute = express.Router();

const booksController = require('../controllers/books.controller');

/* POST create book */
booksRoute.post("/", booksController.create);

/* GET search books */
booksRoute.get("/", booksController.search);

module.exports = booksRoute;