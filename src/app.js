const express = require('express');
const path = require('path')
const publicPath = path.resolve(__dirname, "public");


const app = express();
app.use(express.static(publicPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res){
    res.render('home.hbs')
})
const port = process.env.PORT || 4000
console.log(`running on port ${port}`)
app.listen(port);