import Vue from 'vue'
import root from './root.vue'
import iFrameResize from 'iframe-resizer/js/iframeResizer'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(root)
})

Vue.directive('resize', {
  bind: function (el, {value = {}}) {
    el.addEventListener('load', () => iFrameResize(value, el))
  },
})