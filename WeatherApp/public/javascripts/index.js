




function learnt(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
       var latitude = position.coords.latitude;
       var longitude = position.coords.longitude;

       $.post('Weather',
       {
         "latitude":latitude,
         "longitude":longitude
       },
       function(data,status){
         var x = document.getElementById("demo");
         x.innerHTML = data;
       });

    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
