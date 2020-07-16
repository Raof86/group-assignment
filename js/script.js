

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // document.getElementById("navbar-container").style.opacity = 1;
    document.getElementById("navbar-container").style.top = "0px";
  } else {
    // document.getElementById("navbar-container").style.opacity = 0.1;
    document.getElementById("navbar-container").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}



//Funktoiner för att ändra bilder på index.html vid mouseover/mouseout

function setMHImage1(){
  document.getElementById("mainHeadLeftPic").src="images/mainheadleft-placeholder1.bmp";
}

function setMHImage2(){
  document.getElementById("mainHeadLeftPic").src="images/mainheadleft-placeholder2.bmp";
}

function setMHImage3(){
  document.getElementById("mainHeadLeftPic").src="images/mainheadleft-placeholder3.bmp";
}

function setMHImage4(){
  document.getElementById("mainHeadLeftPic").src="images/mainheadleft-placeholder4.bmp";
}

function setMHImage5(){
  document.getElementById("mainHeadLeftPic").src="images/mainheadleft-placeholder5.bmp";
}

function setMHInitialImage(){

  document.getElementById("mainHeadLeftPic").src="images/mainheadleft-placeholder1.bmp";

}



//Script för reklamslides
var slideIndex = 0;
slideShow();

function slideShow() {  
  setTimeout(slideShow, 2000);
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

