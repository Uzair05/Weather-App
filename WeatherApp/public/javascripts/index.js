




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

         /*
           p = document.createElement("IMG");
           p.setAttribute('src',data);
           x.appendChild(p);
         */

         x.innerHTML = data;
       });

    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
