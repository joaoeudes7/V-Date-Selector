<template>
  <div id="app">
    <VDatePicker v-model="date"/>
  </div>
</template>

<script>
import VDatePicker from './index.js'

export default {
  name: 'app',
  components: {
    VDatePicker
  },
  data: () => ({
    date: new Date('11/1/2018')
  }),
  mounted() {
    console.log(VDatePicker)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
