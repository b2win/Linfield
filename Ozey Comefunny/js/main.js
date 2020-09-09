/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.mouseover = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


var slides = document.querySelectorAll(".main-img > img");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var current = 0;

showSlide(current);

function showSlide(n) {
  for(var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function prevSlide() {
  if(current > 0) current -= 1;
  else current = slides.length -1;
  showSlide(current);
}

function nextSlide() {
  if(current < slides.length -1) current += 1;
  else current = 0;
  showSlide(current);
}

showSlide(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;