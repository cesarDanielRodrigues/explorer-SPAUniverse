import { nav } from "./element.js";
import { Actions } from "./actions.js";

const actions = new Actions();

export function selectedLink(event) {

  const pathname = event.target.getAttribute('href')
  const homeButtonWasClicked = event.target.classList.contains("redirect")

  

  actions.changeBackground(pathname) 
  if (homeButtonWasClicked) {
    actions.toogleActive(document.getElementsByName("selected").item(0));
  }else{
      actions.toogleActive(event.target);
  }

  // nav.forEach((link) => {
  //   link.addEventListener("click", () => {
  //     // actions.toogleActive(link);
  //   });
  // });
  
}
