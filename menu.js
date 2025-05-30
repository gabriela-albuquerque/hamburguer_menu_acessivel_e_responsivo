const btnMenu = document.getElementById("hamburguer-button");

btnMenu.classList.add("hamburguer-button-js-enabled");

btnMenu.addEventListener("click", function () {
  let expanded = this.getAttribute("aria-expanded") === "true" ? true : false;
  if (expanded) {
  }
});
