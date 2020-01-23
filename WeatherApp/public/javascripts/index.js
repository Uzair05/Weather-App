var latitude;
var longitude;

//var x = document.getElementById("demo");

function initLocation(){
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
}

function showPosition(position) {
  initLocation();
  $.post("/Weather",{"lat":latitude,"lon":longitude},function(data,status){

    x = document.getElementById("demo").innerHTML = data;

    /*Receives Forecast for 1pm each day
    {
      day:---
      temp:---
      fore: (sunny/cloudy/rainy/fog)
    }
    */
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition());
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

$.(document).ready(getLocation());
