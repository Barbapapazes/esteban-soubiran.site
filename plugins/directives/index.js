import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import clickOutside from './click-outside'

Vue.use(VueObserveVisibility)
Vue.directive('click-outside', clickOutside)
