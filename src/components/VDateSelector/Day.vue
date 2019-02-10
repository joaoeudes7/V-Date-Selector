<template>
  <span @click="onHandleClick">{{ value }}</span>
</template>

<script>
export default {
  name: 'Day',
  props: {
    value: { type: Number, required: true }
  },
  methods: {
    onHandleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  background: #f3f3f3;
  padding: 5px;
  width: 24px;
  cursor: pointer;

  :hover {
    background: #d3d3d3;
  }
}
</style>
