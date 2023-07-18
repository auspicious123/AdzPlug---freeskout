window.addEventListener("scroll", function () {
  var navbar = document.getElementById("mainNav");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
});

var scTop = document.getElementById("scTop");

scTop.addEventListener("click", function () {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
