const mongoose = require("mongoose")
const vegetableSchema = mongoose.Schema({
    vegetables_name:{
        type: String,
        minLength: 3,
        maxLength: 10
    },
    color: String,
    weight: {
        type:Number,
        min:1,
        max:250
    }
})
module.exports = mongoose.model("Vegetables",
    vegetableSchema)