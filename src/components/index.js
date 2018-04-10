import backToUp from './backtotop'
const backUp = {}

const install = (Vue) => {
  if (install.installed) {
    return
  }
  Vue.component(backToUp.name, backToUp)
}
backUp.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default backUp
