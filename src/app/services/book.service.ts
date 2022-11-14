const dbb = require('./db.service');

async function testCreate(book) {
    const result = await dbb.upload(book);
    return result;
}

// Get title of all books with description selecting the title field
async function testSearch(description: string) {
    const result = await dbb.query(description);
    return result;
}

function adder(a: number, b: number):number {
    return a + b;
}

function callSomething(something) {
    something();
    return;
}

module.exports = {create: testCreate, search: testSearch, adder, callSomething};