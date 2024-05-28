import { nav, body } from "./element.js";
import { backgroundImages } from "./background.js";

export class Actions {
  toogleActive(link) {
    nav.forEach((route) => {
      route.classList.remove("active");
    });
    link.classList.add("active");
  }
  changeBackground(image) {
    image = image || 404

    body.style.background = `url(${backgroundImages[image]}) center/cover`;
  }
}