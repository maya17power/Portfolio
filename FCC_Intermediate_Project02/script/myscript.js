var lat;
var long;
var rGeo;
var openWeather;
var tempUnit = true;
var https = "https://cors-anywhere.herokuapp.com/";
$().ready(function(){
  $("#location, #temp, #tempIcon,#description, #windSpeed").html("<i class='fa fa-spinner fa-spin'></i>");
  process();
});

function process(){
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(val){
      lat = val.coords.latitude;
      long = val.coords.longitude;
      rGeo = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+ lat + "," + long + "&key=AIzaSyCJ6b-AiApzV19TmMhkTWFWXqNBUlfHy48";
      openWeather = https + "http://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon="+ long+"&unit=metric&appid=d14a0fc3e2e57bd88fad64796008e203";;

       cityState();
    });
  }
}

function cityState(){
  $.getJSON(rGeo,function(position){
    var location = position.results[3].address_components[1].short_name + ", " + position.results[3].address_components[3].short_name;
    $("#location").html("<p>" + location + "</p>");
  $.getJSON(openWeather,weather);
  });
}

function weather(w){
  console.log(w)
  var kelvin = w.main.temp;
  var temp;

  if(tempUnit == false){
    temp = Math.round(kelvin - 273.15) + "&#8451;";
    $("#unitLabel").html("&#8451;");
  }else if(tempUnit == true){
    temp = Math.round(kelvin * (9/5) - 459.67) + "&#8457;";
    $("#unitLabel").html("&#8457;");
    console.log(temp);
           }
  var description = w.weather[0].description.replace(/(^|\s)[a-z]/g,function(val){return val.toUpperCase();});
  var windSpeed = w.wind.speed;
  var icon = "http://openweathermap.org/img/w/" + w.weather[0].icon + ".png";
  $("#temp").html("<p>Temperature " + temp + "</p>");
  $("#tempIcon").html("<img src=" + icon + "></img>");
  $("#description").html("<p>" + description + "</p>");
  $("#windSpeed").html("<p>Windspeed " + windSpeed + " knt</p>");

}
