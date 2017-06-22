var la;
var long;
var url = "http://api.openweathermap.org/data/2.5/weather?";
var unit = "metric";
var apiKey = "d14a0fc3e2e57bd88fad64796008e203";

$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position);
  };

});

function position(p){
  la = p.coords.latitude;
  long = p.coords.longitude;
  $("#data").html("latitude: " + la + "<br>longitude: " + long);
  weather();
}

function weather(){
  $.getJSON(url+"lat="+la+"&lon="+long+"&unit="+unit+"&appid="+apiKey,function(w){
    var skyDetails = w.weather[0].description;
    console.log(w.weather[0]);




  });

}
