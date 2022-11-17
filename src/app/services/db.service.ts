// connect to database
import {CustomError, CustomErrorEnum} from "../models/errormodel";

const database = require("../models");

console.log(database.url);

var connectedToDB = false;

async function connectToDB() {
    if (connectedToDB) {
        return;
    }
    try {
        await database.mongoose
            .connect(database.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                console.log("Connected to the database!");
                connectedToDB = true;
            });
    } catch(err){
        throw new CustomError(CustomErrorEnum.DATABASE_IS_DOWN, 500);
    }
}

const BookModel = require("../models/bookmodel");

// Upload book to database
async function upload(book) {
    await module.exports.connectToDB();
    try{
        let res = await BookModel.create({title: book.title, description: book.description, published: book.published});
        return res;
    } catch(err){
        console.log(err)
        throw new CustomError(CustomErrorEnum.DATABASE_REQUEST_REJECTED, 500);
    }
}

// Gets all books with all filter values
async function queryAND(filterValues) {
    let res;
    await module.exports.connectToDB();
    try{
        // await means that this async function won't return until it finishes
        res = await BookModel.find({ $and : filterValues });
    } catch (err){
        console.log(err);
        throw new CustomError(CustomErrorEnum.DATABASE_REQUEST_REJECTED, 500);
    }
    if (res.length == 0){
        throw new CustomError(CustomErrorEnum.BOOK_NOT_FOUND, 404);
    }
    return res;
}

//Gets all books with any filter values
async function queryOR(filterValues) {
    await module.exports.connectToDB();
    try{
        // await means that this async function won't return until it finishes
        let res = await BookModel.find({ $or : filterValues });
        return res;
    } catch(err){
        throw new CustomError(CustomErrorEnum.DATABASE_REQUEST_REJECTED, 500);
    }
}

module.exports = {connectToDB, upload, queryAND: queryAND};