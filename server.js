//importion de modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const DB = process.env.DB
const PORT = process.env.PORT || 5000;

const app = express()



app.use(express())
app.use (express.json())
app.use('/user',require('./routes/userRoutes'))

mongoose
    .connect(DB)
    .then(() => {
        console.log('db connected')

        app.listen(PORT, () => {
            console.log(`your server is  running on port : ${PORT}`);
        })
    })
    .catch(() => {
        console.log('your server is  running on port :)')
    })