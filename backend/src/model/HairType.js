const mongoose = require("mongoose")
const Schema = mongoose.Schema;
//i removed name of hair, coz we already have type of hair
const hairtypeSchema = new Schema({

    style: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    file_path: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Hairtype', hairtypeSchema);
