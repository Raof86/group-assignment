/* slider i politics sidan */

startAutoSlidex();
var myVarx;

function startAutoSlidex(){
  myVarx = setInterval(function(){ plusSlidesx(1); }, 5000);
}

var mySlideIndex = 1;
myShowSlides(mySlideIndex);

function plusSlidesx(n){
  myShowSlides(mySlideIndex += n);
}
function myCurrentSlide(n){
  myShowSlides(mySlideIndex = n);
}
function myShowSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if(n > slides.length){
    mySlideIndex = 1;
  }
  if(n < 1){
    mySlideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[mySlideIndex - 1].style.display = "block";
}