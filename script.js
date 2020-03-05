var index = 1;
var timer;

addEventListener("load",function() {
    showSlides(index);
    timer = setInterval(function(){plusSlides(1)}, 3000);
});

function plusSlides(n){
  clearInterval(timer);
  
  if (n < 0){
    showSlides(index -= 1);
  } else {
   showSlides(index += 1); 
  }

  if (n === -1){
    timer = setInterval(function(){plusSlides(n + 2)}, 3000);
  } else {
    timer = setInterval(function(){plusSlides(n + 1)}, 3000);
  }
}

function currentSlide(n){
  clearInterval(timer);
  timer = setInterval(function(){plusSlides(n + 1)}, 3000);
  showSlides(index = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var bullets = document.getElementsByClassName("dot");

  if (n > slides.length) {
      index = 1
    }

  if (n < 1) {
      index = slides.length
    }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

  for (i = 0; i < bullets.length; i++) {
      bullets[i].className = bullets[i].className.replace(" active", "");
    }

  slides[index-1].style.display = "block";
  bullets[index-1].className += " active";
}