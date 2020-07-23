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



//Script för reklamslides
var slideIndex = 0;
slideShow();

function slideShow() {  
  setTimeout(slideShow, 6000);
  var i;
  var slides = document.getElementsByClassName("slideImages");
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length){
    slideIndex = 1;
  }
 slides[slideIndex-1].style.display = "block";   
}

// Script for read more button
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less"; 
    moreText.style.display = "inline";
  }
}
