// connect to database
import {CustomError} from "../models/errormodel";

const database = require("../models");

console.log(database.url);

var connectedToDB = false;

async function connectToDB() {
    if (connectedToDB) {
        return;
    }
    database.mongoose
    .connect(database.url, {
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
        await module.exports.connectToDB();
        let res = await BookModel.create({title: book.title, description: book.description, published: book.published});
        return res;
    } catch (err) {
        console.log(err);
    }
}

// Gets all books with all filter values
async function queryAND(filterValues) {
    try {
        await module.exports.connectToDB();
        // await means that this async function won't return until it finishes
        let res = await BookModel.find({ $and : filterValues });
        if (res.length == 0){
            throw new CustomError("Not Found", 404);
        }
        return res;
    } catch (err) {
        console.log(err);
    }
}

//Gets all books with any filter values
async function queryOR(filterValues) {
    try {
        await module.exports.connectToDB();
        // await means that this async function won't return until it finishes
        let res = await BookModel.find({ $or : filterValues });
        return res;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {connectToDB, upload, queryAND: queryAND};