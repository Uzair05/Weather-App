var express = require('express');
var $ = require('jquery');
var app = express();


app.use(express.static('public'), function(req, res, next) {
  next();
})
app.get('/', function(req, res) {
  res.sendFile('/index.html');
});



app.post('/Weather',express.urlencoded({extended:true}), function(req, res) {
  /*Get Data and return json array*/
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;

  //console.log();

  res.send("latitude = " + latitude +"; longitude = " + longitude);

});



var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
