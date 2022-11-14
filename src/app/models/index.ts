const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose: undefined,
    url: undefined,
    books: undefined
};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.books = require("./bookmodel")(mongoose);

module.exports = db;