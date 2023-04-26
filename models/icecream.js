const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
icecream_flavour: String,
icecream_size: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
icecream_cost: {
    type:Number,
    min: 1,
    max: 7000 } 
})
module.exports = mongoose.model("Icecream",
icecreamSchema)