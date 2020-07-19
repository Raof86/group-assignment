

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
  document.getElementById("mainHeadLeftPic").src="https://cdni.rt.com/files/2020.07/article/5f11598a85f5402b3e6b51cc.JPG";
}

function setMHImage2(){
  document.getElementById("mainHeadLeftPic").src="https://cdni.rt.com/files/2020.07/article/5f0f28a92030273358121cbf.jpeg";
}

function setMHImage3(){
  document.getElementById("mainHeadLeftPic").src="images/maincenterImage1.jpg";
}

function setMHImage4(){
  document.getElementById("mainHeadLeftPic").src="images/maincenterImage2.jpg";
}

function setMHImage5(){
  document.getElementById("mainHeadLeftPic").src="images/maincenterImage3.jpg";
}

function setMHImage6(){
  document.getElementById("mainHeadLeftPic").src="images/maincenterImage4.jpg";
}

function setMHInitialImage(){
  document.getElementById("mainHeadLeftPic").src="https://cdni.rt.com/files/2020.07/article/5f11598a85f5402b3e6b51cc.JPG";
}


//Script för autoslider med knappar

startAutoSlide();
var myVar;

function startAutoSlide(){
  myVar = setInterval(function(){ plusSlides(1); }, 5000);
}

var bSlideIndex = 1;
bShowSlides(bSlideIndex);

function plusSlides(n){
  bShowSlides(bSlideIndex += n);
}
function currentSlide(n){
  bShowSlides(bSlideIndex = n);
}
function bShowSlides(n){
  var i;
  var slides = document.getElementsByClassName("bSlideImages");
  if(n > slides.length){
    bSlideIndex = 1;
  }
  if(n < 1){
    bSlideIndex = slides.length;
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[bSlideIndex - 1].style.display = "block";
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

