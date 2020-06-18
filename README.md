# Overview

Star Wars API is organised around REST, designed and develop with ExpressJS & Node

- Its reetrieve a random character from a given category in the JSON file.
- Its retrieve a list of available categories in the JSON file 
- It does a free text search.


## Prerequisite
- Download and install node on your PC/Laptop

## Test endpoints
- clone the repo
- cd in star-wars-sever
- npm install express --save
- npm install ejs --save
- node i nodemon --save
- npm install express body-parser --save
- npm install supertest mocha --save-dev
Start the server
- npm start
Test Endponts
- npm test

## Check endpoint
- Go to brower and enter any endpoints and press enter key button
- http://localhost:3000 -home
- http://localhost:3000/characters -character endpoint
- http://localhost:3000/categories -categories endpoint
- http://localhost:3000/search?keyword=LukeSkywalker  -search endpoint 
  
  Note: search?keyword=name will display result of search in the command line terminal.

## Test

## Postman API Setup

  - Go to postman official website and download app
  - Postman chrome extension is available on chrome web store
  - Go to google and do a search Add postman chrome extension


## Postman Test Endpoint
- Open postman
- Copy and paste endpoint
- Change request to GET
- Query params Key = Keyword Value = same as name enter in keyword search
  


 ## Folder Struture

  Star-wars-server
       |
    Public
       |
    Routes-index.js
       |
    Views-Categories.ejs-Characters.ejs-Home.ejs-Search.ejs
      |
    Test
     |
    Character.json
      |
    Index.js(Main)
      |
    Package.json
      |
    Package-lock.json
      |
    README.md


