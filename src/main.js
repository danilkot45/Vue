import Vue from 'vue'
import LessonTwo from './LessonTwo.vue'
import ColorDirective from './directive/Vcolor'
import BlurDirective from './directive/Vblur'
import ScrollEndDirective from './directive/Vscroll'

Vue.directive('color',ColorDirective)
Vue.directive('blur',BlurDirective)
Vue.directive('scroll-end',ScrollEndDirective)

new Vue({
  el: '#lessonTwo',
  render: h => h(LessonTwo)
})
