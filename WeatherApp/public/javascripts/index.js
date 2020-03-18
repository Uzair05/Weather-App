function setCss(isDay) {
  if (isDay) {
    $("body").css({
      "background-image": "url(./images/CloudySky-Day.jpg)"
    });
  } else {
    $("body").css({
      "background-image": "url(./images/ClearSky-Night.jpg)"
    });
  }
  $("body").css({
    "color": "white",
    "background-repeat": "no-repeat",
    "text-shadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
  });
}

$(document).ready(() => {
  setCss(true);
  //setFunction to measure time and toggle

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      $.post('Weather', {
          "latitude": latitude,
          "longitude": longitude
        },
        function(data, status) {

          const datax = JSON.parse(data);

          var image = $("<img></img>").attr({
            "src": datax.icon,
            "alt": "Weather LOGO",
            "class": "WeatherICON"
          });
          var name = $("<h2></h2>").attr("Class", "WeatherName");
          name.html(datax.name);
          var mosum = $("<h3></h3>").attr("class", "WeatherDescription");
          mosum.html(datax.weather);
          var description = $("<p></p>").attr("class", "WeatherDescription");
          description.html(datax.description);

          $("#root").append(image, name, mosum, description);

        });

      $.post('WeatherForecast', {
        "latitude": latitude,
        "longitude": longitude
      }, function(data, status) {
        if (data === "error") {
          alert("Error: code 200 not found");
        } else {
          var data = JSON.parse(data);
          console.log(data);

          var sunrise = new Date((data.sunrise*1000) + (data.timezone*1000));

          //var sunrise = (new Date()).now(data.sunrise);
          var sunset = new Date((data.sunset*1000));
          console.log("Sunrise : " + sunrise);
          console.log("Sunset : " + sunset);







          //Go Nuts



        }
      })


    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});
