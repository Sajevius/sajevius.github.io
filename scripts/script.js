window.onscroll = function() {stickNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetBottom;

function stickNavbar() {
  if(window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
