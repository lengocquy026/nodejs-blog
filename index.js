const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => res.send('Hello, world!'))

app.listen(port, () => console.log(`Listening localhost ${port}`))