const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const PORT = 8080

app.get('/', (req, res) => {
    res.send("Hi")
})

app.post('/api/add', (req, res) => {
    console.log(req.body)
    res.json({status: 'oK'})
})

app.listen(PORT, () => {
    console.log('running on port ' + PORT)
})