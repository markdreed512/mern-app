const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/myDB')

app.post('/api/add', async (req, res) => {
    console.log(req.body)
    try{
        const todo = await Todo.create({
            text: req.body.text,
            done: req.body.done,
            id: req.body.id,
            date: req.body.date
        })
        res.json({status:'ok'})
    } catch{
        res.json({status: 'ErRoR...', error: "Sumpin' went wro0ng..."})
    }
})

const PORT = 8080

app.listen(PORT, () => {
    console.log('running on port ' + PORT)
})