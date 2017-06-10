$(document).ready(function(){
  //declare global variables.
  var author;
  var authorImage;
  var quote;

  json();//call function to load variables and display quote when page is loaded.

  //get json data.
  function json (){
    $.getJSON("scripts/quotes.json", function(json){ //https://codepen.io/maya17power/pen/gWNbmR.js

      var rN = Math.floor(Math.random() * (json.length)); //random Number for author & image.
      var rQ = Math.floor(Math.random() * (json[rN].quote.length - 1) + 1); //random Number for Quote.

      //initialize variables with random key's and values from json file.
      author = json[rN].altText;
      authorImage = json[rN].imageLink;
      quote = json[rN].quote[rQ];

      //pre load quote machine with random quote.
      $("#author").html("<p>" + author + " </p>");
      $("#images").html("<image src='" + authorImage + "' " + " alt=' " + author + " ' class='image'>");
      $("#quote").html("<p> " + quote + " </p>");
    });

    $("#qButton").on("click", function(){
      json(); //call the random function and updated variables.
    });

    //load new window, apply current quote, author and hashtag to tweeter. Tweeter acct required.
    $("#tweet").on("click", function(){
    var url = "https://twitter.com/intent/tweet";
    var hashtag = encodeURIComponent(" #quotes"); //encode characters like "#".
    var text = "'" + quote + "' " + author + hashtag;
    window.open(url + "?text=" + text + ";hashtag=" + hashtag);
    });
  }
});//end
