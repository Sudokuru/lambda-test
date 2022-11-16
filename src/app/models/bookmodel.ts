const mongooseMongo = require("mongoose");
const Schema = mongooseMongo.Schema;

const BookModelSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    published: { type: Boolean, required: true },
});

// Turns on debug mode and auto creates database if none exists
mongooseMongo.set({ debug: true, autoCreate: true})

// Export function creates BookModel model
module.exports = mongooseMongo.model("BookModel", BookModelSchema);