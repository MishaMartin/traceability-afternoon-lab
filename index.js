const express = require('express')
const path = require('path')
const Rollbar =require('rollbar')

let rollbar = new Rollbar({
    accessToken: '',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

app.get('/style', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/styles.css'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}`))