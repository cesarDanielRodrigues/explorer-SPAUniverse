import { nav } from "./element.js";
import { Actions } from "./actions.js";

const actions = new Actions();

export function clickLink() {
  nav.forEach((link) => {
    link.addEventListener("click", () => {
      actions.toogleActive(link);
    });
  });
  
}
