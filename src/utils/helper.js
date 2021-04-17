// todo
export const openMobileMenu = () => {
  document.querySelector(`.mobile-menu-container`).classList.add("shown");
  document.querySelector(`.mobile-menu-container-inner`).classList.add("shown");
  document.querySelector(`.menu-icon`).classList.add("clicked");
};
// todo
export const closeMobileMenu = () => {
  document.querySelector(`.mobile-menu-container`).classList.remove("shown");
  document
    .querySelector(`.mobile-menu-container-inner`)
    .classList.remove("shown");
  document.querySelector(`.menu-icon`).classList.remove("clicked");
};

export const generateBlockForItemForIndexJson = (item, images) => ({
  id: item.id,
  ukWidth: item.ukWidth,
  src: images[item.src] || images["default"],
  alt: item.alt,
  title: item.title,
  text: item.text, // text could be parsed further, but there is no need
});

export const generateItemForIndexJson = (item, images) => ({
  id: item.id,
  title: item.title,
  blocks: item.blocks.map((item) =>
    generateBlockForItemForIndexJson(item, images)
  ),
});

export const parseIndexJson = (data, images) =>
  data.map((item) => generateItemForIndexJson(item, images));
