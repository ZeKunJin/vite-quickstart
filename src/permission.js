import router from './router'
import store from './store'

const whiteList = ['login', 'register']

router.beforeEach((to, from, next) => {
  const { token } = store.getters
  whiteList.includes(to.name) || token ? next() : next({ name: 'login' })
})
