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
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 2px 12px;
  user-select: none;

}

.button {
  background: none;
  width: 26px;
  height: 26px;
  padding: 5px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:hover {
    background: #6666664a
  }
}
</style>
