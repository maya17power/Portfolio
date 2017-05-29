//jQuery code

$(document).ready(function(){
  $("#qButton").on("click", function(){
    console.log("Quote button clicked, running command...");
      $.getJSON("scripts/quotes.json", function(json){
        $("#quotes").html(JSON.stringify(html));
        var html = "";
        json.forEach(function(val){ //test JSON file with this init code.
          var key = Object.keys(val);
          return val;
        });
      });
  });


});
