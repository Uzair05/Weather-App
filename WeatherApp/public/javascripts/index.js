function learnt() {
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

          var image = $("<img></img>").attr({"src":datax.icon, "alt":"Weather LOGO", "class":"WeatherICON"});
          var name = $("<h2></h2>").attr("Class","WeatherName");
          name.html(datax.name);
          var mosum = $("<h3></h3>").attr("class", "WeatherDescription");
          mosum.html(datax.weather);
          var description = $("<p></p>").attr("class", "WeatherDescription");
          description.html(datax.description);

          $("#demo").append(image,name,mosum,description);

        });

        $.post('WeatherForecast',{
            "latitude": latitude,
            "longitude": longitude
          },function(data,status){
            if (data === "error"){
              alert("Error: code 200 not found");
            }else{
              alert("Code: 200 found");
              console.log(JSON.parse(data));



              //Go Nuts



            }
          })


    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
