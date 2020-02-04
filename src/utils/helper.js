export function openMobileMenu() {
  document.querySelector(`.mobile-menu-container`).classList.add("shown");
  document.querySelector(`.mobile-menu-container-inner`).classList.add("shown");
  document.querySelector(`.menu-icon`).classList.add("clicked");
}

export function closeMobileMenu() {
  document.querySelector(`.mobile-menu-container`).classList.remove("shown");
  document.querySelector(`.mobile-menu-container-inner`).classList.remove("shown");
  document.querySelector(`.menu-icon`).classList.remove("clicked");
}
