function myFunction() {
    var navbar = document.getElementById("mobile__nav");
    if (navbar.className === "mobile__nav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "mobile__nav";
    }
  }