const mongoose = require('mongoose')

const Todo = new mongoose.Schema(
    {
        text: { type: String, required: true},
        done: { type: Boolean, required: true},
        id: { type: Number, required: true, unique: true },
        date: { type: String, required: true},
        owner: { type: String, required: true}
    }, 
    { collection: 'todos' }
)

const model = mongoose.model('todos', Todo)

module.exports = model