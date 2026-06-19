const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
})

const postModels = mongoose.model("Post", postSchema);

module.exports = postModels;