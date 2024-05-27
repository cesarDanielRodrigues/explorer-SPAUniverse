import { Router } from "./routes.js";
import { nav } from "./element.js";
import { activeLink } from "./events.js";


const router = new Router()

router.add('/','/pages/home.html')
router.add('/universe','/pages/universe.html')
router.add('/exploration','/pages/exploration.html')
router.add(404,'/pages/404.html')

router.handle()

activeLink()

window.onpopstate = ()=> router.handle()
window.route = () => router.route()
