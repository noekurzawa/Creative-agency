const menuBtn = document.querySelector(".menu");
const menu = document.querySelector("aside");
const li = document.querySelector(".list-mobile");

function showMenu() {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menuBtn.style.left = "300px";
  } else {
    menuBtn.style.left = "0";
  }
}

menuBtn.addEventListener("click", showMenu);

function hideMenu() {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.style.position = "absolute";
  } else {
    menu.style.position = "fixed";
  }
}
li.addEventListener("click", hideMenu);
