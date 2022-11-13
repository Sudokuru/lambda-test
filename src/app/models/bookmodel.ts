const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookModelSchema = new Schema({
    title: String,
    description: String,
    published: Boolean,
});

// Export function creates BookModel model
module.exports = mongoose.model("BookModel", BookModelSchema);

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