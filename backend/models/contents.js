const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("contents", contentSchema);
