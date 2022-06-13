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

//connect to mongoDB
connectDB();

mongoose.connection.once('open', () => {
    console.log('Connected To DB'
    
    )})
api.listen(PORT, () => console.log("Made It"))





api.get('/', (req,res) =>{
    res.send('Welcome to the page')
})


api.get('/getTournamentsLatest',  async (req,res) => {
    const tournaments = await Tournament.find();
    res.send(tournaments)
})
