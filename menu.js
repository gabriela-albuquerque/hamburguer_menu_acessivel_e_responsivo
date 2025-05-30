const btnMenu = document.getElementById("hamburguer-button");
const menu = document.getElementById("menu");

btnMenu.classList.add("hamburguer-button-js-enabled");

function closeMenu() {
  btnMenu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
  menu.classList.add("menu-closed");
}

closeMenu();

btnMenu.addEventListener("click", function () {
  //   expanded.stopPropagation();
  let expanded = this.getAttribute("aria-expanded") === "true" ? true : false;

  document.removeEventListener("click", closeMenu);

  if (expanded) {
    menu.classList.add("menu-closed");
  } else {
    menu.classList.remove("menu-closed");
  }

  this.setAttribute("aria-expanded", !expanded);
  menu.setAttribute("aria-hidden", expanded);

  setTimeout(function () {
    if (!expanded) {
      document.addEventListener("click", closeMenu);
    }
  }, 1);
});

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleMediaQueryChange(e) {
  if (e.matches) {
    menu.setAttribute("aria-hidden", "false");
    btnMenu.setAttribute("aria-expanded", "true");
    menu.classList.remove("menu-closed");
  } else {
    closeMenu();
  }
}

mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
