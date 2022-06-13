const mongoose = require("mongoose")
const tournamentSchema = new mongoose.Schema({
    _id: String,
    organizer: String, 
    game:String
    
})

module.exports = mongoose.model("tournaments", tournamentSchema)