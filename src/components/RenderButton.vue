<script>
import { h } from "vue";

export default {
  name:'AppRenderButton',
  data() {
    return {
      tag: "button",
      i: 0,
      tags: ["a", "p", "div", "h1", "h2", "h3", "span", "b","button"],
    };
  },
  render() {
    return h(this.tag, {
      class:"btn-tag",
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
};
</script>