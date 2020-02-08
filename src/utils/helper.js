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

export function generateBlockForItemForIndexJson(item, images) {
  return {
    id: item.id,
    ukWidth: item.ukWidth,
    src: images[item.src] || images['default'],
    alt: item.alt,
    title: item.title,
    text: item.text // text could be parsed further, but there is no need
  };
}

export function generateItemForIndexJson(item, images) {
  return {
    id: item.id,
    title: item.title,
    blocks: item.blocks.map(item => generateBlockForItemForIndexJson(item, images))
  };
}

export function parseIndexJson (data, images) {
  return data.map(item => generateItemForIndexJson(item, images));
}
