const mongooseMongo = require("mongoose");
const Schema = mongooseMongo.Schema;

const BookModelSchema = new Schema({
    title: String,
    description: String,
    published: Boolean,
});

// Turns on debug mode and auto creates database if none exists
mongooseMongo.set({ debug: true, autoCreate: true})

// Export function creates BookModel model
module.exports = mongooseMongo.model("BookModel", BookModelSchema);

/*module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("tutorial", schema);
};*/