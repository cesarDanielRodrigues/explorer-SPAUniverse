import * as events from "./element.js";
import * as actions from "./actions.js";

export function activeLink() {
  events.nav.forEach((link) => {
    link.addEventListener("click", () => {
      actions.toogleActive(link);
    });
  });
}
