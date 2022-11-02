const dbConfig = require("../config/db.config.ts");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose: undefined,
    url: undefined,
    books: undefined
};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.books = require("../models/bookmodel")(mongoose);

module.exports = db;