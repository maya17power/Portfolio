//jQuery code

$(document).ready(function(){
  $("#qButton").on("click", function(){
    console.log("Quote button clicked, running command...");
      $.getJSON("quotes.json", function(json){
          console.log(json);
      });
  });


});
