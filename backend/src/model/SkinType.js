const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const skincolorSchema = new Schema({
    color: {
        type: String,
        required: true
    },
      type: {
        type: String,
        required: true
    },
      style: {
        type: String,
        required: true
    },
    file_path: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Skincolor', skincolorSchema);
