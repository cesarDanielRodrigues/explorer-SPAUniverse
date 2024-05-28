import { Router } from "./routes.js";
import { Actions } from "./actions.js";

const actions = new Actions()

const router = new Router()

router.add('/','/pages/home.html')
router.add('/universe','/pages/universe.html')
router.add('/exploration','/pages/exploration.html')
router.add(404,'/pages/404.html')

router.handle()

// window.onpopstate = ()=> router.handle()
window.addEventListener('popstate', ()=>{
    router.handle()
    actions.toogleActive(document.querySelector(`.nav a[href="${window.location.pathname}"]`))
    actions.changeBackground(window.location.pathname)
})
window.route = () => router.route()
