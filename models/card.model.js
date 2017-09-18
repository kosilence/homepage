var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// String Number Date Buffer Boolean Mixed ObjectId Array

var CardSchema = new Schema({
    title: { type: String },
    account: { type: String },
    homepage: { type: String },
    thumbnail: { type: String },
    photo: { type: String }
}, { timestamps: { createdAt: 'created_at' } });

CardSchema.index({ title: 1 }, {unique: true}); // schema level
// NOTE: methods must be added to the schema before compiling it with mongoose.model()

mongoose.model('Card', CardSchema);
