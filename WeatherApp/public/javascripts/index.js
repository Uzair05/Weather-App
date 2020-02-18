function learnt() {
  var x = document.getElementById("demo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      $.post('Weather', {
          "latitude": latitude,
          "longitude": longitude
        },
        function(data, status) {


          /*
           Insert Parseing Code here
          */

          x.innerHTML = data;
        });

    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
