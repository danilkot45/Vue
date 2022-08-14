import Vue from 'vue'
import LessonTwo from './LessonTwo.vue'
import MyPlugin from './plugins/plugin'
// import ColorDirective from './directive/Vcolor'
// import BlurDirective from './directive/Vblur'
// import ScrollEndDirective from './directive/Vscroll'


// Vue.directive('color',ColorDirective)
// Vue.directive('blur',BlurDirective)
// Vue.directive('scroll-end',ScrollEndDirective)

Vue.mixin({
  created() {
    console.log("component created: " + this.$options.name);
  },
  mounted() {
    console.log("component mounted: " + this.$options.name);
  },
  updated() {
    console.log("component updated: " + this.$options.name);
  },
});
Vue.use(MyPlugin)

new Vue({
  name:'App',
  el: '#lessonTwo',
  render: h => h(LessonTwo)
})
