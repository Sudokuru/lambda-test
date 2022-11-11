// connect to database
const db = require("../models");

console.log(db.url);

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// Create an instance of tutorial
const BookModel = require("../models/bookmodel");
BookModel.create({ title: "The Hunger Games", description: "Dystopian", published: true}, function (err, tutorial) {
    if (err) return; //handleError(err);
    // saved!
});

// Find all books with description: "Dystopian" selecting the title field
/*BookModel.find({ description: "Dystopian" }, "title", (err, books) => {
    if (err) return;
    console.log(books);
});*/

async function create(book) {
    BookModel.create({ title: book.title, description: book.description, published: book.published}, function (err, book) {
        if (err) return; //handleError(err);
        // saved!
    });
}

// Get all books with description selecting the title field
async function query(description: string) {
    try {
        // await means that this async function won't return until it finishes
        let res = await BookModel.find({description: description}, "title");
        return res;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {create, query};