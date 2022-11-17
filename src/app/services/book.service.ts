const dbb = require('./db.service');

// Create a book
async function Create(book) {
    const result = await dbb.upload(book);
    return result;
}

// Gets all books with title, description, and published value.
async function Search(title: string, description: string, published: boolean) {

    // we only want to add values to our filter if they are provided to us
    // by the request (aka not null values)
    // If this was our actual backend service I would break it out into another function.
    const filterValues = [];
    if (title != null){
        filterValues.push({title: title});
    }
    if (description != null){
        filterValues.push({description: description});
    }
    if (published != null){
        filterValues.push({published: published});
    }
    if (title == null && description == null && published == null){
        filterValues.push({});
    }

    const result = await dbb.queryAND(filterValues);
    return result;
}

function adder(a: number, b: number):number {
    return a + b;
}

function multiplier(a: number, b: number):number {
    let result:number = 0;
    for (let i:number = 0; i < b; i++) {
        result = module.exports.adder(result, a);
    }
    return result;
}

function callSomething(something) {
    something();
    return;
}

module.exports = {create: Create, search: Search, adder, callSomething, multiplier};