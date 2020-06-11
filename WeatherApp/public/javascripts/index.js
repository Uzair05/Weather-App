function setCss() {
  var d = new Date();
  var n = d.getHours();

  var isDay = (n)=>{
    if (n>=18){
      return false;
    }else if (n<7) {
      return false;
    }else {
      return true;
    }
  }

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
  setCss();

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


          var arrayDiv = $("<div></div").attr({
            'class':'WeatherName_Array_List',
            'id':'WeatherName_Array_List'
          });

          var list = data.list;

          for(var i=0; i<12; i++){ //12 boxes held on screen
            var item = list[i];
            var listItem = $("<div></div>").attr({
              'class':'WeatherName_Array_Item'
            });

            var image = $("<img></img>").attr({
              "src": item.icon,
              "alt": "Weather LOGO",
              "class": "WeatherName_Array_ICON"
            });
            var name = $("<h2></h2>").attr("Class", "WeatherName");
            name.html(item.name);
            var mosum = $("<h3></h3>").attr("class", "WeatherDescription");
            mosum.html(item.weather);
            var description = $("<p></p>").attr("class", "WeatherName_Array_Dscpt");
            description.html(item.description);

            var temp = $("<p></p>").attr({'class':'temp'}).html((item.temp-273.15).toFixed(2) + ' &#176C');
            var wind = $("<p></p>").attr({'class':'wind'}).html(item.wind + 'm/s');
            var humid = $("<p></p>").attr({'class':'humid'}).html(item.humidity);

            listItem.append(image,name,mosum,description,temp,humid,wind);
            arrayDiv.append(listItem);
          };

          $("#root2").append(arrayDiv);



        }
      })


    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});
