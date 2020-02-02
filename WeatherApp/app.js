const express = require('express');
const https = require('https');
var $ = require('jquery');
var app = express();


app.use(express.static('public'), function(req, res, next) {
  next();
})
app.get('/', function(req, res) {
  res.sendFile('/index.html');
});


/*

  API Key: 33f2983a721f872ef3cbaf1619646581

 */


app.post('/Weather', express.urlencoded({
  extended: true
}), function(req, res) {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;

  https.get('api.openweathermap.org/data/2.5/weather?lat=' & latitude & '&lon=' & longitude & '&appid=33f2983a721f872ef3cbaf1619646581', (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });




    // The whole response has been received. Print out the result.
    resp.on('end', () => {

      (data) => {
        var jData = JSON.parse(data);

        /*
        Insert parsing code here
         */
         console.log(jData);
        //res.send(jData);



      }
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});



var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
