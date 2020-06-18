/* eslint-disable @typescript-eslint/no-var-requires */
var starWarsJSON = require('../characters.json')


//Access characters.json file
var characters = starWarsJSON.characters;


//Export all routes to index.js file in main directory

// Home Route
exports.home = function(req,res) {
    res.render('home', {
    title : "Star Wars",
    characters: characters,
    }); 

  };
  
  // Character route
  exports.character = function (req, res) {   
    res.render('characters', {
      title : "Star Wars Character",
      characters: characters,
    
    })

  }

  
 // Categories route
  exports.categories = function (req, res) {
    var characters = starWarsJSON.characters;
    res.render('categories', {
    title : "Star Wars categories",
    characters: characters,
  })
}
  
 // Search route
  exports.search =  function (req, res) {
  console.log(req.query.keyword)
  res.render('search', {
  title : "Star Wars Free Search",
  })
  


}