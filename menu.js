const btnMenu = document.getElementById("hamburguer-button");
const menu = document.getElementById("menu");

btnMenu.classList.add("hamburguer-button-js-enabled");

function closeMenu() {
  btnMenu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  menu.classList.add("menu-closed");
}

function openMenu() {
  menu.setAttribute("aria-hidden", "false");
  btnMenu.setAttribute("aria-expanded", "true");
  menu.classList.remove("menu-closed");
}

closeMenu();

function toggleMenu() {
  //   expanded.stopPropagation();
  let expanded = this.getAttribute("aria-expanded") === "true" ? true : false;

  document.removeEventListener("click", closeMenu);

  if (expanded) {
    menu.classList.add("menu-closed");
  } else {
    menu.classList.remove("menu-closed");
    setTimeout(() => document.addEventListener("click", closeMenu), 1);
  }

  this.setAttribute("aria-expanded", !expanded);
  menu.setAttribute("aria-hidden", expanded);
}

btnMenu.addEventListener("click", toggleMenu);

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleMediaQueryChange(e) {
  if (e.matches) {
    openMenu();
  } else {
    closeMenu();
  }
}

mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
