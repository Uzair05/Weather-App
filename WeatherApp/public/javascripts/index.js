var x = document.getElementById("demo");




function learnt(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
       var latitude = position.coords.latitude;
       var longitude = position.coords.longitude;


             /*

             Enter Codes To get API reponse here.

              */

       x.innerHTML = "latitude =" + latitude +"; " + "longitude = "  + longitude;

    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
