const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  const navsm = document.getElementById("header-nav-sm");
  navsm.classList.toggle("in");
  const logo = documemt.getElementById("header-logo");
  logo.classList.toggle("logo-opacity");
  
  
});