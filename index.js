/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const app = express();

//set engine to view
app.set('view engine', 'ejs');

//Access routes file
var routes = require('./routes')

var path = require('path');

//Access the public folder
app.use(express.static(path.join(__dirname, 'public')));

//Access the image folder
app.use("/images",express.static(__dirname + "/images"));

// //Access the image folder
app.use("/css",express.static(__dirname + "/css"));


//This line of code handle the get request of the home endpoint
app.get('/', routes.home);

//This line of code handle the get request of the character endpoint
app.get('/characters', routes.character);


//This line of code handle the get request of the categories endpoint
app.get('/categories', routes.categories);

//This line of code handle the get request of the search endpoint
app.get('/search', routes.search) ;



  app.listen(3000, function() {
      console.log("application running on localhost 3000")
  })


  module.exports = app;