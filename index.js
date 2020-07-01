// Environment setup
const express = require('express')
const path = require('path')
const port = process.env.PORT || 4000;

const app = express()
app.use(express.static(path.join(__dirname, '/client/build')))
app.set('port', process.env.PORT || 4000);

// Render react components server side
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Backend calls
app.get('/api', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
