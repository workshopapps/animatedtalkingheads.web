const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// added required to be true for user_id collection here
const speakerSchema = new Schema({
    file_path: {
        type: String,
        required: true
    },
    podcast_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast',
        required: true
    },

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
 
})

module.exports = mongoose.model('Speaker', speakerSchema);
