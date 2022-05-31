const express = require('express');
const http = require("http")
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const roomID = req.query.id;
    res.render('index', { roomID });
});
setInterval(function () {
    http.get("http://draw.huuhieu.name.vn/");
  }, 3000); // every 5 minutes (300000)
module.exports = app;
