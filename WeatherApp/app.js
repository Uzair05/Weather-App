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



app.post('/Weather', express.urlencoded({
  extended: true
}), function(req, res) {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;

  const https = require('https');

  https.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=33f2983a721f872ef3cbaf1619646581', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      var datae = JSON.parse(data);
      const datax = {
        "name": datae.name,
        "weather": datae.weather[0].main,
        "description": datae.weather[0].description,
        "icon": ("http://openweathermap.org/img/wn/" + datae.weather[0].icon + "@2x.png")
      }
      res.send(JSON.stringify(datax));

    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

//

app.post('/WeatherForecast', express.urlencoded({
  extended: true
}), function(req, res) {
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;

  const https = require('https');

  https.get('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=33f2983a721f872ef3cbaf1619646581', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      var datae = JSON.parse(data);
      if (datae.cod == "200") {

        var mojo = [];
        datae.list.forEach((item) => {
          mojo.push({
            "weather": item.weather[0].main,
            "description": item.weather[0].description,
            "icon": ("http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png"),
            "dt_txt": item.dt_txt,
            "temp": item.main.temp,
            "humidity": item.main.humidity,
            "wind": item.wind.speed
          });
        });

        var datax = {
          "country": datae.city.country,
          "city": datae.city.name,
          "sunrise": datae.city.sunrise,
          "sunset": datae.city.sunset,
          "timezone":datae.city.timezone,
          "list": mojo
        }
        res.send(JSON.stringify(datax));
      } else {
        res.send("error");
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
