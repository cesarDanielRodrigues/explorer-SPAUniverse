import { nav } from "./element.js";

export function toogleActive(link) {
  const isActive = link.classList.contains("active");

  nav.forEach((route) => {
      route.classList.remove("active");
  });
  if (!isActive) {
    link.classList.add("active");
  }
}
