const express = require('express'); 
const app = express(); 


app.get("/", function(req, res) {
    res.send("Welcome to the Homepage")
});

app.get("/place/:country/:city", function(req, res) {
    const countryparam = req.params.country;
    const cityparam = req.params.city;
    console.log(req.params)
    res.send(cityparam.charAt(0).toUpperCase() + cityparam.slice(1) + " is a city in " + countryparam.charAt(0).toUpperCase() + countryparam.slice(1))
 });

 app.get("/multiply/:word/:times", function(req, res) {
    var wordparam = req.params.word;
    var timesparam = req.params.times;
    var words = "";
    console.log(req.params)
    for(var i = 0; i < timesparam; i++){
        words += wordparam + " "
    }
    res.send(words)
    
});

app.get("*", function(req, res) {
    res.send("Page not found")
})

app.listen(3000, function() {
    console.log("Server listening on port 3000 for incoming requests")
});