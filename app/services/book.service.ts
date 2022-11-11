const dbb = require('./db.service');

// Get title of all books with description selecting the title field
async function search(description: string) {
    const result = await dbb.query(description);
    return result;
}

module.exports = {search};