const http = require('http');
const mongoose = require('mongoose')
//const data = require()
const express = require('express')
const connectDB = require('./config/dbConn');
const { connect } = require('http2');

const api = express();
const HOST = 'localhost'
const PORT = 8080
const Tournament = require("./Tournament")
const cors = require('cors')

//connect to mongoDB
connectDB();

mongoose.connection.once('open', () => {
    console.log('Connected To DB'
    
    )})


api.listen(PORT, () => console.log("Server Is Running On localhost:8080"))


api.use(cors())


api.get('/', (req,res) =>{
    console.log('/Hit!!!!')
    res.send('{"ID" : "11",  "message" : "Welcome to the page"}')
})

api.post('/', (req,res) =>{
    console.log('/Post Hit!!!!')
    res.send('Welcome to the page')
})


api.get('/getTournamentsLatest',  async (req,res) => {
    //const tournaments = await Tournament.find();
    res.send('Welcom to latest Tournament Page')
})
