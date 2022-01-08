const express = require('express')
const app = express()
const mongoose = require('mongoose')
const peopleController = require('./controllers/peoples')

const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const {PORT, DATABASE_URL} = process.env

mongoose.connect(DATABASE_URL)
mongoose.connection
    .on("open", () => console.log("You are connected to MongoDB"))
    .on("close", () => console.log("You are disconnected from MongoDB"))
    .on("error", (error) => console.log(error))

app.use(cors()) // prevents cors erros, open access to all origins
app.use(morgan('dev'))// logging
app.use(express.json()) // parse json bodies

app.use('/', peopleController)



app.listen(PORT, () => console.log(`listening on ${PORT}`))