// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import * as VueGoogleMaps from "vue2-google-maps";
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBxpCZUqYFD7u-OrostbRKNK-2YCpaYJ_c",
    libraries: "places" //necessary for places input
  }
});

Vue.use(BootstrapVue);

library.add(faFacebook, faInstagram, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
