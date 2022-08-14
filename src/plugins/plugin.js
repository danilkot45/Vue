import ColorDirective from '../directive/Vcolor'
import BlurDirective from '../directive/Vblur'
import ScrollEndDirective from '../directive/Vscroll'
import { h } from "vue";

export default {
    install: (Vue) => {
        Vue.directive('color', ColorDirective)
        Vue.directive('blur', BlurDirective)
        Vue.directive('scroll-end', ScrollEndDirective)
        Vue.component('RenderButton', {

            data() {
                return {
                    tag: "button",
                    i: 0,
                    tags: ["a", "p", "div", "h1", "h2", "h3", "span", "b", "button"],
                };
            },
            render() {
                return h(this.tag, {
                    class: "btn-tag",
                    domProps: {
                        innerHTML: 'Кнопка изменения тега'
                    },
                    on: {
                        click: this.ChangeTag
                    }
                });

            },
            methods: {
                ChangeTag() {
                    if (this.i < this.tags.length) {
                        this.tag = this.tags[this.i++];
                    } else {
                        this.i = 0;
                    }
                }
            }
        })
    }
}