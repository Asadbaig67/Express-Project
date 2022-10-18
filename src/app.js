const express = require('express');
const hbs=require('hbs');
const path = require('path');
const app = express();
const port = 3000;

// Getting Paths Of Folder
StaticPath = path.join(__dirname, '../public');
ViewsPath = path.join(__dirname, '../templates/views');
PartialsPath = path.join(__dirname, '../templates/partials');

// Setting The View Engines
app.set('view engine', 'hbs');
app.set('views', ViewsPath);
hbs.registerPartials(PartialsPath);

app.use(express.static(StaticPath));

// Routes 
app.get('', (req, res) => {
    res.render('index')
});
app.get('/weather', (req, res) => {
    res.render('weather')
});
app.get('/about', (req, res) => {
    res.render('index')
});
app.get('*', (req, res) => {
    res.render('404')
});


// Listening Server
app.listen(port, () => {
    console.log('Server Successfully Started At Port', port);
});