// Environment setup
const express = require('express')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 4000;


const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/build')))
app.set('port', process.env.PORT || 4000);


// Render react components server side
app.get('/', (req, res) => res.render('index.html')) 

// Backend calls
app.get('/api', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
