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