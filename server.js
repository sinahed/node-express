
const { response } = require('express');
const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello world");
})

app.get("/contact",function(req, res){
    
    res.send("<p>This is my email You can connect with me</p>");

})

app.get("/about", function(req, res){

    res.send("<h2>Hi</h2>");
})

app.get("/hobbies", function(req, res){

    res.send("my hobbies");
})


app.listen(3000, function(){
    console.log("server started on port 3000");

});