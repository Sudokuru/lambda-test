const book = require('../services/book.service');

async function search(req, res, next) {
    try {
        res.json(await book.search(req.query.description));
    } catch(err) {
        console.log(err);
    }
}

module.exports = {search};