import { selectedLink } from "./events.js";
import { Actions } from "./actions.js";

const actions = new Actions();

export class Router {
  routes = {};
  add(routeName, page) {
    this.routes[routeName] = page;
  }
  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState(null, "", event.target.href);
  
    selectedLink(event);
    this.handle();
  }
  handle() {
    const { pathname } = window.location;

    const route = this.routes[pathname] || this.routes[404];

    fetch(route)
      .then((data) => data.text())
      .then((html) => (document.getElementById("app").innerHTML = html));
  }
}
