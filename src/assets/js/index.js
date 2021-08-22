var TEXTS = ["Some other text!", "Lord of the Rings", "Avengers", "Whatever text"];


var index = 0;

$(function() {
  setInterval(function() {
    $('#header-text-change').fadeOut(500, function() {
      $(this).text(TEXTS[index++]).fadeIn(500);
      if (index === TEXTS.length)
        index = 0
    });
  }, 1000);
});



    var myIndex = 0;
    carousel();

    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) { myIndex = 1 }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 3000);
    }
  

