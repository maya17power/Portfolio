var la;
var long;
var rGeo = "https://maps.googleapis.com/maps/api/geocode/json";
var rGeoApiKey = "AIzaSyCJ6b-AiApzV19TmMhkTWFWXqNBUlfHy48";
var url = "http://api.openweathermap.org/data/2.5/weather?";
var unitCel = "metric:Celsius";
var unitFah = "Imperial:Fahrenheit"
var apiKey = "d14a0fc3e2e57bd88fad64796008e203";
var iconUrl = "http://openweathermap.org/img/w/";//using png file extension
var currentUnit = false;
$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position);
  };
});

function position(p)
{
  la = p.coords.latitude;
  long = p.coords.longitude;
  $.getJSON(rGeo + "?latlng="+la+","+long+"&key="+rGeoApiKey,cityState);
}

function cityState(location)
{
  var city = location.results[0].address_components[2].short_name;
  var state = location.results[0].address_components[4].short_name;
  weather(city, state);
}

function weather(city, state)
{
  $.getJSON(url+"lat="+la+"&lon="+long+"&unit="+unitFah+"&appid="+apiKey,function(w)
  {
    var temp = w.main.temp;//in kelvin's
    var cel = Math.round(temp +(-273.15));//&#8451 or &#x2103
    var fah = Math.round(cel * 1.8 + 32) + '&#8457';//&#8457 or &#x2109
    var currentTemp = fah ;

    var skyDetails = w.weather[0].description.replace(/(^|\s)[a-z]/g,function(val){return val.toUpperCase();});
    var icon = w.weather[0].icon+".png";
    var windSpeed = w.wind.speed+" knt";

    document.getElementById("temp").innerHTML = "<p>"+ currentTemp + "</p> <button type = 'button' id='button'>&#8451</button>";
    document.getElementById("cityState").innerHTML = "<p>" + city + " , " + state;
    document.getElementById("weatherIcon").innerHTML = "<img src="+iconUrl+icon+">";
    document.getElementById("skyDetails").innerHTML = "<p>" + skyDetails + "</p>";
    document.getElementById("windSpeed").innerHTML = "<p>" + windSpeed + "</p>";
    document.getElementById("button").addEventListener('click',unitChange, false);
  });

}
