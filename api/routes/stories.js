const path = require('path');
const app = require('express').Router();


const firebase = require('../../models/init');
// var db = firebase.firestore();
// var storage = firebase.storage();


app.post('/all', (req, res) => {
    // placeholders = '/placeholders/wide.jpg';
    // placeholderRef = storage.ref(placeholders);

    // placeholderRef.getDownloadURL().then( function (url) {
    //     console.log(url);
    // });
    res.send('ok');
});

module.exports = app;