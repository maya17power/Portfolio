$(document).ready(function(){
  $("#author").html("<p>Albert Eistein</p>");
  $("#images").html("<image src='https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg' alt='Albert Eistein' class='image'>");
  $("#quote").html("<p>Everything should be made as simple as possible, but not simpler.</p>");
  //jQuery, get JSON data and apply to page accordingly.
  $("#qButton").on("click", function(){
    console.log("Quote button clicked, running command...");
      $.getJSON("scripts/quotes.json", function(json){
        var rN = Math.floor(Math.random() * (json.length));//random Number for author & image
        var rQ = Math.floor(Math.random() * (json[rN].quote.length - 1) + 1);//random Number for Quote
        var author = json[rN].altText;
        var authorImage = json[rN].imageLink;
        var quote = json[rN].quote[rQ];
          $("#author").html("<p>" + author + " </p>");
          $("#images").html("<image src='" + authorImage + "' " + " alt=' " + author + " ' class='image'>");
          $("#quote").html("<p> " + quote + " </p>");
      });
  });


});
