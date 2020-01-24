var x = document.getElementById("demo");
var latitude;
var longitude;



function learnt(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      x.innerHTML = "latitude =" + position.coords.latitude +"; " + "longitude = "  + position.coords.longitude;
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
