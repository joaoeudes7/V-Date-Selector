<template>
  <span id="VSvg" :style="styleSVG" v-html="icon" @click="onHandleClick" />
</template>

<script>
import icons from './icons.js';

export default {
  name: "VSVG",
  props: {
    name: { type: String, required: true },
    styles: { type: Object }
  },
  methods: {
    onHandleClick() {
      this.$emit('click')
    }
  },
  computed: {
    icon() {
      return icons[this.name];
    },
    styleSVG() {
      return {
        fill: '#464646',
        ...this.styles
      };
    }
  }
};
</script>

<style scoped lang="scss">
#VSvg {
  display: inline-block;
  vertical-align: middle;
}
</style>
