import { nav, body,homeButton } from "./element.js";
import { backgroundImages } from "./background.js";

export function toogleActive(link) {
  nav.forEach((route) => {
    route.classList.remove("active");
  });
  link.classList.add("active");
}
export function changeBackground(){
    const {pathname} = window.location

    body.style.background = `url(${backgroundImages[pathname]}) center/cover`
}
