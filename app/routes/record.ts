const express = require("express");

// recordRoutes controls requests starting with /record
const recordRoutes = express.Router();

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

//

// Create an instance of tutorial
const BookModel = require("../models/bookmodel");
BookModel.create({ title: "The Hunger Games", description: "Dystopian novel", published: true}, function (err, tutorial) {
    if (err) return; //handleError(err);
    // saved!
});

module.exports = recordRoutes;