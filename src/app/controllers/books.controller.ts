const book = require('../services/book.service');

async function create(req, res, next) {
    try {
        res.json(await book.create(req.body.book));
    } catch(err) {
        console.log(err);
    }
}

async function search(req, res, next) {
    try {
        res.json(await book.search(req.query.description));
    } catch(err) {
        console.log(err);
    }
}

module.exports = {create, search};