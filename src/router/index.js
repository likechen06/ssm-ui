import router from './router'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

NProgress.configure({ showSpinner: true })// NProgress Configuration

const whiteList = ['/login', '/404', '/authredirect']// no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) !== -1) {
    next()
    NProgress.done()
  } else {
    if (hasLogin()) {
      if (hasPromission()) {
        next()
      } else {
        next({ path: '/404' })
      }
      NProgress.done()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

function hasLogin() {
  return true
}

function hasPromission() {
  return true
}

export default router
