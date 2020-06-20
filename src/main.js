import Vue from 'vue'
import App from './App.vue'
import { Avatar, Menu, Card, Button, Progress, Dropdown, DropdownMenu, DropdownItem } from "element-ui"
function calcFontSize(doc, win, designWidth) {
  const html = doc.documentElement;
  const clientWidth = html.clientWidth;
  html.style.fontSize = 100 * (clientWidth / designWidth) + 'px' // rem 根据基准值为100px
}
window.onresize = () => {
  calcFontSize(document, window, 750)
}
calcFontSize(document, window, 750)

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Card)
Vue.use(Avatar)
Vue.use(Menu)
Vue.use(Progress)
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
new Vue({
  render: h => h(App),
}).$mount('#app')
