// import modules

import express from 'express'
import path from "path"
import { fileURLToPath } from 'url'
import * as dogsDb from "./data/dogs.js"

// Create Express app

const app = express()

// Configure the app (app.set)

app.set("view engine","ejs")
app.set(
    "views",
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)

// Mount Middleware (app.use)



// Mount routes
//localhost:3000
app.get('/', function(req, res){
    res.send('party')
}),

//localhost:3000/home
app.get("/home", function(req,res){
    res.render("home")
})

//localhost:3000/dogs
app.get("/dogs", function(req, res){
    dogsDb.find({}, function(error, dogs){
        res.render("dogs/index",{
            dogs: dogs,
            error: error,
        })
    })
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})