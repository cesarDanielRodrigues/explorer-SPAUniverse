import { nav } from "./element.js";
import * as actions from "./actions.js";

export function clickLink() {
  nav.forEach((link) => {
    link.addEventListener("click", () => {
      actions.toogleActive(link);
      actions.changeBackground()
    });
  });
}
