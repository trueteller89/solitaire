const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});


app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/fake', (req, res) => {
  res.send('fake route tested')
});

app.get('/topplayers', (req, res) => {
  res.send([{
    name:'Ivan S',
    points: 100
  },   {
    name:'Jake M',
    points:20
  }, {
    name:'Megan R', 
    points:50
  }])
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.get('*', function(req, res){
	res.status(404).render('404.hbs', {});
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

module.exports.app = app;