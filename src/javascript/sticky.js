var navbar = document.getElementById("header");
var logo = document.getElementById("logo");
document.onscroll = function () {
  if (document.documentElement.scrollTop > 40) {
    navbar.classList.add("scrolled");
    logo.classList.add("scrolled-marked");
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("scrolled-marked");
  }
};
