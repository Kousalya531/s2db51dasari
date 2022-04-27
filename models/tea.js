const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ 
    tea_flavour: String,
    tea_size: {type: String, 
        minLength: 1 , maxLength: 2456},
    tea_cost: {
        type:Number, min: 1, max: 231}


}) 
 
module.exports = mongoose.model("Mobile", teaSchema) 