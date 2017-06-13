var express = require("express")
var app = express ()
app.use(express.static("static"))
app.listen(2017, function(err){
    console.log("my server app is running on port 2017")
});
