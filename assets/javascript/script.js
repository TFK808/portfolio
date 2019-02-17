// --- ****NAVIGATION MENU - MAIN PAGES**** --- //
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


// --- ****HOME PAGE - GREETING**** --- //
$(document).ready(function(){
  
  // Create a new date object
  var today = new Date();
  // Find the current hour
  var hourNow = today.getHours();

  var greeting;
  // Display the appropriate greeting based on the current time
  if (hourNow < 12) {
    greeting = "Good Morning. Welcome to my website";
  } else if (hourNow < 18) {
    greeting = "Good Afternoon. Welcome to my website.";
  } else if (hourNow < 24) {
    greeting = "Good Evening. Welcome to my website.";
  } else {
    greeting = "Welcome to my website.";
  };

  document.getElementById("greetDisplay").innerHTML = "<p>" + greeting + "</p>";

});


// --- ****APP INNOVATIONS - SLIDESHOW**** --- //
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
};


// --- ****HORIZON PAGE**** --- //
$(document).ready(function(){
// Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("<img>");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }
});