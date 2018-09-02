//Selecting DOM attaributes
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item"); //Im selecting all elements with the .nav-item class (better than doing it individually;

//Set Iniatial Stateof the Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

/*Menu Rotation*/
menuBtn.addEventListener("click", menuRotation);
function menuRotation() {
  var x = document.getElementById("navigationButton");

  if (x.classList.contains("close")) {
    var child = menuBtn.querySelectorAll("div");
    child[0].setAttribute(
      "style",
      "transform : rotate(45deg) translate(5px, 5px);"
    ); //top line
    child[1].setAttribute("style", "opacity:0; transition: opacity 0s;"); //middle line - Being erased by reducing the opacity
    child[2].setAttribute(
      "style",
      "transform: rotate(-45deg) translate(8px,-7px);"
    ); //bottom line
  } else if (!x.classList.contains("close")) {
    var child = menuBtn.querySelectorAll("div");
    child[0].setAttribute(
      "style",
      "transform : rotate(180deg) translate(0,0);"
    ); //top line
    child[1].setAttribute(
      "style",
      "transform : rotate(180deg) translate(0,0); opacity:1; transition: opacity 3s;"
    ); //middle line - Being erased by reducing the opacity
    child[2].setAttribute("style", "transform: rotate(0deg) translate(0,0);"); //bottom line
  }
}
