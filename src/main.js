// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'


// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

// element-ui/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router'

/* element */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en';
// Vue.use(ElementUI, { locale })
Vue.use(ElementUI)
// Vue.use(router)

/* amap */
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'ade176870bad161a906c8e042ba58951',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0'
})
Vue.config.productionTip = false

/* new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});