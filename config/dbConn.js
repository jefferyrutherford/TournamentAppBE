const mongoose = require('mongoose');
const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://192.168.1.48:2717/tournamentApp', ()=>{
            console.log("connected to DB")
        });

    }catch (error){
        console.log(error)
    }
}
module.exports = connectDB;