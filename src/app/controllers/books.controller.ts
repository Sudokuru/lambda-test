const bookService = require('../services/book.service');
const Book = require('../models/bookmodel')

// validates input and creates book object, sends book object to create function
async function create(req, res, next) {
    try {
        const newBook = new Book({
            title: req.body.title,
            description: req.body.description,
            published: req.body.published
        });

        res.json(await bookService.create(newBook));
    } catch(err) {
        next(err);
        console.log(err);
    }
}

// validates input and creates
async function search(req, res, next) {
    try {
        res.json(await bookService.search(req.query.title, req.query.description, req.query.published));
    } catch(err) {
        next(err);
        console.log(err);
    }
}

module.exports = {create, search};