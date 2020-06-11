function myFunction() {
    var navbar = document.getElementById("nav");
    if (navbar.className === "nav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "nav";
    }
  }