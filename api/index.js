const express = require('express');
const path = require('path');

const app = express.Router();

// Point get requests to static react files
app.use(express.static(path.join(__dirname, '../client/build')));
const reactBuildPath = path.join(__dirname + '/../client/build/index.html')
app.get('/', (_, res) => { res.sendFile(reactBuildPath); });
app.get('/about', (_, res) => { res.sendFile(reactBuildPath); });
app.get('/stories', (_, res) => { res.sendFile(reactBuildPath); });
app.get('/get-connected', (_, res) => { res.sendFile(reactBuildPath); });
app.get('/course-101', (_, res) => { res.sendFile(reactBuildPath); });

app.use('/api/stories', require('./routes/stories'));

module.exports = app;