<template>
  <div id="Input" @click="onHandleClick()">
    <span>{{ value }}</span>
    <VSVG class="button" name="calendar"/>
  </div>
</template>

<script>
import VSVG from '../VSVG';

export default {
  name: "Input",
  props: ['value'],
  components: {
    VSVG
  },
  methods: {
    onHandleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
#Input {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  user-select: none;

  & > span {
    padding-left: 8px;
  }
}

.button {
  background: none;
  width: 26px;
  height: 26px;
  padding: 5px;
  border: none;
  cursor: pointer;
}
</style>
