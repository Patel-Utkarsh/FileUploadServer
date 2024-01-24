const mongoose = require("mongoose");
const fileSchema = mongoose.Schema({
    fileName : {
        type : String
    },
})

module.exports = mongoose.model('Files',fileSchema);