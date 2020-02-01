var express = require('express');
var $ = require('jquery');
var app = express();


app.use(express.static('public'), function(req, res, next) {
  next();
})
app.get('/', function(req, res) {
  res.sendFile('/index.html');
});



app.post('/Weather', function(req, res) {
  /*Get Data and return json array*/
  var lat = req.lat;
  var lon = req.lon;

  console.log(lat + "; " + lon);

});



var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
