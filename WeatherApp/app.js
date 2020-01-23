var express  = require('express');
var $ = require('jquery');
var app = express();


app.use(express.static('public'), function(req,res,next){
    next();
})

app.get('/', function(req, res){
  res.sendFile('/index.html');
  //res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/Weather',function(req,res){
  /*Get Data and return json array*/
  var lat = req.lat;
  var lon = req.lon;
  $.get("api.openweathermap.org/data/2.5/forecast",{"lat":lat,"lon":lon,"appid":"19f1ddafa650b3f34257f321c65d883f"},function(data,status){
    res.send(parseData(data));
  });
});

function parseData(data){
  var temp;

  var mood0 = data.list;
  var mood1 = [];
  for(var i=1;i<40;i++){
    if(i%12==0){
      mood1.push(mood0[i]);
    }
  }

  temp = {"city":data.city.name,"forecast":mood}
  return temp;
}

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
