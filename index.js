const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    return res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})