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

          const datax = JSON.parse(data);
          var image = document.createElement("img");
          image.setAttribute("src", datax.icon);
          image.setAttribute("alt", "Weather LOGO");
          imgae.setAttribute("class", "WeatherICON")
          x.appendChild(image);

          var name = document.createElement("h2");
          name.setAttribute("class", "WeatherName");
          name.innerHTML = datax.name;
          x.appendChild(name);

          var mosum = document.createElement("h3");
          mosum.setAttribute("class", "WeatherDescription");
          mosum.innerHTML = datax.weather;
          x.appendChild(mosum);

          var description = document.createElement("p");
          description.innerHTML = datax.description;
          description.setAttribute("class", "WeatherDescription");
          x.appendChild(description);

        });


      $.post('WeatherForeCast', {
          "latitude": latitude,
          "longitude": longitude
        },
        function(data, status) {
          /*

          Forcast

           */
        });

    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
