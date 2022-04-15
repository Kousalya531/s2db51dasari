const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ 
    tea_flavour: String,
    tea_size: String,
    tea_cost: Number
}) 
 
module.exports = mongoose.model("Mobile", teaSchema) 