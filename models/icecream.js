const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
icecream_flavour: String,
icecream_size: String,
icecream_cost: Number
})
module.exports = mongoose.model("Icecream",
icecreamSchema)