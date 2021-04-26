const express = require('express')
const mongoose = require('mongoose')
const URL = 'mongodb://localhost/AvnersFirstDB'

const app = express();

mongoose.connect(URL, { useNewUrlParser: true })
const connection = mongoose.connection

connection.on('open', () => {
    console.log("Connected...");
})

app.use(express.json())

const mealRouter = require('./routes/meals')
app.use('/meals', mealRouter)


app.listen(8000, () => {
    console.log("server is listening to a localhost in port 8000 ...")
})