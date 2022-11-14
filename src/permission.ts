import router from "@/router";
const NProgress = require('nprogress');
import 'nprogress/nprogress.css';
import { handleSaveActiveRoute } from "@/utils";
import { getToken } from "@/utils/auth";

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start();

  handleSaveActiveRoute(to.path);

  const token = getToken();

  if(to.path === "/login") return next();

  if(!token) return next('/login');

  next();
})

router.afterEach(() => {
  NProgress.done();
})
