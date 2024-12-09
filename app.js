const express = require('express')

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())

app.post('/api/user/create',(req,res) => {
    res.send(req.body)
})

// app.post('/api/user/create', (req,res,next) => {
//     req.on('data', (chunk) => {
//         req.body = JSON.parse(chunk)
//         next()
//     })
// }, (req, res) => {
//     res.send(req.body)
// })

app.listen(PORT,() => {
    console.log(`app is running on port ${PORT}`)
})