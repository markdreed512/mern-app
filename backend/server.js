const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./user.model')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/myDB')

app.post('/api/login', async (req, res) => {
    console.log(req.body)
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })
        if(user){
            const token = jwt.sign({
                username: user.username
            }, 'secretKey1234')
            console.log("this user exists")
            return res.json({ status: 'ok', user: token })
        }
        else{
            console.log("couldn't find user")
            return res.json({ status: 'error', user: false })
        }

    
})

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        await User.create({
            username: req.body.username,
            password: req.body.password
        })
        res.json({ status: 'OK' })
    }
    catch(err){
        console.log("in catch error: " + err)
        res.json({ status: "error", error: 'Something went wrong'})
    }
})

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