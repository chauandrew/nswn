// Environment setup
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../client/build')))

// Render react components server side
app.get('/', (req, res) => res.render('index.html')) 

// Backend calls
app.get('/api', (req, res) => res.send('Hello World!'))

if (process.env.prod_env == 'PRODUCITON') {
    app.listen(80, () => console.log(`Example app listening at http://localhost:80`))
} else {
    app.listen(4000, () => console.log(`Example app listening at http://localhost:4000`))
}