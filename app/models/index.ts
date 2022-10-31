const dbConfig = require("../config/db.config.ts");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose: undefined,
    url: undefined,
    tutorials: undefined
};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("../models/model.ts")(mongoose);

module.exports = db;