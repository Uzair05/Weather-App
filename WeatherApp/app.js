var express = require('express');
const https = require('https');
var $ = require('jquery');
var app = express();


app.use(express.static('public'), function(req, res, next) {
  next();
})
app.get('/', function(req, res) {
  res.sendFile('/index.html');
});



app.post('/Weather', express.urlencoded({
  extended: true
}), function(req, res) {
  /*Get Data and return json array*/
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;

  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      //console.log(JSON.parse(data).explanation);
      res.send(JSON.parse(data).hdurl);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

  //res.send("latitude = " + latitude +"; longitude = " + longitude);

});



var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
