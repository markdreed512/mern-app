const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost:27017/myDB'

mongoose.connect(dbURI, {useNewUrlParser:true})

const db = mongoose.connection

db.on("error", (err) => {
    console.log("dude there was an error: " + err)
})
db.on('connected', (err, res) => {
    console.log('connected to database dude.')
})

const Schema = mongoose.Schema

var TodoSchema = new Schema({
    done: Boolean,
    text: String
})

const TodoModel = mongoose.model('TodoModel', TodoSchema)
