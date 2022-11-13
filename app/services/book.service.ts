const dbb = require('./db.service');

async function create(book) {
    const result = await dbb.upload(book);
    return result;
}

// Get title of all books with description selecting the title field
async function search(description: string) {
    const result = await dbb.query(description);
    return result;
}

function adder(a: number, b: number):number {
    return a + b;
}

module.exports = {create, search, adder};