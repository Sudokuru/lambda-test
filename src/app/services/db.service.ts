// connect to database
const db = require("../models");

console.log(db.url);

var connectedToDB = false;

async function connectToDB() {
    if (connectedToDB) {
        return;
    }
    db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
        connectedToDB = true;
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
}

const BookModel = require("../models/bookmodel");

// Upload book to database
async function upload(book) {
    try {
        await connectToDB();
        let res = await BookModel.create({title: book.title, description: book.description, published: book.published});
        return res;
    } catch (err) {
        console.log(err);
    }
}

// Get all books with description selecting the title field
async function query(description: string) {
    try {
        await connectToDB();
        // await means that this async function won't return until it finishes
        let res = await BookModel.find({description: description}, "title");
        return res;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {upload, query};