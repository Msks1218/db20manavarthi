const mongoose = require("mongoose")
const vegetableSchema = mongoose.Schema({
    vegetables_name: String,
    color: String,
    weight: Number
})
module.exports = mongoose.model("Vegetables",
    vegetableSchema)